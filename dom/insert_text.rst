
==============
Text Insertion
==============

Insert text in a static html document on body onload
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When it comes to HTML5 DOM (DOM = Document Object Model) programming we often find 
the insertion of text in certain places of the html document. Let's demonstrate this
at a simple example: `01_a_insert_text.html <01_a_insert_text.html>`_: ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/insert_text2.js"></script>
	    <title>Insert Text</title>
	  </head>
	  <body onload=insert_text2.insert()>
	    <h1>DOM examples</h1>
	    <p>Testing DOM</p>
	    <p>
	      <div id = "output"></div>
	    </p>
	  </body>
	</html>

We have a simple html document which by itself would only display the header **DOM examples**
and a paragraph saying **"Testing DOM"**. By inserting the script source "__javascript__/insert_text2.js" in the header 
we have also executable program code which can modify the static html text. By calling the body tag with the option
onload="insert_text2.insert()" the program code is going to be executed when the html page is going to be loaded.
Let's see what this routine called `insert_text2.py <insert_text2.py>`_ does: ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-
	    
	def insert():
	    text = 'Hello, DOM!'
	    document.getElementById('output').innerText = text

It specifies a text variable and inserts this text variable into the html element with the name id = "output".
If we look into the html text again we see that there is a div tag with the name id="output" just below the first
paragraph. The element has an attribute called "innerText" which is loaded with the specified text variable.
If we first translate/compile the python code with : ::

	transcrypt insert_text2.py 

to Javascript code inside the directory __javascript__  and then load the html page
`01_a_insert_text.html <01_a_insert_text.html>`_ we see that the page is also displaying
the text "Hello, DOM!" just below the first paragraph where it says Testing DOM. We have changed the text
output of the static html page dynamically by putting code to the html which modifies the representation
and text output of the web page.

Using classes for inserting text
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We could have done that also in a different way by using a class. In this case a simple function call as
def insert() is completely sufficient for the task. But sometime you will have more complex functions and
functions which use the same variables in different routines. So it could be a good idea to define a class
with objects and methods which are all loaded when the class is initialized. Doing this looks like this:
`01_b_insert_text.html <01_b_insert_text.html>`_: ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/insert_text.js"></script>
	    <title>Insert Text</title>
	  </head>
	  <body onload=insert_text.testSystem.insert()>
	    <h1>DOM examples</h1>
	    <p>Testing DOM</p>
	    <p>
	      <div id = "output"></div>
	    </p>
	  </body>
	</html>

In contrast to the example before you see that the script name is slightly different but the main difference
is the call of the routine insert(). It is now called as ::

	<body onload=insert_text.testSystem.insert()>

instead of  ::

	<body onload=insert_text2.insert()>

We have to distinguish between three parts in the routine call: the first part **insert_text.** is the routine name
as it is save as a file in the directory __javascript__ like insert_text.js - this is our source code file for the
script. If we transcrypt our python code to javascript we usually choose the same name for the python code in order to
translate to javascript code. So ::

	transcrypt insert_text.py 

will result in a file called **insert_text.js** in the __javascript__ directory. Transcrypt does also save two more files
with this **insert_text.js file**. These files are called **insert_text.min.js** and **insert_text.mod.js**. 
**insert_text.js** and **insert_text.min.js** have the same functionality and either one could be used on its own without the
other file - they both would work. **insert_text.min.js** is a minified version of the original code insert_text.js and
has all unnecessary characters removed in order to make the file size smaller which would result in faster loading and
executing of the html document. insert_text.min.js can not be read as easy as insert_text.js by humans -
try to compare both files in a text editor. For the parsing routine of the browser it doesn't make any difference. 
If you want to use the minified version of the script you need to specify
this file in the header with: ::

	 <script src="__javascript__/insert_text.min.js"></script>

The routine of calling it at the body tag could stay the same: ::

	<body onload=insert_text.testSystem.insert()>

