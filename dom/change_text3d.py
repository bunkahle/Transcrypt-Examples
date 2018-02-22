#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
	
	def __init__(self):
		self.secs = 9

	def count(self):
		self.secs = 9
		document.getElementById("counting").innerHTML = str(self.secs)+" seconds"
		self.times = []
		for i in range(1000, 11000, 1000):
			to = setTimeout(self.loop1, i)
			self.times.append(to)

	def loop1(self):
	    document.getElementById("counting").innerHTML = str(self.secs)+" seconds"
	    self.secs = self.secs - 1
	    if self.secs == -1:
	    	document.getElementById("counting").innerHTML ="Ignition!"

	def stop_countdown(self):
	 	for i in self.times:
	 		clearTimeout(i)
	 	document.getElementById("counting").innerHTML = "Houston we have a problem - countdown stopped"

testSystem = TestSystem()