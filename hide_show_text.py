#!/usr/bin/env python
# -*- coding: utf-8 -*-

window = document

class TestSystem:
    
    def __init__ (self):
        self.hide = False

    def pressed(self):
        if self.hide:
            document.getElementById('test').style.display='block'
        else:
            document.getElementById('test').style.display='none'
        self.hide = not self.hide

testSystem = TestSystem()
