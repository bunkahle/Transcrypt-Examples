#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
	
	def __init__(self):
		self.secs = 9	

	def count(self):
		setTimeout(self.loop1, 1000)
		setTimeout(self.loop1, 2000)
		setTimeout(self.loop1, 3000)
		setTimeout(self.loop1, 4000)
		setTimeout(self.loop1, 5000)
		setTimeout(self.loop1, 6000)
		setTimeout(self.loop1, 7000)
		setTimeout(self.loop1, 8000)
		setTimeout(self.loop1, 9000)
		setTimeout(self.loop1, 10000)

	def loop1(self):
	    document.getElementById("counting").innerHTML = str(self.secs)+" seconds"
	    self.secs = self.secs - 1
	    if self.secs == 0:
	    	document.getElementById("counting").innerHTML ="Ignition!"

testSystem = TestSystem()