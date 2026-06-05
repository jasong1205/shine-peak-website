#!/usr/bin/env python3
"""
Simple HTTP server that always serves index.html for the root path
"""
import http.server
import socketserver
import os

PORT = 8080
DIRECTORY = "."

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def do_GET(self):
        # If root path, serve index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"✅ Server started at http://localhost:{PORT}")
    print(f"✅ Serving files from: {os.path.abspath(DIRECTORY)}")
    print(f"✅ Auto-loading index.html for root path")
    print(f"⏹️  Press Ctrl+C to stop")
    httpd.serve_forever()
