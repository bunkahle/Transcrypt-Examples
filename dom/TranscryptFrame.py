#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This is a suggestion for a transcrypt framework which offers convenient 
solutions or wrappers around common functions.
Originally created by Andreas Bunkahle 2018

You can import this library with 
import TranscryptFrame as tf
if it is in the same directory as your python script or it is located in the Lib/sitepackages directory

and use it in your Python/Transcrypt scripts like this

myElement = tf.doc_id("intro")
tf.doc_id("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

or even shorter:

tf.doc_id_htm("demo") = "The text from the intro paragraph is " + myElement.innerHTML

You can also have jQuery-like function calls like

tf.S("#demo", "htm") = "<p>New paragraph</p>" instead of $("#demo").html("<p>New paragraph</p>") in Javascript
or document.getElementById("demo").innerHTML = "<p>New paragraph</p>" in Transcrypt

or new_var = tf.S("#demo", "htm") instead of new_var = $("#demo").html()
or new_var = document.getElementById("demo").innerHTML
"""

import time

con = console
doc = document
his = history
loc = location
win = window

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

def conlog(text):
    "short wrapper for console.log(text)"
    console.log(text)

def S(sel, kind=None):
    "short wrapper for jQuery like $(selector).kind function"
    if sel[0] == "#":
        if kind is None:
            return doc_id(sel)
        elif kind == "text" or kind == "txt":
            return doc_id(sel[1:]).innerText
        elif kind == "html" or kind == "htm":
            return doc_id(sel[1:]).innerHTML
        elif kind == "value" or kind == "val":
            return doc_id(sel[1:]).value
    elif sel[0] == ".":
        if kind is None:
            return doc_class(sel)
        elif kind == "text" or kind == "txt":
            return doc_class(sel[1:]).innerText
        elif kind == "html" or kind == "htm":
            return doc_class(sel[1:]).innerHTML
        elif kind == "value" or kind == "val":
            return doc_class(sel[1:]).value
    else:
        if kind is None:
            return doc_tag(sel)
        elif kind == "text" or kind == "txt":
            return doc_tag(sel).innerText
        elif kind == "html" or kind == "htm":
            return doc_tag(sel).innerHTML
        elif kind == "value" or kind == "val":
            return doc_tag(sel).value

def doc_class(clas):
    "short wrapper for document.getElementByClassName(clas)"
    return document.getElementByClassName(clas)

def doc_class_htm(clas):
    "short wrapper for document.getElementByClassName(clas).innerHTML"
    return document.getElementByClassName(clas).innerHTML

def doc_class_txt(clas):
    "short wrapper for document.getElementByClassName(clas).innerText"
    return document.getElementByClassName(clas).innerText

def doc_class_val(clas):
    "short wrapper for document.getElementByClassName(clas).value"
    return document.getElementByClassName(clas).value

def doc_id(id):
    "short wrapper for document.getElementById(id)"
    return document.getElementById(id)

def doc_id_htm(id):
    "short wrapper for document.getElementById(id).innerHTML"
    return document.getElementById(id).innerHTML

def doc_id_txt(id):
    "short wrapper for document.getElementById(id).innerText"
    return document.getElementById(id).innerText

def doc_id_val(id):
    "short wrapper for document.getElementById(id).value"
    return document.getElementById(id).value

def doc_qs(sel):
    "short wrapper for document.querySelector(sel)"
    return document.querySelector(sel)

def doc_qs_htm(sel):
    "short wrapper for document.querySelector(sel).innerHTML"
    return document.querySelector(sel).innerHTML

def doc_qs_txt(sel):
    "short wrapper for document.querySelector(sel).innerText"
    return document.querySelector(sel).innerText

def doc_qs_val(sel):
    "short wrapper for document.querySelector(sel).value"
    return document.querySelector(sel).value

def doc_qsa(sel):
    "short wrapper for document.querySelectorAll(sel)"
    return document.querySelectorAll(sel)

def doc_tag(tag):
    "short wrapper for document.getElementByTagName(tag)"
    return document.getElementByTagName(tag)

def doc_tag_htm(tag):
    "short wrapper for document.getElementByTagName(tag).innerHTML"
    return document.getElementByTagName(tag).innerHTML

def doc_tag_txt(tag):
    "short wrapper for document.getElementByTagName(tag).innerText"
    return document.getElementByTagName(tag).innerText

def doc_tag_val(tag):
    "short wrapper for document.getElementByTagName(tag).value"
    return document.getElementByTagName(tag).value

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

