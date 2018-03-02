==================
Alerts and Prompts
==================

Preparation of html files to run transcrypted Python code
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In order to run Python code which has been "transcrypted" to Javascript,
you need to include a text line starting with <script> into your html file which looks like this: ::

	<head>
	  <meta charset="utf-8" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <script src="__javascript__/alerts2.js"></script>
	  <title>Alert Demo</title>
	</head>

The part ::

	<script src="__javascript__/alerts2.js"></script>"


links to the Javascript code which you have transcrypted by running transcrypt like this: ::

	transcrypt alerts2.py

This generates a new directory in your working directory called __javascript__ and puts three files in it
which later can be called as javascript code from the html file by putting in the script line: ::

    <script src="__javascript__/alerts2.js"></script>"

Your Python/Javascript code can be called simply by inserting code like this: ::

	<button onclick="alerts2.alert_standard()">Standard Test Message!</button>

alert_standard() is a Python function in your code stored in alerts2.py.
But let´s have a look on code samples to understand better.

Alerts
======

Alerts are little message boxes which pop up show message
which can be confirmed. There are simply invoked by the function name "alert".

Our first code example `alerts2.py <alerts2.py>`_: ::

	def alert_standard():
	    testMessage = 'TestMessage'
	    alert(testMessage)
	    
	def alert_text(text):
	    alert(text)

Except of the alert function this is pure Python.
Now this is integrated into the `html code <alerts2.html>`_ like this: ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <script src="__javascript__/alerts2.js"></script>
	    <title>Alert Demo</title>
	  </head>
	  <body>
	  	<h2>Hello Alert Demo</h2>
	  	<p>Click on the buttons to see alerts coming up!</p>
	  	<p>
	  	  <button onclick="alerts2.alert_standard()">Standard Test Message!</button>
	    </p>
	  	<p>
	  	  <button onclick="alerts2.alert_text('HTML defined text')">Message defined in the HTML code</button>
	    </p>
	  </body>
	</html>

After we have transcrpyted the file with: ::

	transcrypt alerts2.py

We can load the html file `alerts2.html <alerts2.html>`_ into the browser and click onto the two buttons.
Inside the html code the section 'onclick="alerts2.alert_standard()"' looks for a 
function called alert_standard() in the transcrypted javascript source code alerts.js lying in
the directory __javascript__ inside of our working directory. Make sure that your script line
includes the right name of your code. If you have written python code called alerts2.py you
should include the name <script src="__javascript__/alerts2.js"></script> into your html file,
e.g. in the header of the html file, and just replace the extension .py with .js. 

Clicking onto the first button displays an alert box with the standard message "TestMessage".
Clicking onto the 2nd button displays a message which has been defined in the html text.
Change this text inside the html and another message will be displayed after reload of the webpage while the first button message
can only be changed if you change the Python source code of alerts2.py and recompile it with
transcrypt.exe and reload the html page again.

Alerts and Prompts
==================

Another simple function in Javascript is "prompt" which can be used to get user input to
process it programmatically. But beside defining simple functions inside your Python
code you can also define classes in object oriented programming. Let´s have a look on a source
code example called `alerts3.py <alerts3.py>`_: ::

	class TestSystem:
	    
	    def __init__(self):
	        self.testMessage = 'TestMessage'
	    
	    def alert_standard(self):
	        alert(self.testMessage)
	        
	    def alert_text(self, text):
	        alert(text)

	    def prompt_text(self):
	        entry = prompt('Please enter any text','')
	        alert(entry)

	    def greet_name(self):
	        name = prompt('What is your name?','Transcrypt-User');
	        alert('Hallo, ' + name);
	        
	testSystem = TestSystem()

The functions are now part of the class TestSystem. This class is invoked by calling it
with the line testSystem = TestSystem(). We also see the new function prompt in the 3rd
and 4th function inside of our code. The first argument is the text message displayed by
the prompt, the 2nd argument can be a pre-defined answer and the function returns an user
input. The appropriate `htmlcode <alerts3.html>`_ for this Python code looks like this: ::

	<!DOCTYPE html>
	<html lang="de">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/alerts3.js"></script>
	    <title>Alerts and Prompts</title>
	  </head>
	  <body>
	  	<h2>Alerts and Prompts</h2>
	  	<p>Click on the buttons to see alerts coming up!</p>
		<p>
			<button onclick="alerts3.testSystem.alert_standard()">Standard Test Message!</button>
		</p>
		<p>
			<button onclick="alerts3.testSystem.alert_text('Different HTML defined text')">Message defined in the HTML code</button>
		</p>
		<p>
			<button onclick="alerts3.testSystem.prompt_text()">Get a prompt and display text entry</button>
		</p>
		<p>
			<button onclick="alerts3.testSystem.greet_name()">Ask your name</button>
		</p>
	  </body>
	</html>

