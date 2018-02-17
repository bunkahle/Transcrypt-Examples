#!/usr/bin/env python
# -*- coding: utf-8 -*-

def reload_page(forceGet=False):
    "reloads the html doc - if forceGet == False"
    console.log("document is going to be reloaded")
    # document.getElementById("iframe").contentWindow.location.reload(page)
    location.reload(forceGet)
    console.log("document was reloaded")

def rep_page(page):
    location.replace(page)
    # document.getElementById("iframe").contentWindow.location.replace(page)
    console.log("document was replaced - should not be in the history anymore")

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
