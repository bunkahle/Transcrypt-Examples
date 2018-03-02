#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.text2 = 'Hello, User!'
        self.tags = ["p", ".header", "#test", "h1", "output"]
        self.t = 0
        self.qs = self.tags[self.t] 
    
    def insert(self):
        document.querySelector('output').innerText = self.text

    def change(self):
        if document.querySelector('output').innerText == self.text:
            document.querySelector('output').innerText = self.text2
        else:
            document.querySelector('output').innerText = self.text
        document.querySelector(self.qs).style.backgroundColor = "white"
        self.t += 1
        self.qs = self.tags[self.t%len(self.tags)]
        document.querySelector(self.qs).style.backgroundColor = "red"

testSystem = TestSystem()