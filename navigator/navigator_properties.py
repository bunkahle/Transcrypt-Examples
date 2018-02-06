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