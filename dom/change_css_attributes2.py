#!/usr/bin/env python
# -*- coding: utf-8 -*-

def change_css():
    if document.getElementById("p2").style.fontFamily == "Arial":
        document.getElementById("p2").style.color = "black"
        document.getElementById("p2").style.fontFamily = "Times"
        document.getElementById("p2").style.fontSize = "smaller"
    else:
        document.getElementById("p2").style.color = "blue"
        document.getElementById("p2").style.fontFamily = "Arial"
        document.getElementById("p2").style.fontSize = "larger"
