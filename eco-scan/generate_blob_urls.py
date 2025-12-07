import re

# Read the asset links file
with open('image-asset-links.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract asset information
lines = content.split('\n')
assets = []
current_name = ''

for i, line in enumerate(lines):
    # Check for import statement
    if 'import img' in line:
        match = re.search(r'import img(\w+) from', line)
        if match:
            current_name = match.group(1)
    # Check for download URL
    elif 'https://figma.com/file/asset/' in line:
        hash_match = re.search(r'/([a-f0-9]+\.png)', line)
        if hash_match:
            hash_val = hash_match.group(1).replace('.png', '')
            assets.append((current_name, hash_val))

# Generate blob URLs
blob_base = 'blob:https://2139aacd-6823-44fe-b56d-17a66325283c-v2-figmaiframepreview.figma.site/6d9bbd56-0073-4561-aa87-bd1d54038135#filename='

# Create output
output_lines = []
output_lines.append('ECO-SCAN ASSET BLOB URLs')
output_lines.append('=' * 80)
output_lines.append('')
output_lines.append('Generated blob URLs for all Figma assets')
output_lines.append('Format: [Asset Name] - [Blob URL]')
output_lines.append('')
output_lines.append('-' * 80)
output_lines.append('')

for name, hash_val in assets:
    blob_url = blob_base + hash_val + '.png'
    output_lines.append(f'{name}: {blob_url}')

# Write to file
with open('asset-blob-urls.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f'Generated {len(assets)} blob URLs in asset-blob-urls.txt')

