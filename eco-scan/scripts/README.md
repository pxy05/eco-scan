# Image Asset Downloader

Downloads all image assets from `image-asset-links.txt` for the Eco-Scan project.

## Setup

1. Install dependencies:
```bash
pip install -r scripts/requirements.txt
```

## Usage

Run the download script from the project root:
```bash
python scripts/download-assets.py
```

## Features

- Parses `image-asset-links.txt` to extract all 22 image assets
- Tries multiple URL patterns to find working download links
- Downloads images to `public/assets/` directory
- 5-second delay between downloads to prevent rate limiting
- Skips already downloaded files
- Progress indicators and error reporting

## Output

Images are saved to `public/assets/` with filenames matching their hash:
- `afde586264834bcd046545c0d95a8cf848cc7628.png`
- `1e1834c9877633fb626b2a16bf5528fdb2987e7d.png`
- etc.

