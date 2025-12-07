#!/usr/bin/env python3
"""
Image Asset Downloader for Eco-Scan
Downloads all image assets from image-asset-links.txt with rate limiting.
"""

import os
import re
import time
import requests
from pathlib import Path
from typing import List, Dict, Optional

# Configuration
ASSET_LINKS_FILE = "image-asset-links.txt"
OUTPUT_DIR = "public/assets"
DELAY_SECONDS = 5
REQUEST_TIMEOUT = 30

# URL patterns to try (in order)
URL_PATTERNS = [
    # Pattern 1: Figma CDN from the file
    lambda hash: f"https://figma.com/file/asset/{hash}.png",
    # Pattern 2: User's suggested pattern from blob URL
    lambda hash: f"https://645c0ebe-588e-4545-a1d4-a96c262d1dab-v2-figmaiframepreview.figma.site/{hash}.png",
    # Pattern 3: Alternative Figma CDN pattern
    lambda hash: f"https://www.figma.com/file/asset/{hash}.png",
]


def parse_asset_links(file_path: str) -> List[Dict[str, str]]:
    """
    Parse image-asset-links.txt to extract asset information.
    
    Returns a list of dictionaries with:
    - hash: Asset hash (filename without extension)
    - variable: Variable name (e.g., imgEarthCute)
    - description: Asset description from comments
    - url: Direct URL from file (if available)
    """
    assets = []
    current_category = ""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Track category for description
        if line and not line.startswith('-') and '=' in line:
            current_category = line.split('(')[0].strip()
        
        # Match import statement: import imgName from "figma:asset/hash.png";
        import_match = re.search(r'import\s+(\w+)\s+from\s+"figma:asset/([a-f0-9]+)\.png"', line)
        if import_match:
            variable = import_match.group(1)
            hash_value = import_match.group(2)
            
            # Look for URL on next line
            url = None
            if i + 1 < len(lines):
                next_line = lines[i + 1].strip()
                if next_line.startswith('http'):
                    url = next_line
                    i += 1  # Skip the URL line
            
            # Look for description in the hash reference section
            description = None
            # Try to find description from the hash reference section at bottom
            hash_ref_pattern = rf"{hash_value}\.png\s*-\s*(.+)"
            for ref_line in lines:
                if re.search(hash_ref_pattern, ref_line):
                    desc_match = re.search(hash_ref_pattern, ref_line)
                    if desc_match:
                        description = desc_match.group(1).strip()
                        break
            
            assets.append({
                'hash': hash_value,
                'variable': variable,
                'description': description or current_category or 'Unknown',
                'url': url
            })
        
        i += 1
    
    return assets


def download_image(hash_value: str, url_patterns: List, output_path: Path, direct_url: Optional[str] = None) -> bool:
    """
    Download an image using multiple URL patterns.
    
    Args:
        hash_value: Asset hash
        url_patterns: List of URL pattern functions
        output_path: Path to save the file
        direct_url: Direct URL from file (tried first if provided)
    
    Returns True if successful, False otherwise.
    """
    # Try direct URL first if provided
    urls_to_try = []
    if direct_url:
        urls_to_try.append(direct_url)
    
    # Add pattern-based URLs
    for pattern_func in url_patterns:
        urls_to_try.append(pattern_func(hash_value))
    
    for url in urls_to_try:
        
        try:
            print(f"  Trying: {url}")
            response = requests.get(url, timeout=REQUEST_TIMEOUT, stream=True)
            
            # Check if we got a valid image response
            if response.status_code == 200:
                content_type = response.headers.get('content-type', '')
                if 'image' in content_type or len(response.content) > 100:
                    # Save the file
                    with open(output_path, 'wb') as f:
                        for chunk in response.iter_content(chunk_size=8192):
                            f.write(chunk)
                    
                    file_size = output_path.stat().st_size
                    if file_size > 0:
                        print(f"  ✓ Downloaded ({file_size:,} bytes)")
                        return True
                    else:
                        print(f"  ✗ Empty file")
                        output_path.unlink()  # Remove empty file
                else:
                    print(f"  ✗ Not an image (content-type: {content_type})")
            else:
                print(f"  ✗ HTTP {response.status_code}")
        
        except requests.exceptions.RequestException as e:
            print(f"  ✗ Error: {str(e)[:100]}")
            continue
    
    return False


def main():
    """Main download function."""
    print("=" * 60)
    print("Eco-Scan Image Asset Downloader")
    print("=" * 60)
    print()
    
    # Check if asset links file exists
    if not os.path.exists(ASSET_LINKS_FILE):
        print(f"Error: {ASSET_LINKS_FILE} not found!")
        return 1
    
    # Parse assets
    print(f"Parsing {ASSET_LINKS_FILE}...")
    assets = parse_asset_links(ASSET_LINKS_FILE)
    print(f"Found {len(assets)} assets to download\n")
    
    if not assets:
        print("No assets found in file!")
        return 1
    
    # Create output directory
    output_dir = Path(OUTPUT_DIR)
    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {output_dir.absolute()}\n")
    
    # Download each asset
    successful = 0
    failed = 0
    skipped = 0
    
    for idx, asset in enumerate(assets, 1):
        hash_value = asset['hash']
        variable = asset['variable']
        description = asset['description']
        filename = f"{hash_value}.png"
        output_path = output_dir / filename
        
        print(f"[{idx}/{len(assets)}] {variable}")
        print(f"  Hash: {hash_value}")
        print(f"  Description: {description}")
        
        # Check if already downloaded
        if output_path.exists():
            file_size = output_path.stat().st_size
            if file_size > 0:
                print(f"  ⊙ Already exists ({file_size:,} bytes) - skipping")
                skipped += 1
                print()
                continue
        
        # Try to download
        if download_image(hash_value, URL_PATTERNS, output_path, asset.get('url')):
            successful += 1
        else:
            failed += 1
            print(f"  ✗ Failed to download {filename}")
        
        # Rate limiting delay (except for last item)
        if idx < len(assets):
            print(f"  Waiting {DELAY_SECONDS} seconds before next download...")
            time.sleep(DELAY_SECONDS)
        
        print()
    
    # Summary
    print("=" * 60)
    print("Download Summary")
    print("=" * 60)
    print(f"Total assets: {len(assets)}")
    print(f"Successful: {successful}")
    print(f"Failed: {failed}")
    print(f"Skipped: {skipped}")
    print()
    
    if failed > 0:
        print("⚠ Some downloads failed. You may need to:")
        print("  1. Check your internet connection")
        print("  2. Try accessing the Figma file directly")
        print("  3. Export images manually from Figma")
        return 1
    
    print("✓ All assets downloaded successfully!")
    return 0


if __name__ == "__main__":
    exit(main())

