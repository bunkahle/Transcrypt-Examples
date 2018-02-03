#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.text2 = 'Hello, User!'
    
    def insert(self):
        document.querySelector('output').innerText = self.text

    def change(self):
        if document.querySelector('output').innerText == self.text:
            document.querySelector('output').innerText = self.text2
        else:
            document.querySelector('output').innerText = self.text

testSystem = TestSystem()
