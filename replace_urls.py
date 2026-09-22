import os
import re

directory = r'c:\Users\ss270\OneDrive\Desktop\practice\cherr\cherryscaling-next\src'
target_prefix = 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/cherryworks-vids/'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace /vids/
            new_content = re.sub(r'([\'\"])/vids/([^\'\"]+\.mp4)([\'\"])', r'\1' + target_prefix + r'\2\3', content)
            
            # Also replace HoverVideo.tsx poster logic
            if 'HoverVideo.tsx' in file:
                new_content = new_content.replace(
                    "poster={src.replace('.mp4', '-poster.jpg')}",
                    "poster={src.replace('/video/upload/', '/image/upload/').replace('.mp4', '-poster.jpg')}"
                )
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
