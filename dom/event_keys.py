#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def init(self):
        self.Keys = {"SPACE":  32,
                     "LEFT":   37,
                     "UP":     38,
                     "RIGHT":  39,
                     "DOWN":   40}
        for i in range(33, 127):
            self.Keys[chr(i)] = i
        document.onkeypress = self.keyHandler

    def keyHandler(self, e):
        kc = e.keyCode 
        cc = e.charCode
        console.log(str(kc)+" "+str(cc))
        document.getElementById("Keycode").innerText = "Keycode: "+str(kc)
        document.getElementById("Charcode").innerText = "Charcode: "+str(cc)
        for key, val in self.Keys.items():
            if kc == val or cc == val:
                document.getElementById("pressed").innerHTML = "You pressed: <b>"+key+"</b>"
                console.log(key+": "+str(val))
                break

testSystem = TestSystem()



