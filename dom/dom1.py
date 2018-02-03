#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.text = 'Hello, DOM!'
    
    def insert(self):
        document.getElementById('output').innerText = self.text

testSystem = TestSystem()
