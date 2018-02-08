#!/usr/bin/env python
# -*- coding: utf-8 -*-

def read():
    x = document.getElementById("main")
    y = x.getElementsByClassName("para")
    for i in y:
        document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "<br>\n" + i.innerHTML


