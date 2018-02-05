#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.text2 = 'Hello, User!'
        self.text_current = self.text
    
    def insert(self):
        document.querySelector('output').innerText = self.text

    def change(self):
        if document.querySelector('output').innerText == self.text:
            document.querySelector('output').innerText = self.text2
            self.text_current = self.text2
        else:
            document.querySelector('output').innerText = self.text
            self.text_current = self.text

    def change_attr(self):
        document.querySelector('test').innerText = "Test String:"+document.querySelector('output').innerHTML 
        if "STRONG".lower() in document.querySelector('output').innerHTML.lower():
            document.querySelector('output').innerText= self.text_current
        else:
            document.querySelector('output').innerHTML = "<STRONG>" + self.text_current + "</STRONG>"


testSystem = TestSystem()
