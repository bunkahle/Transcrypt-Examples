#!/usr/bin/env python
# -*- coding: utf-8 -*-

def display(element):
    att_len = document.getElementById(element).attributes.length
    x = "Attribute length of element " + element + ": " + str(att_len) + " and their Values =>"
    for i in range(att_len):
        x += " " + document.getElementById(element).attributes[i].localName
        x += "=" + document.getElementById(element).attributes[i].value
    document.getElementById("test").innerHTML = x;