The third file called **insert_text.mod.js** is just the pure function we have programmed in Python transcrypted to javascript code. It cannot be run directly with our html page unless we write it in a special form. More on this later. **insert_text.mod.js** is the module which we just programmed. In case you are not able to upload script files to your internet provider or website (e.g. like Jimdo - they only let you edit your html files and no upload - but you can insert Javascript code in the header of the html files manually) you could also take the minified code and paste it into a script tag in the header of your web page. ::

	<script>your code of your minified javascript file goes here</script>

But let us go back to the three parts of the routine call: ::

	<body onload=insert_text.testSystem.insert()>

So the first part is the real file with the source code: insert_text.js stored in the directory __javascript__
as specified in the header of the html doc: ::

	 <script src="__javascript__/insert_text.js"></script>

The second part is either the direct routine as in `01_a_insert_text.html <01_a_insert_text.html>`_ or the call
of the class testSystem with its variable as given in the source code:  `insert_text.py <insert_text.py>`_ ::

	class TestSystem:
	    
	    def __init__ (self):
	        self.text = 'Hello, DOM!'
	    
	    def insert(self):
	        document.getElementById('output').innerText = self.text

	testSystem = TestSystem()

Be careful: Do not call the class TestSystem directly but refer to the line: ::

	testSystem = TestSystem()

and specify the call of the class testSystem not the class TestSystem. At last we have the
method of the class or function call inside the class which is called insert(): ::

	<body onload=insert_text.testSystem.insert()>

If we dont specify a class in our code the script call looks like this: ::

	<body onload=insert_text2.insert()>

We just have the script source file and the direct call of the function inside that script.

Direct insertion of script code in the document
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

But there are other ways to include script beside specifying it at the body onload="" tag. We could
also call the routine directly by putting the function call directly somewhere into the html text.
Let's have a look in `insert_text4.py <insert_text4.py>`_: :: 

    def insert(text):
        document.getElementById('output').innerText = text

and the html for it: `01_c_insert_text.html <01_c_insert_text.html>`_: ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/insert_text4.js"></script>
	    <title>Insert Text</title>
	  </head>
	  <body>
	    <h1>DOM examples</h1>
	    <p>Testing DOM</p>
	    <p>
	      <div id = "output"></div>
	    </p>
	    <script>insert_text4.insert("Hello Dom from inside the html!")</script>
	  </body>
	</html>

The function is now not called when the document body is loaded but it is called when the document is written
to the browser's output after the paragraph which embraces the div id="output". You can directly call the
function from within the html text. You specify the filename of the js file (insert_text4.js) as
insert_text4 followed by a dot, then followed by the class if any and another dot and the function call with
the name of the routine.

Sometimes it is might even be necessary to call the functions after the html document of special tags have
been printed to the output of  the browser. If your script does not run and throws the error in the browser console 
(Hit F12 to see it) saying something like: **TypeError: document.getElementById(...) is null** it might be due to the fact that
the document id had not been written to the browser output so far. If you wait with the script call until the document id is existent and has been written (so you place the script call after the document id in the document) you can solve this problem.

Direct code in the Python/Javascript/Transcrypt file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

But you can write even shorter code by not defining a function call in your code but writing direct commands without
a function. In this case the code would look like this `insert_text5.py <insert_text5.py>`_: ::

	text = 'Hello, DOM!'
	document.getElementById('output').innerText = text

and the html looks like this `01_e_insert_text.html <01_e_insert_text.html>`_ : ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>Insert Text</title>
	  </head>
	  <body>
	  	<h1>DOM examples</h1>
	  	<p>Testing DOM</p>
	  	<p>
	  		<div id = "output"></div>
	  	</p>
	    <script src="__javascript__/insert_text5.js"></script>
	  </body>
	</html>

We now have no script source code definition in the header anymore but only the direct call
of the javascript file in "__javascript__/insert_text5.js". Since we have no function call
the direct code is executed in the file insert_text5.js directly in place when the html output
reaches the script call.

And here is a trick if you really want to produce small, efficient code which has been developed
and written in Python but has then been transcrypted to Javascript. In the case above you could have
also used the pure insert_text5.mod.js file. Give it a try with the following html `01_f_insert_text.html <01_f_insert_text.html>`_: ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>Insert Text</title>
	  </head>
	  <body>
	  	<h1>DOM examples</h1>
	  	<p>Testing DOM</p>
	  	<p>
	  		<div id = "output"></div>
	  	</p>
	    <script src="__javascript__/insert_text5.mod.js"></script>
	  </body>
	</html>

