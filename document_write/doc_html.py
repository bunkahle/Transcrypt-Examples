#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.header = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Document Frame</title>
    <script src="__javascript__/doc_html.js"></script>
  </head>
  <body bgcolor="#E6E6FA">
    <table id="outertable"><tr><td>
      <table><tr><td><h2 id="id1">Document Frame for editing html:</h2></td>
        <td>&nbsp;&nbsp;&nbsp;<button id="changebutton" type="button" onclick="doc_html.testSystem.change_doc()">Try to run the html/code!</button> &nbsp;&nbsp;&nbsp;<button onclick="window.history.back();">Go Back</button></td></tr>
      </table>
      <textarea rows=40 cols="80" autocomplete="off" id="textareaCode" wrap="logical" spellcheck="false">\n"""
        self.startdoc = """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="__javascript__/doc_html.js"></script>
    <title>Titel</title>
  </head>
  <body>
    <h1>Write into html document</h1>
    <p id="explain">To proceed click the button below</p>
    <p>
    <div id ="testmessage">...</div><br>
    <button id="click" onclick="alert('hello')">Say hello</button>
    </p>
  </body>
</html>
        """
        self.footer = """      
      </textarea>
      </td>
      <td>
        <div id="playground"><h2 align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML-Playground</h2></div>
      </td></tr>
    </table>
  </body>
</html> """
    
    def change_doc(self):
        sliced_html = document.getElementById("textareaCode").value
        sliced_html = sliced_html.replace('</textarea>', '&lt;/textarea&gt;')
        window.location = "about:blank"
        # console.log("sliced_html:"+sliced_html)
        document.write(self.header)
        # console.log("sliced_html:"+sliced_html)
        document.write(sliced_html)
        footer = self.footer[:]
        sliced_html = sliced_html.replace("&lt;", "<").replace("&gt;", ">")
        # console.log("sliced_html2:"+sliced_html)
        tag2 = '<div id="playground">'
        f1 = footer.lower().find(tag2) + len(tag2)
        f2 = footer.lower().find("</div>")
        document.write(footer[:f1]+sliced_html+footer[f2:])
        document.write('')
        document.close()

testSystem = TestSystem()
