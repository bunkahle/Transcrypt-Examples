#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class TestSystem:
    
    def __init__ (self):
        self.result = "    The square root is: "
        self.header = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DocWrite</title>
  </head>
  <body>\n"""
        self.footer = "\n  </body>\n</html>"
    
    def isNaN(self, x):
        try:
            a = int(x)
            return False
        except:
            return True

    def sqr(self, x):
        return math.sqrt(x)

    def squareroot(self):
        document.write(self.header)
        number = prompt("Please enter a number", "")
        if self.isNaN(number):
            alert("This is not a number!")
        else:
            result = self.sqr(float(number))
            document.write(self.result+str(result)+"<br>\n")
        document.write('    <button onclick="window.history.back();">Go Back</button>')
        document.write(self.footer)

testSystem = TestSystem()
