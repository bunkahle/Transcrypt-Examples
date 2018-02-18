========
Location
========

Location is about the URL or URI line in the browser
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You might want to work with the location function in Transcrypt if you need to
get or manipulate the Uniform Resource Identifier (URI) information from the browser text input
line. Let us see what functions location provides with the following code `location_elements.py <location_elements.py>`_: ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	def init():
	    insert_hash()

	def show():
	    text = "These are the location elements:<br>"
	    text += "Sets or returns the anchor part (#) of a URL that begins with the # character as <b>location.hash</b>: " + location.hash + "<br>"
	    text += "Represents the hostname and port number of the URL <b>location.host</b>: " + location.host + "<br>"
	    text += "Represents the hostname part of the URL as <b>location.hostname</b>: " + location.hostname + "<br>"
	    text += "Represents the complete URL as <b>location.href</b>: " + location.href + "<br>"
	    text += "Returns the protocol, hostname and port number of a URL as <b>location.origin</b>: " + location.origin + "<br>"
	    text += "Represents the pathname part of the URL as <b>location.pathname</b>: " + location.pathname + "<br>"
	    text += "Represents the port part (e.g. :8080) of the URL* as <b>location.port</b>: " + location.port + "<br>"
	    text += "Represents the protocol part of the URL as <b>location.protocol</b>: " + location.protocol + "<br>"
	    text += "The search part of the URL, including the ? is <b>location.search</b>: " + location.search
	    text += "<p><b>* Note: </b>If the port number is default (80 for http and 443 for https), most browsers will display 0 or nothing.</p>"
	    # console.log(dir(location))
	    document.getElementById("locs").innerHTML = text

	def create_query():
	    location.search = "?testname=transcrypt&lang=python"

	def goto_hash(h):
	    console.log(location.href+"#"+h)
	    location.assign(location.href+"#"+h)

	def insert_hash():
	    x = ""
	    for i in range(100):
	        if i == 50:
	            x += '<a name="para' + str(i) + '"></a>' + '<p id="para"'+str(i)+'>Paragraph '+str(i)+' - Now please scroll back to the beginning and press show location elements again - look for the hash</p>'
	        else:
	            x += '<a name="para' + str(i) + '"></a>' + '<p id="para"'+str(i)+'>Paragraph '+str(i)+'</p>'
	    document.getElementById("hashtext").innerHTML = x
	    console.log(x)

The html for this code is `02_location_elements.html <02_location_elements.html>`_ : ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/location_elements.js"></script>
	    <script>document.addEventListener("DOMContentLoaded", location_elements.init)</script>
	    <title>Location elements</title>
	  </head>
	  <body>
	    <h1>Try out the location elements</h1>
	    <button onclick="location_elements.show()">show location elements</button> <br>
	    <p>Click the button below to append a query string to the url.<br>
	      After changing the url line click button "show location elements" above again and see the difference in location.search.</p>
	    <button onclick="location_elements.create_query()">create and append a query string to the url</button> <br>
	    <p>Click the button "go to hash #para50" to goto to the hash #para50 of this url.<br>
	      Then scroll back to the top of the doc and click on show location elements again and see the difference in location.search.</p>
	    <button onclick="location_elements.goto_hash('para50')">go to hash #para50</button> <br>
	    <p id="locs"></p>
	    <p id="hashtext"></p>
	  </body>
	</html>

The first time you load the html page and you click the button "*show location elements*" you will see
that all location properties are displayed.
**location.href** is the most comprehensive one. It holds the complete URL with everything: Protocol comes from **location.protocol**
*(http, https, ftp, etc.)*. **location.hostname** is the hostname like *www.transcrypt.org*, **location.pathname** gives the pathname inside the host like *Transcrypt-Examples/location/02_location_elements.html*, the query string is stored in **location.search** like *?testname=transcrypt&lang=python*
and the hash tag in **location.hash** if the address is pointing to one like *#para50*.

So the complete URL line can be divided into several logic parts which can be retrieved with the location routine.

