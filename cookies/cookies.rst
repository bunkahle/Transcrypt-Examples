=======
Cookies
=======

What are cookies?
=================


.. image:: https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg
   :height: 426 px
   :width: 640 px
   :scale: 25 %
   :alt: Cookies
   :align: center

Something to eat, or not ;-) ? On computer browsers cookies are little pieces of information
stored on the side of the user's computer or browser. When a user visits a website repeatedly
the website can find more information on the user and his behaviour when it has stored cookies
on the side of the user's browser. After each call to the website the programming logic of the
website (Javascript oder Transcrypt) could try to find out if a cookie has recently be stored
and what kind of information was saved in the cookie.

An online shop could store address data or a username in cookies or the website could store the
number of calls to the website from the user in a cookie in the computer of the user.
This makes it easy for websites to adjust to the personal needs of the user or offer anything
which might be appropriate.

How are cookies built up?
=========================

A cookie has three components: Its name, its contents and a expiration date.

So let´s say we want to store the username of a user in a cookie and put it automatically back
into a login form when the user comes back. The cookie could like this: ::

	document.cookie = "username=Bob Roberts; expires=Thu, 1 Mar 2018 12:00:00 UTC"

With a path parameter, you can tell the browser what path the cookie belongs to. By default, 
the cookie belongs to the current page: ::

	document.cookie = "username=Bob Roberts; expires=Thu, 1 Mar 2018 12:00:00 UTC; path=/"

So how do we set a cookie with Python/Transcrypt then?

It is quite easy: ::

	# we import the standard library time module from python
	import time

	def setCookie(cname, cvalue, exdays):
        "This set a cookie with a certain cname with a value cvalue and a time in days exdays for the expiration date"
        # get the current time in seconds since the epoch and add exdays multiplied with the seconds of a day
	    t = time.time() + (int(exdays)*24*60*60)
	    # console.log(t) # you can debug the time in the browser console (hit F12 to view it)
	    # time.gmtime gives something like: 
	    # time.struct_time(tm_year=2018, tm_mon=2, tm_mday=11, tm_hour=22, tm_min=52, tm_sec=22, tm_wday=6, tm_yday=42, tm_isdst=0)
	    struc_time = time.gmtime(t)
	    # console.log(struc_time) # debugging
	    # set the struc_time to a string like: 'Sun, 11 Feb 2018 22:52:22 UTC'
	    expires = "expires=" + time.strftime("%a, %d %b %Y %H:%M:%S UTC", struc_time)
	    # console.log(expires) # debugging
	    # and finally set the cookie by setting document.cookie to its value
	    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
	    # alert("Cookie set: " + cname + "=" + cvalue + "; " + expires + "; path=/") # debugging

The cookie has now be set. It can be deleted by the user when the user is resetting all the cookies or a cookie
of a certain website in his browser. It will also be deleted if the expiration is reached and the cookie is not
fresh anymore - it has reached its expiration date (best before date like on food items). 
But it can also be deleted programmatically by the website by just putting its expiration date to a time
back in the past. The code for this looks like this: ::
	
	def deleteCookie(cname):
	    "Delete a cookie with the name stored in cname"
	    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

Now after the cookie has been set we of course also want to read the cookie back in after the user
visits our website again or has asked for content which has been processed programmatically. So how do we do this?
Of course we know what kind of cookies with certain names had been set in the past by our pages so we request
the names of these cookies and we like to know what has been stored inside these "variables" on the side of the user.
The code is: ::

	def getCookie(cname):
	    "Try to find out if a cookie has been set with the name of cname and return its contents, if no cookie is found returnstring == ''"
	    name = cname + "="
	    # console.log("name="+name+";") # debug
	    # The decodeURIComponent() function decodes a URI component
	    # The Uniform Resource Identifier (URI) is replacing each occurrence of certain characters 
	    # with one, two, three or four escape sequences corresponding to the UTF8 encoding of the
	    # character. You often see this is the URL line of your browser like this:
	    # http://www.transcrypt.org?test.cgi?&username=Bob%20Roberts where %20 decodes the space character
	    decodedCookie = decodeURIComponent(document.cookie)
	    # console.log("decodedCookie:"+decodedCookie) # debug
	    allcookies = decodedCookie.split(';')
	    # console.log("allcookies:"+allcookies) # debug
	    for ca in allcookies:
	        # console.log("ca="+ca+";")
	        # if the name of the cookie is found in one of the split list elements
	        if name in ca:
	            f = ca.find(name)
	            # extract the content of the cookie and return it
	            c_content = ca[f+len(name):]
	            return c_content
	    return ""

