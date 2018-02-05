#!/usr/bin/env python
# -*- coding: utf-8 -*-

window = document

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.para = 'A new paragraph'
        self.textblock = 'This is an expandable text block.'
        self.button1 = document.getElementById("button1")
        window.addEventListener('click', self.rest)
    
    def insert(self):
        document.querySelector('output').innerText = self.text

    def pressed(self):
        container = document.getElementById('textblock')
        newElm = document.createElement('p')
        newElm.innerText = self.para
        container.appendChild(newElm)

    def rest(self, e):
        elem = e.target
        main = document.querySelector('main')
        ttxt = elem.id 
        # document.querySelector('test').innerText = "Clicked item:"+ttxt
        if (elem.id != "button1" and elem != main):
          parent = elem.parentNode
          parent.removeChild(elem)
          return False

testSystem = TestSystem()
