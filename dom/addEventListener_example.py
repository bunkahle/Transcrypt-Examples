#!/usr/bin/env python
# -*- coding: utf-8 -*-
class TestSystem:

    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.para = 'A new paragraph'
        self.textblock = 'This is an expandable text block.'
        self.button1 = document.getElementById("button1")
        self.button1.addEventListener('mousedown', self.pressed)

    def insert(self):
        document.querySelector('output').innerHTML = self.text
        # document.querySelector('test').innerText = "Test"+self.button1+":"

    def pressed(self):
        container = document.getElementById('textblock')
        newElm = document.createElement('p')
        newElm.innerText = self.para
        container.appendChild(newElm)

def init ():
    testSystem = TestSystem()
    testSystem.insert ()