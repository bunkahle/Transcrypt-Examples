
=======================
Changing texts with DOM
=======================

querySelector
^^^^^^^^^^^^^

In the next example we will look into querySelector for documents. Before we used ::

	document.getElementById(idname)

to modify the contents of a DOM element. With ::

	querySelector(querySelection)

we can also access not only ids of DOM elements, but also their classes and tagnames. So let's define id, class and tagname to understand these principles. In html documents we can have text which is outlined in the following manner: ::

	<h2 class="header_lesson_1" id="head_lesson1">Vocabularies of lesson 1</h2>
	<p class="vocabulary_english" id="lesson1-voc1-eng">to write</p>  
	<p class="vocabulary_german" id="lesson1-voc1-ger">schreiben</p>
	<p class="vocabulary_english" id="lesson1-voc2-eng">source code</p>  
	<p class="vocabulary_german" id="lesson1-voc2-ger">Quelltext</p>

The tag name of the header is **<h2>**, these paragraphs have all the tagname **<p>**. Usually if we work with Javascript, JQuery or the like these tags are referred to as **h2** or **p** without any additional information.

The class name of the paragraphs for the English vocabularies are **vocabulary_english**. All English vocabularies can be found with this classname while the German vocabularies all have the class name **vocabulary_german**. This makes sense if we want to locate all the places in the document with a certain class, e.g. to change these places by css attributes or define a different format for the output. In Javascript documents classes are referred to with a starting dot like **.vocabulary_english**. So if we like to find a certain class the first finding would be queried by: ::

	querySelector(".vocabulary_english")

In the same way we can also locate the id of a certain DOM element like **lesson1-voc1-eng**, but here we use the hashtag # as the start element before the id name: ::

	querySelector("#lesson1-voc1-eng")

So if no starting sign is given (neither a dot nor a hashtag) it is a tagname. If it is a dot, we have classname and if it is a hashtag we have an id name. No matter what kind of query-selector (tag, class, id) we use we can access all kinds of elements with querySelector. Let's have a view on the source code: `change_text.py <change_text.py>`_: ::

	class TestSystem:
	    
	    def __init__ (self):
	        self.text = 'Hello, DOM!'
	        self.text2 = 'Hello, User!'
	        self.tags = ["p", ".header", "#test", "h1", "output"]
	        self.t = 0
	        self.qs = self.tags[self.t] 
	    
	    def insert(self):
	        document.querySelector('output').innerText = self.text

	    def change(self):
	        if document.querySelector('output').innerText == self.text:
	            document.querySelector('output').innerText = self.text2
	        else:
	            document.querySelector('output').innerText = self.text
	        document.querySelector(self.qs).style.backgroundColor = "white"
	        self.t += 1
	        self.qs = self.tags[self.t%len(self.tags)]
	        document.querySelector(self.qs).style.backgroundColor = "red"

	testSystem = TestSystem()