The python code `alerts3.py <alerts3.py>`_ gets transcrypted to `alerts3.js <__javascript__/alerts3.js>`_ inside the __javascript__ directory after running ::

	transcrypt.exe alerts3.py

If we work with classes we need to call the functions inside the html text by also including the classname from inside the Python code,
in our case: "alerts3.testSystem.alert_standard()" in contrast to "alerts2.alert_standard()" in the previous
code example. 

But what happens if the user does not enter anything when prompted or presses cancel?

Let us try this piece of code `prompt1.py <prompt1.py>`_: ::

	class TestSystem:
	    
	    def __init__ (self):
	        self.testMessage = 'TestMessage'

	    def prompt_text(self):
	        entry = prompt('Please enter any text','')
	        if entry == "":
	            alert("Nothing has been entered")
	        if entry is None:
	            alert("None - Cancel has been pressed")
	        alert("Entry was:"+entry)
	        return entry

	    def prompt_test(self):
	        ret = self.prompt_text()
	        document.getElementById("result").innerHTML = "Result of entry:"+ret

	    def greet_name(self):
	        name = prompt('What is your name?','Transcrypt-User')
	        alert('Hello, ' + name)
	        
	testSystem = TestSystem()

the web page `prompt1.html <prompt1.html>`_ looks like this: ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/prompt1.js"></script>
	    <title>Prompts</title>
	  </head>
	  <body>
	  	<h2>Prompt demo</h2>
	  	<p>Click on the buttons to see prompts coming up!</p>
		<p>
			<button onclick="prompt1.testSystem.prompt_test()">Get a prompt and display text entry</button>
		</p>
		<p>
			<button onclick="prompt1.testSystem.greet_name()">Ask your name</button>
		</p>
		<div id="result">Result of entry:</div>
	  </body>
	</html>

Clicking the first button also tries the possibility that the user is not entering anything. In this case
an alert box comes up telling: "Nothing has been entered" because the return string in the variable entry
will be empty. If the user has hit Cancel the variable entry will be returned as None. In any case the 
entry will be displayed by an alert box.

Clicking the 2nd button will show a prompt which is asking for the name of the user. After the entry the user
is greeted by Hello, <Username>. But what is more we also see the function ::

	document.getElementById("result").innerHTML = "Result of entry:"+ret

This will take the user entry stored in the variable entry and insert it into the html text where we have the
element with the id name "result". This is the case after the last paragraph where we have an html element of the
div type with id="result". The inner HTML text of this tag will be replaced with the new string "Result of entry:"+ret
where ret holds the result of the entry of the user. In this case we have manipulated the contents of the html file
for the first time. After calling the 2nd button and giving input to the prompt the html text will be changed
according to the user input. 

document.getElementById(idname) is quite an often used function in Javascript but also for our Transcrypt/Python code
in order to change and adjust the html text to the user input. What we alredy see now is the fact that Transcrypt
is going to introduce more and more javascript functions seamlessly into our python code. We simply take the same
functions by their names like alert, prompt, document.getElementsById and integrate them without any further requirements
into our Python code. Elegant and intuitively! In case you are not sure if a certain javascript function exists
just try it in your transcrypt code and see if the compiler transcrypt.exe is complaining or not.

Confirm
=======

Now let us build a more reasonable Python/Javascript application. We like to personalize the greeting of the user and we
like to collect more data like the age of the user - maybe in order to decide if the webpages are appropriate for this
age. We also introduce a new function called confirm which displays a message to confirm the next step.

The procedure is to ask first the name and then the age. According to the age a certain message is displayed. If too
young (<21 years) we regret it otherwise the user is welcome. The code for this task looks like `this <check_name_age.py>`_ ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	class TestSystem:
	    
	    def __init__ (self):
	        self.askname = 'What is your name, dear?'
	        self.askage = 'And what is your age?'
	    
	    def questions(self):
	        confirm("Are you ready?")
	        self.ask_name()
	        self.ask_age()
	        if int(self.age)<21:
	            alert('Sorry, ' + self.name + ", you're too young to enter with " + self.age)
	        else:
	            alert('Welcome, ' + self.name)
	        
	    def ask_name(self):
	        self.name = prompt(self.askname,'')

	    def ask_age(self):
	        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

	testSystem = TestSystem()

the `html text for this code is <check_name_age.html>`_: ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/check_name_age.js"></script>
	    <title>Check Name and Age</title>
	  </head>
	  <body>
	  	<h1>Check Name and Age</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<button onclick="check_name_age.testSystem.questions()">Start query</button>
		</p>

	  </body>
	</html>

