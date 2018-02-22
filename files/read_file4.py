#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

    def openFile(self, event):
        self.inputvar = event.target
        self.freader = __new__(FileReader())
        self.freader.onload = self.processInput
        # No braces, since you don't want to call this function
        # but just pass its address...

        self.freader.readAsDataURL(self.inputvar.files[0])

    def processInput(self):
        dataURL = self.freader.result
        # console.log("dataURL type:"+type(dataURL))
        document.getElementById('output').src = dataURL

testSystem = TestSystem()