Each time the change routine is called we change the text between the tagnames <output> and </output> and toggle them constantly. At the same time we also change the css text attributes from white to red background color. We mix all kinds of query selectors inside the list self.tags. We have tagnames like p, h1 and output, but we also have a class name called "header" and an id name with "test". You find the html to try this here: `02_change_text.html <02_change_text.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text.js"></script>
	    <title>QuerySelector</title>
	  </head>
	  <body onload=change_text.testSystem.insert()>
	  	<h1 class="header">DOM examples</h1>
	  	<p id="test">Testing DOM</p>
	  	<p>
	  		<output></output>
	  	</p>
	    <button onclick="change_text.testSystem.change()">Click me</button>
	    <p>Please click repeatedly on the button to see changes in the text and in the style</p>
	  </body>
	</html>

querySelectorAll
^^^^^^^^^^^^^^^^

In the next program we will look into **querySelectorAll**. **document.querySelectorAll** will give you a list of all elements 
which fit to the given querySelector. Let's have a look: `change_text_all.py <change_text_all.py>`_ ::

	class TestSystem:
	    
	    def __init__ (self):
	        self.text1 = 'Hello, DOM!'
	        self.text2 = 'Hello, Python!'
	        self.text3 = 'Hello, User!'
	        self.text4 = 'Hello, Transcrypt!'
	        self.text5 = 'Hello, Javascript!'
	        self.text6 = 'Hello, Guido!'
	        self.text7 = 'Testing DOM'
	        self.text8 = '2nd line'
	        self.text9 = '3rd line'
	        self.strs = [self.text1, self.text2, self.text3, self.text4, self.text5, self.text6, self.text7, self.text8, self.text9]
	        self.pointer = 0

	    def change(self):
	        classes_p = document.querySelectorAll("p.intro")
	        text = ""
	        for p, para in enumerate(classes_p):
	            text = text + para.innerHTML + "<br>"
	            para.innerHTML = self.strs[p+self.pointer]
	        self.pointer = (self.pointer+3) % 9
	        document.getElementById("output").innerHTML = "Taken from changed column:<br>"+text
	        
	testSystem = TestSystem()

All classes with the name **.intro** and the tag name **p** are going to be changed in the loop which
iterates over the array/list of classes which apply to the set filter. The innnerHTML is changed and the old
texts are written to the html element with the id="output".

The html for this code looks like this: `02_change_text_all.html <02_change_text_all.html>`_ ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text_all.js"></script>
	    <title>Change all selected texts</title>
	  </head>
	  <body>
	  	<h1>Change all selected texts at once</h1>
	    <table border=2>
	      <tr><td>
	        <h2 class="head">original</h2></td><td><h2 class="head">changed</h2>
	      </td></tr>
	      <tr><td>
	  	    <p class="original">Testing DOM</p></td><td><p class="intro">Testing DOM</p>
	      </td></tr>
	      <tr><td>
	        <p class="original">2nd line</p></td><td><p class="intro">2nd line</p>
	      </td></tr>
	      <tr><td>
	        <p class="original">3rd line</p></td><td><p class="intro">3rd line</p>
	      </td></tr>
	    </table>
	    <br>
	    <button onclick="change_text_all.testSystem.change()">Change all texts</button>
	    <p id="output"></p>
	  </body>
	</html>

getElementById
^^^^^^^^^^^^^^

But it is quite usual to work with **getElementById** in order to access html elements. In this case you don't need to specify the hashtag in front of the id name because we know by using **getElementById** that it must be an id. `change_text2b.py <change_text2b.py>`_ ::

	def insert():
	    myElement = document.getElementById("intro")
	    document.getElementById("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

The html for it: `02b_change_text.html <02b_change_text.html>`_ ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2b.js"></script>
	    <title>getElementById</title>
	  </head>
	  <body onload=change_text2b.insert()>
	    <p id="intro"><b>Hello World!</b></p>
	    <p>This example demonstrates the <b>getElementById</b> method!</p>
	    <p id="demo"></p>
	  </body>
	</html>

getElementsByClassName
^^^^^^^^^^^^^^^^^^^^^^

We can also do this for tagnames and class names. For the same class name we are going to iterate over the array/list of 
possible elements which is embraced by the tag name of "main": `change_text2d.py <change_text2d.py>`_ ::

	def read():
	    x = document.getElementById("main")
	    y = x.getElementsByClassName("para")
	    for i in y:
	        document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "<br>\n" + i.innerHTML

and the html for it : `02d_change_text.html <02d_change_text.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2d.js"></script>
	    <title>getElementsByClassName</title>
	  </head>
	  <body onload=change_text2d.read()>
	  <p><b>getElementsByClassName</b></p>
	  <div id="main">
	    <p class="para">The first paragraph</p>
	    <p class="para">The 2nd paragraph for the <b>getElementsByClassName</b> method</p>
	    <p class="para">The 3rd paragraph for the method</p>
	  </div>
	  <p class="para">Another paragraph outside main</p>
	  <p id="demo"></p>
	</body>
	</html>

getElementsByTagName
^^^^^^^^^^^^^^^^^^^^