The mod.js file for insert_text5 is much smaller than the file sizes of insert_text5.js or even insert_text5.min.js
which both more than 100 times larger. Let's have a look onto insert_text5.mod.js : ::

	(function () {
		var __name__ = '__main__';
		var text = 'Hello, DOM!';
		document.getElementById ('output').innerText = text;
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.text = text;
		__pragma__ ('</all>')
	}) ();

Quite small, isn't it?

In this special case it would work, but not always. It works because we have only direct commands in the code and these 
commands do not apply special Python commands like int() or enumerate() or anything else from the Python world. Sometimes your code includes special Python commands or functions which are not defined in the mod.js file but which would be defined in the main js file oder the min.js file of your routine. You could of course try to mix javascript and python commands in your code and only work with the mod.js file and it seems even to work if you wanted to have python code like ::

	a = int(b)

and you put it in a javascript way ::

	a = parseInt(b)

But this is going to be quite a "hack" and let us stay with the regular convention to use either the regular js-file oder the min.js-file for our coding.

Insert text in a static html document through a mouseclick
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We could of course establish a kind of functionality via mouse click to start a routine 
which inserts text into our document. So we don't use the body onload option but we insert
text into the document by a callable function. Let us look at an example. `insert_text3.py <insert_text3.py>`_ ::

	def insert():
	    x = document.getElementById("myPre").innerHTML
	    document.getElementById("demo").innerHTML = x
	    console.log("This message can only be seen in the console window - hit F12 to view it in the browser")
	    console.log("Console.log can be used for debugging, especially for variables like x.")
	    console.log("x has the value:"+x+": end of var")

and the html page for this is `01_d_insert_text.html <01_d_insert_text.html>`_::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/insert_text3.js"></script>
	    <title>Insert Text</title>
	  </head>
	  <body>
	    <h3>A demonstration of how to access a PRE element</h3>

	    <pre id="myPre">
	    Text in a pre element
	    is displayed in a fixed-width
	    font, and it preserves
	    both      spaces and
	    line breaks
	    </pre>

	    <p>Click the button to get the innerHTML of the pre element.</p>
	    <button onclick="insert_text3.insert()">Try it</button>
	    <p>
	      <div id = "demo"></div>
	    </p>
	  </body>
	</html>

Only when the button "Try it" is clicked the function will be called which takes the
HTML-part of the space with the id="myPre" and puts to the place with the div tag with the
id="demo". The format of the original text between the <pre> tag is going to be lost since
regular html text does not take spaces or line breaks into account unless they are specified with
tags like <br> and the like. The pre = preformatted tag carries these spaces and line breaks and
they will be kept when the <pre> text is displayed.

So we can also insert text into the html doc programmatically or according to user input. The DOM
modification makes HTML5 quite a strong user interface for all kind of programming.

So let us end with a more reasonable example for modifying the DOM contents. According to the day time
the user shall be greeted with different greetings. The html looks like this: `01a_date_time2.html <01a_date_time2.html>`_ ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/showdatetime2.js"></script>
	    <title>Date and Time</title>
	  </head>
	  <body onload="showdatetime2.show_date_time()">
	  <h1>Greeting!</h1>
	  <p id="greet"></p>
	  <BR>
	</body>
	</html>

The python code `showdatetime2.py <showdatetime2.py>`_ : ::

	def show_date_time():
	    text = "It is "
	    date_time = Date()
	    elements = date_time.split(" ")
	    time = elements[4].split(":")
	    hour = int(time[0])
	    text += elements[4] + "<br>"
	    if (6<hour<11):
	        text += "I would say: Good morning"
	    elif (11<=hour<14):
	        text += "Enjoy your lunch"
	    elif (14<=hour<17):
	        text += "Good afternoon"
	    elif (17<=hour<22):
	        text += "Good evening"
	    else:
	        text += "Good night"
	    document.getElementById('greet').innerHTML = text

End of section.
