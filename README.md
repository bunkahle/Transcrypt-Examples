# Transcrypt-Examples
Examples for transcrypt

You need to have Python 3 installed.

Install Transcrypt with 

    pip install transcrypt==3.6

Since Transcrypt version 3.7 has several redesigns in its handling you need to have Transcrypt version 3.6 installed in order to follow along with this tutorial which refers to Transcrypt version 3.6.

If you still want to work with the latest Transcrypt version >=3.7 you need to modify the script entry in the html file. Before in Transcrypt <=3.6 the entry e.g. for alerts2 in the html file looked like this:

    <script src="__javascript__/alerts2.js"></script>

This needs to be replaced in the following/contained code samples of this tutorial to have the same functionality by:

    <script type="module">import * as alerts2 from './__target__/alerts2.js';window.alerts2 = alerts2;</script>
    
If you want to compile/transpile Python to Javascript and display the code in a wide range of browsers it is recommendable at the moment to stick to Transcrypt version 3.6 since Transcrypt >=3.7 makes use of the the script type module which is only supported by major browsers at the moment (Feb 2019) as hinted in here: https://github.com/QQuick/Transcrypt/issues/611  There might be incompatibilities. This said, let's begin with the tutorial:


Create a directory like hello with two files named [hello.py](https://github.com/bunkahle/Transcrypt-Examples/blob/master/hello/hello.py) and [hello.html](https://github.com/bunkahle/Transcrypt-Examples/blob/master/hello/hello.html)

Run transcrypt to compile the example file hello.py to Javascript files:

    transcrypt hello.py

You get a extra directory named `__javascript__` (Transcrypt <=3.6) resp. `__target__` (Transcrypt >=3.7) where the javascript files are located.

In case you have no Java installed on your machine you might want to use transcrypt without minification of your code which otherwise might produce an error when compiling:

    transcrypt -n hello.py

Start hello.html in your browser and test the code.

If you like to see a kind of tutorial for beginners in Transcrypt go to 

1. Alerts, Prompts and Confirmations:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/alerts/alerts.rst

2a. Inserting text into DOM elements in HTML5:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/dom/insert_text.rst

2b. Document properties:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/dom/document_properties.rst

2c. Changing texts with querySelector(All), getElementById, getElementsByClassName and getElementsByTagName

https://github.com/bunkahle/Transcrypt-Examples/blob/master/dom/changing_texts.rst

3. Programming Cookies:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/cookies/cookies.rst

4. Write documents into the browser ouput with document.write:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/document_write/document_write.rst

5. Navigator properties:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/navigator/navigator.rst

6. Location: Load, reload, replace files into the browser history:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/location/location.rst

Basics on game programming with DOM/HTML5:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/games/games.rst
