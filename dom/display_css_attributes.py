#!/usr/bin/env python
# -*- coding: utf-8 -*-

def show_body():
    x = document.getElementsByTagName("STYLE")[0]
    document.getElementById("demo").innerHTML = x.innerHTML

def change_style():
    x = document.createElement("STYLE")
    t = document.createTextNode("body {font: 20px verdana; background-color: #808080; color: black;}  p {color: orange;} .para1 {color: yellow;} ")
    x.appendChild(t)
    document.head.appendChild(x)