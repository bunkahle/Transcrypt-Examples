
===================
Document properties
===================

Document properties provide information about the doc
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Before we dive more into text changes and dom manipulation one word about
the document properties. The keyword document holds some properties which you
can access programmatically to find out more information about the html document at hand.
Let's look at a simple example: `doc_objects.py <doc_objects.py>`_ ::

	def display_document_objects(self):
		text = "Number of anchors are: " + document.anchors.length + "<br>\n"
		text = text + "document.body.innerHTML.length:" + document.body.innerHTML.length + "<br>\n"
		text = text + "Number of embeds: " + document.embeds.length + "<br>\n"
		text = text + "Number of forms: " + document.forms.length + "<br>\n"
		text = text + "Number of images: " + document.images.length + "<br>\n"
		text = text + "Number of links: " + document.links.length + "<br>\n"
		text = text + "Number of scripts: " + document.scripts.length + "<br>\n"
		text = text + "The title of this document is: " + document.title + "<br>\n"
		document.getElementById('info').innerHTML = text

Quite python-like you can easily document with its different properties: anchors, body,
embeds, forms, images, links, scripts, title etc. You can try this code with the following
html for it: `01a_doc_objects.html <01a_doc_objects.html>`_: ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_objects.js"></script>
	    <title>Document objects</title>
	  </head>
	  <body>

	  <div id="main">
	  <p>Show Document objects</p>
	  <button onclick="doc_objects.display_document_objects()">Show document object information</button>
	  </div><br>
	  <table><tr><td>
	    <a name="html" href="https://www.w3schools.com/html/">HTML Tutorial</a><br>
	    <a name="css" href="http://wiki.selfhtml.org/wiki/CSS">CSS Tutorial</a><br>
	    <a name="xml">XML Tutorial</a><br>
	  </td>
	  <td>
	    <img src="pic_bulboff.gif">
	  </td></tr></table>
	  <form action="">
	    First name: <input type="text" name="fname" value="Monty">
	    <input type="submit" value="Submit">
	  </form> 
	  <p>Objects inside this document:</p>
	  <div id="info"></div>
	  <BR>
	  <UL>In general the following document objects are possible:
	    <li>document.anchors</li>
	    <li>document.body</li>
	    <li>document.documentElement</li>
	    <li>document.embeds</li>
	    <li>document.forms</li>
	    <li>document.head</li>
	    <li>document.images</li>
	    <li>document.links</li>
	    <li>document.scripts</li>
	    <li>document.title</li>
	  </UL>
	</body>
	</html>

Sometimes it might even be useful to see which element in the document had been clicked
and which has become the activeElement. The code for it is more than simple: `doc_props1.py <doc_props1.py>`_ ::

	def active_element():
	    x = document.activeElement.tagName + ", " + document.activeElement.id
	    document.getElementById("demo").innerHTML = x

And the html to try it out: : `01b_doc_properties.html <01b_doc_properties.html>`_: ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_props1.js"></script>
	    <title>Document activeElement</title>
	  </head>
	  <body id="body" onclick="doc_props1.active_element()">
		<p id="explanation_text">Click anywhere in the document to display the active element.</p>
		<input id="inputfield" type="text" value="An input field">
		<button id="button1">A Button</button>
		<p id="demo"></p>
	  </body>
	</html>

It also quite easy to find out about the decoding of the html document. The code for this is simple: `doc_props2.py <doc_props2.py>`_::
	
	def character_set():
	    document.getElementById("demo").innerHTML = "Character set: "+ document.characterSet + "<br>" + "Input decoding: " + document.inputEncoding

And the html to try it out: `01c_doc_properties.html <01c_doc_properties.html>`_: ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/doc_props2.js"></script>
	    <title>Document character set</title>
	  </head>
	  <body>
	    <button onclick="doc_props2.character_set()">Check charset</button>
	    <p id="char_set">The character set of this document is</p>
	    <p id="demo"></p>
	</body>
	</html>

End of section.
