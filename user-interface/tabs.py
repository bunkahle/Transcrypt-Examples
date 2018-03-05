#!/usr/bin/env python
# -*- coding: utf-8 -*-

def openLang(evt, langName):
    # i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabcontent")
    for i in range(tabcontent.length):
        tabcontent[i].style.display = "none"
    tablinks = document.getElementsByClassName("tablinks")
    for i in range(tablinks.length):
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    document.getElementById(langName).style.display = "block"
    evt.currentTarget.className += " active"