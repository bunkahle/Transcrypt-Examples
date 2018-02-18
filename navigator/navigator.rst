======================================
Navigator information and geo location
======================================

Navigator infos
^^^^^^^^^^^^^^^

The following file and its functions are pretty much self-explanatory. They give information about the browser's properties: `navigator_properties.py <navigator_properties.py>`_ ::

	#!/usr/bin/env python
	# -*- coding: utf-8 -*-

	class TestSystem:

		def __init__(self):
			pass

		def info(self):
		    x = "Browser CodeName: " + navigator.appCodeName + "<br>\n"
		    x = x + "Browser Name: " + navigator.appName + "<br>\n"
		    x = x + "Version Info: " + navigator.appVersion + "<br>\n"
		    x = x + "Cookies Enabled: " + navigator.cookieEnabled + "<br>\n"
		    x = x + "Language of the browser: " + navigator.language + "<br>\n"
		    x = x + "Is the browser online? " + navigator.onLine + "<br>\n"
		    x = x + "Platform: " + navigator.platform + "<br>\n"
		    x = x + "Browser's Engine Name: " + navigator.product + "<br>\n"
		    x = x + "User-agent header sent: " + navigator.userAgent + "<br>\n"
		    x = x + "Java Enabled: " + navigator.javaEnabled() + "<br>\n"
		    x = x + "Data tainting enabled: " + navigator.taintEnabled()
		    document.getElementById("msg").innerHTML = x

		def getLocation(self):
		    if (navigator.geolocation):
		        navigator.geolocation.getCurrentPosition(self.showPosition)
		    else:
		        document.getElementById("loc").innerHTML = "Geolocation is not supported by this browser."
		    
		def showPosition(self, position):
		    document.getElementById("loc").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
		 
	testSystem = TestSystem()

The part geoLocation is interesting. Here we can get the geo location of the browser in case the browser supports this feature.
The function showPosition is called in order to display the geo coordinates by the previous function navigator.geolocation.getCurrentPosition. And here is the html for it `01_navigator_properties.html <01_navigator_properties.html>`_: ::

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/navigator_properties.js"></script>
	    <title>Navigator infos and location</title>
	  </head>
	  <body>

	    <button onclick="navigator_properties.testSystem.info()">Get Navigator infos</button>
	    <button onclick="navigator_properties.testSystem.getLocation()">Get Location info</button>
	    <br><br>
	    <div id="loc"></div>
	    <br><br>
	    <div id="msg"></div>

	  </body>
	</html>

End of section.
