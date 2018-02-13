==============
Document Write
==============

Document functions like open, write(ln) and close
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The document.write() method writes HTML expressions or JavaScript code to a document.
The content can be generated programmatically and can be dependent on the user input.

Let us have a look at a simple example `doc_write0.py <doc_write0.py>`_: ::

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

The html for is in `doc_write0.html <doc_write0.html>`_ : ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_write0.js"></script>
	    <title>Document Write</title>
	  </head>
	  <body>
	  	<h1>Write into html document</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<div id = "testmessage">Write a static html text</div><br>
			<button onclick="doc_write0.write_text()">Write HTML text</button>
		</p>
	  </body>
	</html>

We have a predefined html text (we could also have different texts which could be chosen
by the user input) and document.open() opens an output stream to our current webpage, 
while document.write(html_text) writes to the stream and document.close() closes the
stream. We can omit document.open() but if we do not close the stream with document.close() 
the browser is indicating that it is still loading the page though there is nothing more to come.
So if your script has finished it is a good idea to use document.close() if you have used
document.write() before.

In the next example where we compute a fibonacci sequence it takes the time for the browser
to compute these numbers. Only at the end the close function is called and the user knows
that he needs to patient to see the complete result. We have split the header and the 
footer of the html text in two strings which will be written at the beginning and the end
of our document. `doc_write.html <doc_write.html>`_ ::

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

The html for it is `doc_write.html <doc_write.html>`_ : ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_write.js"></script>
	    <title>Document Write</title>
	  </head>
	  <body>
	  	<h1>Write into html document</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<div id = "testmessage">write a loop of a mathematical function</div><br>
			<button onclick="doc_write.testSystem.looping()">Start looping</button>
		</p>

	  </body>
	</html>

Only when the for loop has finished we will see the output on the screen, not before.
According to the machine and its power you are using this might take a shorter or longer
time to happen or it might even give you a warning on the side of the browser.
So there is no update of what already has been written - there is only
all at the end or nothing while the page is loading. Ant this is an important limitation
of document.write():

**The call to document.write(anytext) only works while the page is loading.**

And it does not show anything until the page loading is finished.
The write() method is so mostly used for testing: If it is used after an HTML document 
is fully loaded, it will delete all existing HTML - it overwrites an existing html content
on the webpage. 

The method comes from times when there were no DOM and no possibilities to modify the html
element with commands like document.getElementById and the like. But it still lives, because
there are scripts using it.

In modern scripts we rarely see it, because of its important limitations.

document.write() and document.writeln()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Besides document.write() we also have document.writeln() which adds a line break at the 
end of the writing. 
Example `doc_write1.py <doc_write1.py>`_ ::

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
	        document.open()
	        document.write(self.header)
	        document.write("Hello World!")
	        document.write("Have a nice day!")
	        document.write("<p>Note that writeln() adds a new line after each statement:</p>")
	        document.writeln("Hello World!<br>")
	        document.writeln("Have a nice day!<br>")
	        document.writeln("Check the sourcecode for line breaks! (Right mousebutton on the html document and click view sourcecode<br><br>")
	        document.writeln(Date())
	        document.write('    <button onclick="window.history.back();">Go Back</button>')
	        document.write(self.footer)
	        document.close()

	testSystem = TestSystem()

The html page for this code: `doc_write1.html <doc_write1.html>`_ ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_write1.js"></script>
	    <title>Document Write</title>
	  </head>
	  <body>
	  	<h1>Write into html document</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<div id = "testmessage">Write html</div><br>
			<button onclick="doc_write1.testSystem.write()">Start writing</button>
		</p>

	  </body>
	</html>

As expected we see the line break if we look at the source of the web page (right click onto the webpage and source text).
These line breaks do not affect the display of the html text since a line break (carriage return or technically written "\\n")
does not affect the design of the web page. If we want to include a visible line break in the html text we put a
break tag into the text like <br>.

