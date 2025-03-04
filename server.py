from http.server import SimpleHTTPRequestHandler
import socketserver

class TemplateHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith('.html'):
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open(self.path[1:], 'r') as f:
                content = f.read()
                content = content.replace(
                    "{% include 'components/header.html' %}",
                    open('components/header.html').read()
                )
                self.wfile.write(content.encode())
        else:
            super().do_GET()

PORT = 8000
with socketserver.TCPServer(("", PORT), TemplateHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
