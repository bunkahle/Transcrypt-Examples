#!/usr/bin/env python
# -*- coding: utf-8 -*-

def getParams():
    e = window.location.search[1:].split("&")
    for i in range(len(e)):
        console.log(e[i].split('=')[0] + " => " + e[i].split('=')[1])
    console.log(window.location.hash[1:])
    document.getElementById("params").innerHTML = e

    
