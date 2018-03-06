#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def insert():
    text = "The text from the intro paragraph is "
    S("#demo").html(text+S("#intro").html())
    # instead of:
    # myElement = document.getElementById("intro")
    # document.getElementById("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

S(document).ready(insert)