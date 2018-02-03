#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.askready = "Are you ready?"
        self.header = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DocWrite</title>
  </head>
  <body>\n"""
        self.footer = "\n  </body>\n</html>"
    
    def looping(self):
        confirm(self.askready)
        document.write(self.header)
        for i in range(11):
            mult =  i * i
            text = mult +' = '+ str(i) +' * '+ str(i) +'<br>\n'
            document.write("    " + text)
        document.write('    <button onclick="window.history.back();">Go Back</button>')
        document.write(self.footer)

testSystem = TestSystem()
