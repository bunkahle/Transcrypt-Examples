#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This is a suggestion for a transcrypt framework which offers convenient 
solutions or wrappers around common functions.
Originally created by Andreas Bunkahle 2018

You can import this library with 
import TranscryptFrame as tf

and use it in your Python/Transcrypt scripts like this

myElement = tf.doc_id("intro")
tf.doc_id("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML
"""

import time

def isNaN(x):
    try:
        a = int(x)
        return False
    except:
        return True

def button_disable(butt):
    "Disable the button with id butt"
    document.getElementById(butt).disabled = True

def button_enable(butt):
    "Enable the button with id butt"
    document.getElementById(butt).disabled = False

def button_isDisabled(butt):
    "Test if button with id butt is disabled"
    if document.getElementById(butt).disabled == True:
        return True
    else:
        return False

def doc_class(clas):
    "short wrapper for document.getElementByClassName(clas)"
    return document.getElementByClassName(clas)

def doc_id(id):
    "short wrapper for document.getElementById(id)"
    return document.getElementById(id)

def doc_qs(sel):
    "short wrapper for document.querySelector(sel)"
    return document.querySelector(sel)

def doc_tag(tag):
    "short wrapper for document.getElementByTagName(tag)"
    return document.getElementByTagName(tag)

def deleteCookie(cname):
    "Deletes cookie with the name cname"
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

def getAllCookies(cname):
    "Returns all cookies of the document"
    decodedCookie = decodeURIComponent(document.cookie)
    allcookies = decodedCookie.split(';')
    return allcookies

def getCookie(cname):
    "Reads the contents of cookie with the name cname"
    name = cname + "="
    decodedCookie = decodeURIComponent(document.cookie)
    allcookies = decodedCookie.split(';')
    for ca in allcookies:
        if name in ca:
            f = ca.find(name)
            c_content = ca[f+len(name):]
            return c_content
    return ""

def setCookie(cname, cvalue, exdays):
    "Sets a cookie with the name of cname to the contents of cvalue for a period of exdays in days. After this period the cookie expires"
    t = time.time() + (int(exdays)*24*60*60)
    struc_time = time.gmtime(t)
    expires = "expires=" + time.strftime("%a, %d %b %Y %H:%M:%S UTC", struc_time)
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"

