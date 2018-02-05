#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:

    def __init__ (self):
        self.on = False

    def button_alert(self):
        answer = prompt("Do you want to go to the Transcrypt site?", "Y")
        if answer == "Y" or answer == "y":
            location.href = "https://www.transcrypt.org/"

    def change_button(self):
        if not self.on:
            document.getElementById("bulb").src = 'pic_bulbon.gif'
        else:
            document.getElementById("bulb").src = 'pic_bulboff.gif'
        self.on = not self.on

testSystem = TestSystem()