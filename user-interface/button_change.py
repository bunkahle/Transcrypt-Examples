#!/usr/bin/env python
# -*- coding: utf-8 -*-

def toggle(evt):
    button1 = document.getElementById("button1")
    button_class = document.getElementsByClassName("button")
    if button1.innerText == "Click Me" or button1.innerText == "Deactivated":
        button1.innerText = "Activated"
        button_class[0].style.backgroundColor="#ff0000"
    else:
        button1.innerText = "Deactivated"
        button_class[0].style.backgroundColor="#4CAF50"