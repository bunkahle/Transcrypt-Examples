#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
        self.text2 = 'Hello, Python!'
        self.text3 = 'Hello, User!'
        self.strs = [self.text, self.text2, self.text3]

    def change(self):
        classes_p = document.querySelectorAll("p.intro")
        text = ""
        for p, para in enumerate(classes_p):
            text = text + para.innerHTML + "<br>"
            para.innerHTML = self.strs[p]
        document.getElementById("output").innerHTML = text
        
testSystem = TestSystem()
