#!/usr/bin/env python
# -*- coding: utf-8 -*-

def write_text():
    html_text = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DocWrite</title>
  </head>
  <body>
  <h1>Header</h1>
  <p>any information in the body part</p>
  <button onclick="window.history.back();">Go Back</button>
  </body>\n</html>"""
    document.open()
    document.write(html_text)
    document.close()