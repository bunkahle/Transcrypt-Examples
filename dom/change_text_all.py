#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text1 = 'Hello, DOM!'
        self.text2 = 'Hello, Python!'
        self.text3 = 'Hello, User!'
        self.text4 = 'Hello, Transcrypt!'
        self.text5 = 'Hello, Javascript!'
        self.text6 = 'Hello, Guido!'
        self.text7 = 'Testing DOM'
        self.text8 = '2nd line'
        self.text9 = '3rd line'
        self.strs = [self.text1, self.text2, self.text3, self.text4, self.text5, self.text6, self.text7, self.text8, self.text9]
        self.pointer = 0

    def change(self):
        classes_p = document.querySelectorAll("p.intro")
        text = ""
        for p, para in enumerate(classes_p):
            text = text + para.innerHTML + "<br>"
            para.innerHTML = self.strs[p+self.pointer]
        self.pointer = (self.pointer+3) % 9
        document.getElementById("output").innerHTML = "Taken from changed column:<br>"+text
        
testSystem = TestSystem()