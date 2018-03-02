#!/usr/bin/env python
# -*- coding: utf-8 -*-

def change_text(sel, color):
    console.log(sel+":"+color)
    console.log(":"+document.querySelector(sel).style.backgroundColor+":")
    if document.querySelector(sel).style.backgroundColor == "":
        document.querySelector(sel).style.backgroundColor = color
    else:
        document.querySelector(sel).style.backgroundColor = ""
    document.getElementById("demo").innerHTML = "Highlighted css element: "+sel+" Color:"+color

def change_all_texts(sel, color):
    console.log(sel+":"+color)
    console.log(":"+document.querySelectorAll(sel)[0].style.backgroundColor+":")
    if document.querySelectorAll(sel)[0].style.backgroundColor == "":
        change_color(sel, color)
    else:
        change_color(sel, "")
    document.getElementById("demo").innerHTML = "Highlighted css element: "+sel+" Color:"+color

def change_color(sel, color):
    elements = document.querySelectorAll(sel)
    for e in elements:
        e.style.backgroundColor = color