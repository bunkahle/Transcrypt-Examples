#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class TestSystem:
    
    def __init__ (self):
        self.askready = "Are you ready? Webpage will take a little time to load..."
        self.header = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DocWrite</title>
  </head>
  <body>\n"""
        self.footer = "\n  </body>\n</html>"
    
    def fibonacci(self, n):
        if n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            return self.fibonacci(n-1) + self.fibonacci(n-2)

    def looping(self):
        confirm(self.askready)
        document.open()
        document.write(self.header)
        for i in range(32):
            fib = self.fibonacci(i)
            text = str(fib) +' = '+ str(i) +'<br>\n'
            document.write("    " + text)
        document.write('    <button onclick="window.history.back();">Go Back</button>')
        document.write(self.footer)
        document.close()

testSystem = TestSystem()
