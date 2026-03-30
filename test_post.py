import base64
from PIL import Image
import io
import requests
# create 1x1 png
b = base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=')
with open('test.png','wb') as f:
    f.write(b)

with open('test.png','rb') as f:
    files = {'file': ('test.png', f, 'image/png')}
    r = requests.post('http://127.0.0.1:8002/predict', files=files, timeout=10)
    print('status', r.status_code)
    try:
        print(r.json())
    except Exception as e:
        print('response text:', r.text)