In the next example the document is generated dynamically according to the user input. The user specifies a number
and the script computes the square root of the number.

Example `doc_write2.py <doc_write2.py>`_ ::

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
	        document.open()
	        document.write(self.header)
	        number = prompt("Please enter a number", "")
	        if self.isNaN(number):
	            alert("This is not a number!")
	        else:
	            result = self.sqr(float(number))
	            document.write(self.result+str(result)+"<br>\n")
	        document.write('    <button onclick="window.history.back();">Go Back</button>')
	        document.write(self.footer)
	        document.close()

	testSystem = TestSystem()

The html page for this code: `doc_write2.html <doc_write2.html>`_ ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_write2.js"></script>
	    <title>Document Write</title>
	  </head>
	  <body>
	  	<h1>Write into html document</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<div id = "testmessage">computing square root</div><br>
			<button onclick="doc_write2.testSystem.squareroot()">Compute Square root</button>
		</p>

	  </body>
	</html>

So, as this has been playing around, we will now look a interesting possibility to test html code
with our document.write function. On the left side we have an textarea field which contains any
html code. The user can modify this code, click onto a button and see what is going to change on the
right output side.

Example `doc_html.py <doc_html.py>`_ ::

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
        # in case our test html code includes a textarea tag we need to mask it
        sliced_html = sliced_html.replace('</textarea>', '&lt;/textarea&gt;')
        # we delete/erase the existing output of our browser window
        window.location = "about:blank"
        # console.log("sliced_html:"+sliced_html) # debugging
        document.write(self.header)
        # we put the last changes back into our textarea section
        document.write(sliced_html)
        footer = self.footer[:]
        # now we decode masked html code back into real html
        sliced_html = sliced_html.replace("&lt;", "<").replace("&gt;", ">")
        # console.log("sliced_html:"+sliced_html)
        # as long we are writing with document.write the document.getElementById does not work
        # so we slice it manually
        tag2 = '<div id="playground">'
        f1 = footer.lower().find(tag2) + len(tag2)
        f2 = footer.lower().find("</div>")
        document.write(footer[:f1]+sliced_html+footer[f2:])
        document.close()

	testSystem = TestSystem()

The html page for this code: `doc_html.html <doc_html.html>`_ ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_html.js"></script>
	    <title>Document Frame</title>
	  </head>

	  <body bgcolor="#E6E6FA">
	    <table id="outertable"><tr><td>
	      <table><tr><td><h2 id="id1">Document Frame for editing html:</h2></td>
	        <td>&nbsp;&nbsp;&nbsp;<button id="changebutton" type="button" onclick="doc_html.testSystem.change_doc()">Try to run the html/code!</button> &nbsp;&nbsp;&nbsp;<button onclick="window.history.back();">Go Back</button></td></tr>
	      </table>
	      <textarea  rows=40 cols="80" autocomplete="off" id="textareaCode" wrap="logical" spellcheck="false">
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <script src="__javascript__/doc_html.js"></script>
	    <title>Titel</title>
	  </head>
	  <body>
	    <h1>Write into html document</h1>
	    <p>To proceed click the button below</p>
	  <p>
	    <div id = "testmessage">...</div>
	    <button onclick="alert('hello')">Say hello</button>
	  </p>

	  </body>
	</html>
	       
	       
	       
	       

	      </textarea></div>
	      </td>
	      <td>
	        <div id="playground"><h2 align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML-Playground</h2></div>
	      </td></tr>
	    </table>
	  </body>
	</html>

We could try to even insert complete Javascript scripts into our test code like this: ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <script src="__javascript__/doc_html.js"></script>
	    <title>Titel</title>
	  </head>
	  <body>
	  <script>function test(){document.getElementById("testmessage").innerHTML="testing";}</script>
	    <h1>Write into html document</h1>
	    <p>To proceed click the button below</p>
	  <p>
	    <div id = "testmessage">...</div>
	    <button onclick='test()'>Test</button>
	  </p>

	  </body>
	</html>

End of section.

