#!/usr/bin/env python
# -*- coding: utf-8 -*-

window = document

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.para = 'A new paragraph'
        self.textblock = 'This is an expandable text block.'
        self.button2 = document.getElementById("button2")
        self.clicks = 0
        # window.addEventListener('click', self.rest)
        # self.button2.addEventListener('click', self.rest)
    
    def insert(self):
        document.querySelector('output').innerText = self.text

    def pressed(self):
        container = document.getElementById('textblock')
        newElm = document.createElement('p')
        newElm.innerText = self.para
        container.appendChild(newElm)

    def rest(self, e):
        self.clicks = self.clicks + 1
        document.querySelector('test').innerText = "testing " + str(self.clicks)
        document.getElementById('textblock').innerHTML = "<p>" + self.textblock + "</p>"
        return

testSystem = TestSystem()