And the example for tagname finding: `change_text3.py <change_text3.py>`_::

	def read():
	    x = document.getElementById("main")
	    y = x.getElementsByTagName("p")
	    for i in y:
	        document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "<br>\n" + i.innerHTML

And the html for it: `02c_change_text.html <02c_change_text.html>`_ ::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text3.js"></script>
	    <title>getElementsByTagName</title>
	  </head>
	  <body onload=change_text3.read()>
	  <p><b>getElementsByTagName</b></p>
	  <div id="main">
	    <p>The first paragraph</p>
	    <p>The 2nd paragraph for the <b>getElementsByTagName</b> method</p>
	    <p>The 3rd paragraph for the method</p>
	  </div>
	  <p>Another paragraph outside main</p>
	  <p id="demo"></p>
	</body>
	</html>

So if you design your html document with a clear structure with selected tag names, classes and ids you can
easily change the contents according to your needs afterwards. Let us look at an example with more complex structures
and try it out. The selections are made visible by changing the background css attributes of these elements:

`change_text2e.py <change_text2e.py>`_ ::

	def change_text(sel, color):
	    console.log(sel+":"+color)
	    console.log(":"+document.querySelector(sel).style.backgroundColor+":")
	    if document.querySelector(sel).style.backgroundColor == "":
	        document.querySelector(sel).style.backgroundColor = color
	    else:
	        document.querySelector(sel).style.backgroundColor = ""
	    document.getElementById("demo").innerHTML = "Highlighted css element: "+sel+" Color:"+color

	def change_all_texts(sel, color):
	    console.log(sel+":"+color)
	    console.log(":"+document.querySelectorAll(sel)[0].style.backgroundColor+":")
	    if document.querySelectorAll(sel)[0].style.backgroundColor == "":
	        change_color(sel, color)
	    else:
	        change_color(sel, "")
	    document.getElementById("demo").innerHTML = "Highlighted css element: "+sel+" Color:"+color

	def change_color(sel, color):
	    elements = document.querySelectorAll(sel)
	    for e in elements:
	        e.style.backgroundColor = color

And the html to try it: `02e_change_text.html <02e_change_text.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2e.js"></script>
	    <title>querySelector</title>
	  </head>
	  <body>
	    <p><b>querySelector</b></p>
	    <main>
	        <p class="para">The first paragraph</p>
	        <p class="para2">The 2nd paragraph for the <b>querySelector</b> method</p>
	        <p class="para3">The 3rd paragraph for the method</p>
	        <p class="para">The 4th paragraph for the method</p>
	        <p class="para">The 5th paragraph for the method</p>
	        <p class="para" id="test">The 6th paragraph for the method</p>
	    </main>
	    <output>output class</output><br>
	    <output2>output class 2</output2><br>
	    <br>
	    <button onclick="change_text2e.change_text('.para', 'red')">Para</button>
	    <button onclick="change_text2e.change_text('.para2', 'yellow')">Para2</button>
	    <button onclick="change_text2e.change_text('.para3', 'violet')">Para3</button>
	    <button onclick="change_text2e.change_text('#test', 'magenta')">Para6</button>
	    <button onclick="change_text2e.change_text('output', 'blue')">Output</button>
	    <button onclick="change_text2e.change_text('output2', 'green')">Output 2</button>
	    <button onclick="change_text2e.change_text('main', 'orange')">Main</button>
	    <button onclick="change_text2e.change_text('.demo', 'grey')">Demo</button><br><br>
	    <button onclick="change_text2e.change_all_texts('.para', 'grey')">Change multiple paragraphs</button>
	    <p class="demo" id="demo">Selector and color</p>
	</body>
	</html>

TranscryptFrame
^^^^^^^^^^^^^^^

Since it is quite annoying to always write code like **document.querySelector(sel)** or **document.getElementById(id)** I thought
about writing a short wrapper for the these functions. In the Javascript world a lot of tools like jQuery and Ajax and the like exist 
to make programming easier. It is called TranscryptFrame.py and can be found here in this 
directory dom: `TranscryptFrame.py <TranscryptFrame.py>`_. 
Let us look at sample use for it `change_text2b_alter.py <change_text2b_alter.py>`_: ::

	import TranscryptFrame as tf

	def insert():
	    myElement = tf.doc_id("intro")
	    tf.doc_id("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

In the first line we import the TranscryptFrame library which should be in the same working directory or saved to the site-packages 
directory of your Python distribution. It gets the abbreviation of tf for shortness. Now we don't need to write something like ::

	myElement = document.getElementById("intro")

but we write: ::

	myElement = tf.doc_id("intro")

the html for it is: `02b_change_text_alter.html <02b_change_text_alter.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2b_alter.js"></script>
	    <title>TranscryptFrame</title>
	  </head>
	  <body onload=change_text2b_alter.insert()>
	    <p id="intro"><b>Hello World!</b></p>
	    <p>This example demonstrates the <b>getElementById</b> method!</p>
	    <p id="demo"></p>
	  </body>
	</html>