This function returns a cookie in case it had been stored before, otherwise we will get an empty returnstring.

*Beware*: The document.cookie property looks like a normal text string: ::

	document.cookie = "username=Bob Roberts; expires=Thu, 1 Mar 2018 12:00:00 UTC; path=/"

But it is not. Even if you write a whole cookie string to document.cookie, when you read it out again,
you can only see the name-value pair of it, but not the expiration date or the path, so don´t be confused.
If you set a new cookie, older cookies are not overwritten. The new cookie is added to document.cookie, 
so if you read document.cookie again you will get something like: ::

	username = "Bob Roberts"
	lastvisit = "Dec 31 2017"

Working example on cookies
==========================

So let us look at a more extensive try-and-experience example in Python compiled with Transcrypt to get
to know how to work with cookies. Here we go for `cookies1.py <cookies1.py>`_ : ::

    #!/usr/bin/env python
    # -*- coding: utf-8 -*-

    import time

    class TestSystem:
        
        def setCookie(self, cname, cvalue, exdays):
            t = time.time() + (int(exdays)*24*60*60)
            # console.log(t)
            struc_time = time.gmtime(t)
            # console.log(struc_time)
            expires = "expires=" + time.strftime("%a, %d %b %Y %H:%M:%S UTC", struc_time)
            # console.log(expires)
            document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
            alert("Cookie set: " + cname + "=" + cvalue + "; " + expires + "; path=/")

        def deleteCookie(self, cname):
            document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

        def getCookie(self, cname):
            name = cname + "="
            console.log("name="+name+";")
            # alert("document.cookie:"+document.cookie+":")
            decodedCookie = decodeURIComponent(document.cookie)
            # alert("decodedCookie:"+decodedCookie+":")
            allcookies = decodedCookie.split(';')
            # alert("allcookies:"+allcookies+":")
            for ca in allcookies:
                # console.log("ca="+ca+";")
                if name in ca:
                    f = ca.find(name)
                    c_content = ca[f+len(name):]
                    return c_content
            return ""
        
        def show_cookies(self):
            decodedCookie = decodeURIComponent(document.cookie)
            allcookies = decodedCookie.split(';')
            alert("allcookies:"+allcookies+":")

        def checkCookie(self):
            user = self.getCookie("username")
            # console.log("username="+user+";")
            if (user != ""):
                alert("Welcome again " + user)
            else:
                user = prompt("Please enter your name:","")
                if (user != "" and user is not None):
                    self.setCookie("username", user, 30)

        def create_cookie(self):
            cname = prompt("Please enter the cookie name:","")
            cvalue = prompt("Please enter the cookie value/text:","")
            days = prompt("In how many days is it going to expire?","")
            self.setCookie(cname, cvalue, days)

        def set_name(self):
            alert("Your name will be set as cookie")
            name = prompt('What is your name?','Transcrypt-User')
            days = prompt('How many days shall the cookie last?','7')
            self.setCookie("username", name, days)
               
    testSystem = TestSystem()

The html page for testing this out is `01_cookies1.html <01_cookies1.html>`_ : ::

    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="__javascript__/cookies1.js"></script>
        <title>Cookies</title>
      </head>
      <body>
      	<h2>Cookie demo</h2>
      	<p>Click on the buttons to test cookies!</p>
    	<p>
    		<button onclick="cookies1.testSystem.setCookie('username','TestUser',30)">Set a test cookie</button>
    	</p>
      <p>
        <button onclick="cookies1.testSystem.show_cookies()">Show cookies</button>
      </p>
      <p>
        <button onclick="cookies1.testSystem.deleteCookie('username')">Delete username cookie</button>
      </p>
      <p>
        <button onclick="cookies1.testSystem.set_name()">Set individual name and time cookie for username</button>
      </p>
      <p>
        <button onclick="cookies1.testSystem.create_cookie()">Create your own individual cookie</button>
      </p>
      <p>
        <button onclick="cookies1.testSystem.checkCookie()">Greet cookie</button>
      </p>
      
      </body>
    </html>

End of section.



