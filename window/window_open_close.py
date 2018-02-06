#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

	def __init__(self):
		self.myWindow = False

	def openWin(self):
	    self.myWindow = window.open("", "myWindow", "width=400, height=200")

	def closeWin(self):
	    if (self.myWindow):
	        self.myWindow.close();
	    
	def checkWin(self):
	    if (not self.myWindow):
	        document.getElementById("msg").innerHTML = "'myWindow' has never been opened!"
	    else:
	        if (self.myWindow.closed): 
	            document.getElementById("msg").innerHTML = "'myWindow' has been closed!"
	        else:
	            document.getElementById("msg").innerHTML = "'myWindow' has not been closed!"
        
testSystem = TestSystem()