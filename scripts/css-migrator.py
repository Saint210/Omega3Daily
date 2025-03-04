import re
import os

def extract_inline_styles(html_file):
    with open(html_file, 'r') as f:
        content = f.read()
    
    inline_styles = re.findall(r'style="([^"]*)"', content)
    return inline_styles

def generate_css_class(styles):
    class_name = f"dynamic-style-{hash(styles)}"
    return f".{class_name} {{ {styles} }}"

def main():
    css_rules = []
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                styles = extract_inline_styles(filepath)
                css_rules.extend([generate_css_class(style) for style in styles])
    
    with open('src/css/dynamic-styles.css', 'w') as f:
        f.write('\n'.join(set(css_rules)))

if __name__ == '__main__':
    main()
