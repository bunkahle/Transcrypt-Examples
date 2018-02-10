#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

    def __init__(self):
        self.pars = {}

    def getParams(self):
        e = window.location.search[1:].split("&")
        for i in range(len(e)):
            pair = e[i].split('=')
            console.log(pair[0] + " => " + pair[1])
            self.pars[pair[0]] = pair[1]
        self.showParams()

    def showParams(self):
        if not self.pars: # i.e. self.pars == {}
            text = "Parameter dictionary is empty"
        else:
            text = "Parameter:<br>\n"
            for key, value in self.pars.items():
                text = text + key + " = " + value + "<br>\n"
        document.getElementById("Parameter").innerHTML = text
        
    def getInput(self):
        self.paramtext = document.getElementById("input-text").value
        self.processInput()

    def processInput(self):
        if self.paramtext[0] != "?":
            self.paramtext = "?" + self.paramtext
        window.location.search = self.paramtext
        self.getParams()

    def checkInput(self, event):
        if (event.keyCode == 13 or event.which == 13):
            self.paramtext = document.getElementById("input-text").value
            self.processInput()
        else:
            self.paramtext = document.getElementById("input-text").value + chr(event.keyCode)
            document.getElementById("Input").innerHTML = self.paramtext

testSystem = TestSystem()
    