Another example with even shorter expressions which is similiar to the jQuery syntax `change_text2c_alter.py <change_text2c_alter.py>`_: ::

	import TranscryptFrame as tf

	def insert():
	    # working:
	    # myElement = tf.S("#intro")
	    # tf.S("#demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

	    # working:
	    # myElement_htm = tf.S("#intro", "htm")
	    # tf.S("#demo").innerHTML = "The text from the intro paragraph is " + myElement_htm

	    # working:
	    tf.S("#demo").innerHTML = "The text from the intro paragraph is " + tf.S("#intro", "htm")

	    # not working: can't assign to function call
	    # tf.S("#demo", "htm") = "The text from the intro paragraph is " + tf.S("#intro", "htm")

The line ::

	tf.S("#demo").innerHTML = "The text from the intro paragraph is " + tf.S("#intro", "htm")

is now replacing the code of: ::

	document.getElementById("demo").innerHTML = "The text from the intro paragraph is " + document.getElementById("intro").innerHTML

And the html for it: `02c_change_text_alter.html <02c_change_text_alter.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2c_alter.js"></script>
	    <title>Change Text with TranscryptFrame</title>
	  </head>
	  <body onload=change_text2c_alter.insert()>
	    <p id="intro"><b>Hello World!</b></p>
	    <p>This example demonstrates the <b>getElementById</b> method!</p>
	    <p id="demo"></p>
	  </body>
	</html>

OK. The last example is more a kind of counting clicks and giving responses to it. `change_text2.py <change_text2.py>`_::

	class TestSystem:
	    
	    def __init__ (self):
	        self.text = 'Hello, DOM!'
	        self.clicks = 0
	    
	    def insert(self):
	        document.querySelector('output').innerText = self.text

	    def pressed(self):
	        self.clicks = self.clicks + 1
	        if self.clicks < 10:
	            text = 'You have pressed ' + str(self.clicks) +' times!'
	        elif self.clicks < 15:
	            text = 'You have pressed ' + str(self.clicks) +' times! How about a break?'
	        else:
	            text = str(self.clicks) + ' times! Stop it!'
	        document.querySelector('output').innerText = text

	    def reset(self):
	        self.clicks = 0
	        text = "It is again " + str(self.clicks) + ' clicks! Where have they gone?!'
	        document.querySelector('output').innerText = text

	testSystem = TestSystem()

And the html: `02a_change_text2.html <02a_change_text2.html>`_::

	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/change_text2.js"></script>
	    <title>Changing texts</title>
	  </head>
	  <body onload=change_text2.testSystem.insert()>
	  	<h1>DOM examples</h1>
	  	<p>Testing DOM</p>
	  	<p>
	  		<output></output>
	  	</p>
	    <p>
	      <test>Test String:</test>
	    </p>
	    <button id="button1" onclick="change_text2.testSystem.pressed()">Click me</button><br>
	    <button id="button2" onclick="change_text2.testSystem.reset()">Reset counter</button><br>
	  </body>
	</html>

End of section.

