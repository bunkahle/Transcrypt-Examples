    #!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.header = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DocWrite</title>
  </head>
  <body>\n"""
        self.footer = "\n  </body>\n</html>"
    
    def write(self):
        document.write(self.header)
        document.write("Hello World!")
        document.write("Have a nice day!")
        document.write("<p>Note that writeln() adds a new line after each statement:</p>")
        document.writeln("Hello World!<br>")
        document.writeln("Have a nice day!<br>")
        document.writeln("Check the sourcecode for line breaks!<br><br>")
        document.writeln(Date())
        document.write('    <button onclick="window.history.back();">Go Back</button>')
        document.write(self.footer)

testSystem = TestSystem()