In case the user does not enter anything into the prompts we get an uncaught exception inside
the javascript routine. If we want to debug the program we can press F12 inside the broswer while
loading and executing the html file for displaying the web console. To avoid this exception we
can also use the try except functions of python in our next `example <check_name_age2.py>`_. ::
	
	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	class TestSystem:
	    
	    def __init__ (self):
	        self.askname = 'What is your name, dear?'
	        self.askage = 'And what is your age?'
	    
	    def questions(self):
	        confirm("Are you ready?")
	        self.ask_name()
	        self.ask_age()
	        try:
	            age = int(self.age)
	            if age<21:
	                self.message = 'Sorry, ' + self.name + ", you're too young to enter with " + self.age
	            else:
	                self.message = 'Welcome, ' + self.name
	        except:
	            self.message = "You are too silly to enter your age."
	        alert(self.message)
	        
	    def ask_name(self):
	        self.name = prompt(self.askname,'')

	    def ask_age(self):
	        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

	testSystem = TestSystem()

the html code `check_name_age2.html <check_name_age2.html>`_ for this just needs to be adjusted at the script line and with the button function: ::
	
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/check_name_age2.js"></script>
	    <title>Check Name and Age and Mind</title>
	  </head>
	  <body>
	  	<h1>Check Name and Age and Mind</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<button onclick="check_name_age2.testSystem.questions()">Start query</button>
		</p>

	  </body>
	</html>

If the user enters anything but no numbers or nothing at all when asked for his or her age an exception
is thrown and will be caught in the code by putting the message to "You are too silly to enter your age."
The web console now shows no exception anymore.

We could have tackled this problem also in another way. The next code example introduces the function isNaN
which is the abbreviation for Not a Number. If the input is not a number the return will be True otherwise False.
In this case we can also find out if the input of the user for the age is reasonable or wrong.

`check_name_age3.py <check_name_age3.py>`_. ::
	
	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	class TestSystem:
	    
	    def __init__ (self):
	        self.askname = 'What is your name, dear?'
	        self.askage = 'And what is your age?'

	    def isNaN(self, x):
	        try:
	            a = int(x)
	            return False
	        except:
	            return True
	    
	    def questions(self):
	        confirm("Are you ready?")
	        self.ask_name()
	        self.ask_age()
	        if self.isNaN(self.age):
	            self.message = "You are too silly to enter your age."    
	        elif int(self.age)<21:
	            self.message = 'Sorry, ' + self.name + ", you're too young to enter with " + self.age
	        else:
	            self.message = 'Welcome, ' + self.name
	        alert(self.message)
	        
	    def ask_name(self):
	        self.name = prompt(self.askname,'')

	    def ask_age(self):
	        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

	testSystem = TestSystem()

and the html text for it: `check_name_age3.html <check_name_age3.html>`_: ::
	
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/check_name_age3.js"></script>
	    <title>Check Name and Age and Mind</title>
	  </head>
	  <body>
	  	<h1>Check Name and Age and Mind</h1>
	  	<p>To proceed click the button below</p>
		<p>
			<button onclick="check_name_age3.testSystem.questions()">Start query</button>
		</p>

	  </body>
	</html>

We can also load scripts at the same time as the web page is loading. For this we include
an option onload in the body tag `(check_name_age3.html) <check_name_age3.html>`_ : ::
	
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/check_name_age4.js"></script>
	    <title>Check Name and Age and Mind</title>
	  </head>
	  <body onload=check_name_age4.testSystem.questions()>
	  	<h1>Check Name and Age and Mind</h1>
	  	<p id="test">Testing</p>
	  	<p>
	  		<div id = "testmessage">Immediate Test without button</div>
	  	</p>

	  </body>
	</html>

Without having an button to start the query of the procedure starts when the webpage
is loading. The appropriate code `check_name_age4.py <check_name_age4.py>`_ for this is: ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	class TestSystem:
	    
	    def __init__ (self):
	        self.askname = 'What is your name, dear?'
	        self.askage = 'And what is your age?'

	    def isNaN(self, x):
	        try:
	            a = int(x)
	            return False
	        except:
	            return True
	    
	    def questions(self):
	        confirm("Are you ready?")
	        self.ask_name()
	        self.ask_age()
	        if self.isNaN(self.age):
	            self.message = "You are too silly to enter your age."    
	        elif int(self.age)<21:
	            self.message = 'Sorry, ' + self.name + ", you're too young to enter with " + self.age
	        else:
	            self.message = 'Welcome, ' + self.name
	        alert(self.message)
	        document.getElementById("test").innerHTML = self.message
	        
	    def ask_name(self):
	        self.name = prompt(self.askname,'')

	    def ask_age(self):
	        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

	testSystem = TestSystem()


End of section.
