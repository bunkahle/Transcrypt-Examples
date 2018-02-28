#!/usr/bin/env python
# -*- coding: utf-8 -*-

def active_element():
    x = document.activeElement.tagName + ", " + document.activeElement.id
    document.getElementById("demo").innerHTML = x