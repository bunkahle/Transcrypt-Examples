#!/usr/bin/env python
# -*- coding: utf-8 -*-

def read_file():
    xmlhttp=__new__(XMLHttpRequest())
    xmlhttp.open('GET', "https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md", False)
    xmlhttp.send()
    response = xmlhttp.responseText
    console.log(response)
    alert(response)

def read_file_local():
    xmlhttp=__new__(XMLHttpRequest())
    xmlhttp.open('GET', "01_readfile.html", False)
    xmlhttp.send()
    response = xmlhttp.responseText
    console.log(response)
    alert(response)
