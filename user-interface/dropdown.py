#!/usr/bin/env python
# -*- coding: utf-8 -*-

def links(event):
    if event.target.id == 1:
        alert("You clicked 1")
    elif event.target.id == 2:
        alert("You clicked 2")
    elif event.target.id == 3:
        alert("You clicked 3")
    document.getElementById("link_clicked").innerHTML = document.getElementById(event.target.id).innerHTML