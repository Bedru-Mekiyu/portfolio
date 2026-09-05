import os
import re
import sys
from glob import glob

def check_html_links():
    html_files = glob("*.html")
    print(f"Checking {len(html_files)} HTML files for missing local resources...")

    missing_files = []

    for html_file in html_files:
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()

        srcs = re.findall(r'src=["\']([^"\']+)["\']', content)
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)

        for path in srcs + hrefs:
            if path.startswith("http://") or path.startswith("https://") or path.startswith("#") or path.startswith("mailto:") or path.startswith("tel:"):
                continue
            clean_path = path.split('?')[0].split('#')[0]
            if not clean_path:
                continue
            if not os.path.exists(clean_path):
                missing_files.append((html_file, path))

    if missing_files:
        print("Error: Missing local referenced files/links found:")
        for html_file, path in missing_files:
            print(f"  In {html_file}: {path}")
        sys.exit(1)
    else:
        print("Success: All local HTML asset and page references exist!")
        sys.exit(0)

if __name__ == "__main__":
    check_html_links()
