#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

    def __init__(self):
        self.textType = 'text.*'

    def openFile(self, event):
        self.inputvar = event.target
        self.freader = __new__(FileReader())
        self.freader.onload = self.processInput
        self.freader.readAsText(self.inputvar.files[0])

    def processInput(self):
        self.text = self.freader.result
        document.getElementById('fileDisplayArea').innerText = self.text

testSystem = TestSystem()

