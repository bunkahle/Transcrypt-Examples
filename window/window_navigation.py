#!/usr/bin/env python
# -*- coding: utf-8 -*-

def back():
    "goes back one window"
    window.history.back()
    document.getElementById("len").innerHTML = "Length of history: "+str(window.history.length)

def fourth():
    "goes forward one window"
    window.history.forward()
    document.getElementById("len").innerHTML = "Length of history: "+str(window.history.length)

def goto(steps):
    "goes steps back or forward in the history"
    window.history.go(steps)
    document.getElementById("len").innerHTML = "Length of history: "+str(window.history.length)

def assign_page(page):
    location.assign(page)
    # document.getElementById("iframe").contentWindow.location.assign(page)
    console.log("a new document was loaded")

def replace_url():
    new_url = document.getElementById("input_location").value
    if not "http" in new_url[:4]:
        new_url = "http://" + new_url
    assign_page(new_url)
    # document.getElementById("page").innerHTML = "Current page: "+new_url
