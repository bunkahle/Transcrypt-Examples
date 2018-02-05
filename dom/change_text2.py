#!/usr/bin/env python
# -*- coding: utf-8 -*-

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
