#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__(self):
        self.forms = {}

    def getForms(self):
        x = document.forms["frm1"]
        for i in range(len(x)):
            self.forms[x.elements[i].getAttribute("name")] = x.elements[i].value

    def displayFormValues(self):
        self.getForms()
        text = "Read directly from the form:<br>"
        for key, value in self.forms.items():
            text += key + ": " + value  + "<br>\n"
        document.getElementById("demo").innerHTML = text

    def getParams(self):
        e = window.location.search[1:].split("&")
        text = "Read from url line:<br>"
        for i in range(len(e)):
            text += e[i].split('=')[0] + " => " + e[i].split('=')[1] + "<br>\n"
        document.getElementById("submitted").innerHTML = text

testSystem = TestSystem()