If you append a query string to the URL and click the first button again you will see the **location.search**
has changed. 

All the dummy paragraphs Paragraph 0, Paragraph 1 have anchor attributes which look in html code like this: ::

	<a name="para0"></a><p id="para0">Paragraph 0</p>
	<a name="para1"></a><p id="para1">Paragraph 1</p> etc.
	<a name="para50"></a><p id="para50">Paragraph 50</p> ...


If you click on the button go to hash *#para50* the document is scrolling down to the specified anchor place and at the same
time this anchor is appended to the URL line as *#para50*. Programmatically this is achieved by setting a new document URL
with **location.assign(webpage)** which simply loads a new webpage into the browser and adds another page to the browser history.

If you now scroll back to the the top of the document (don't use the back button of your browser) and you press
*"show location elements"* again you will see that **location.hash** has changed.

location.assign, location.replace and location.reload
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We already saw location.assign - it was used for loading a new webpage into the browser.
Location.reload is used for reloading the current webpage again and refresh it.
Location.replace is going to replace the current webpage in the browser. This means it is
deleted in the browser history and completely replaced by the new webpage. Let us play around
with the following code: code `location_change.py <location_change.py>`_: ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	def reload_page(forceGet=False):
	    "reloads the html doc - if forceGet == False"
	    console.log("document is going to be reloaded")
	    # document.getElementById("iframe").contentWindow.location.reload(page)
	    location.reload(forceGet)
	    console.log("document was reloaded")

	def rep_page(page):
	    location.js_replace(page)
	    # document.getElementById("iframe").contentWindow.location.replace(page)
	    console.log("document was replaced - should not be in the history anymore")

	def assign_page(page):
	    location.assign(page)
	    # document.getElementById("iframe").contentWindow.location.assign(page)
	    console.log("a new document was loaded")

	def replace_url():
	    new_url = document.getElementById("input_location").value
	    if not "http" in new_url[:4]:
	        new_url = "http://" + new_url
	    assign_page(new_url)
	    # document.getElementById("page").innerHTML = "Current page: "+new_url

Caveat: The javascript replace function is called location.replace(pageaddress) in Javascript.
Here in Transcrypt we need to call location.js_replace(page) instead because replace is a reserved
Python function.

And here comes the html for it: `01_location.html <01_location.html>`_ : ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/location_change.js"></script>
	    <title>Location change of the doc</title>
	  </head>
	  <body>
	    <h1>Try out the location function</h1>
	    <p id="time"></p>
	    <script>document.getElementById("time").innerHTML = Date();</script>

	    <button onclick="location_change.reload_page()">Reload the page and see time change</button>&nbsp;&nbsp;&nbsp;
	    <button onclick="location_change.assign_page('http://www.transcrypt.org')">Go to a new webpage with assign</button>&nbsp;&nbsp;&nbsp;<br><br>
	    <button onclick="location_change.rep_page('http://www.google.com')">Replace the current page with google.com and check the history</button>&nbsp;&nbsp;&nbsp;<br>
	    <br><button onclick="window.history.back();">Go one page back</button>
	    <button onclick="window.history.forward();">Go one page fourth</button>
		<br><br>
	    <iframe id="iframe" src="01_location_frame.html" width="600" height="400">
	      <p>Your browser does not support iframes.</p>
	    </iframe>

	  </body>
	</html>

And in order to try the code in a useful way we also need the html code for the iframe object: `01_location_frame.html <01_location_frame.html>`_ : ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/location_change.js"></script>
	    <title>Changing the location of the doc</title>
	  </head>
	  <body>
	    <h1>Iframe Contents</h1>
	    <input type="text" id="input_location" size="50" value="http://www.transcrypt.org" /> <button onclick="location_change.replace_url()">Go</button><br><br>
	    <p id="pages">Try to insert urls in the text entry field like:<br> 
	    http://www.transcrypt.org<br>
	    Some pages like http://www.google.com won´t work because they don't allow cross-origin framing.
	    </p>

	</body>
	</html>

End of section.