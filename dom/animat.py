#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

    def __init__ (self):
        pass

    def myMove(self):
        self.elem = document.getElementById("animate")
        self.pos = 0
        self.id = setInterval(self.frame, 5)
        
    def frame(self):
        if (self.pos == 350):
            clearInterval(self.id)
        else:
            self.pos = self.pos + 1
            self.elem.style.top = self.pos + 'px' 
            self.elem.style.left = self.pos + 'px' 
      
testSystem = TestSystem()
