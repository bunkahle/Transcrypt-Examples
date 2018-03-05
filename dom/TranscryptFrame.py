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

and the shortest:
tf.S("#demo") = "The text from the intro paragraph is " + myElement.innerHTML

You can also have jQuery-like function calls like

tf.S("#demo", "htm") = "<p>New paragraph</p>" instead of $("#demo").html("<p>New paragraph</p>") in Javascript
or document.getElementById("demo").innerHTML = "<p>New paragraph</p>" in Transcrypt

or new_var = tf.S("#demo", "htm") instead of new_var = $("#demo").html()
or new_var = document.getElementById("demo").innerHTML
"""

import math, time

con = console
doc = document
his = history
loc = location
win = window

class CanvasImage(object):
    """This is a wrapper around the html5 canvas and canvas context.
       You can now easily instantiate a CanvasImage class like this:
       import TranscryptFrame as tf
       myImage = tf.CanvasImage("myimage.jpg", "my_canvas_id", 200, 200)
       It has methods like:
       copy -> returns a deep copy of the given CanvasImage class
       open(src, canvas_id) -> opens a new image source
       resize(size, position) -> resizes the image to size and position, self.width and self.height are adjusted
       rotate(degree) -> rotates the image by degree
       set_canvas(canvas_id) -> sets a canvas for the CanvasImage object in case it had not been defined before
       show() -> shows the image
       thumbnail(size, position) -> creates a thumbnail without adjusting self.width and self.height
       To get the width and height of an image:
       myImage.width or myImage.height
       To get the width and height of the canvas:
       myImage.canvas.width or myImage.canvas.height
    """

    def __init__(self, src=None, canvas_id=None, width=300, height=200, position=None): 
        self.width = width
        self.height = height
        self.position = position
        if self.position is None:
            self.pos_x = 0
            self.pos_y = 0
        else:
            self.pos_x = position[0]
            self.pos_y = position[1]
        self.position = (self.pos_x, self.pos_y)
        self.set_canvas(canvas_id)
        self.img = __new__(Image())
        self.open(src, canvas_id)
        return self

    def copy(self, canvas_id=None):
        "retrieve a deep copy of the given image"
        new_image = Image(self.src, canvas_id, self.width, self.height)
        return new_image

    def open(self, src, canvas_id=None):
        "open an image from a certain local or remote src to a canvas by specifiying the canvas_id"
        self.src = src
        if self.src is not None:
            self.img.src = self.src
            self.img.onload = self._post_loading()
        if self.canvas_id is not None:
            self.ctx = document.getElementById(self.canvas_id).getContext('2d')
        
    def _post_loading(self):
        "post processing actions after image loading"
        self.width = self.img.naturalWidth
        self.height = self.img.naturalHeight
        self.size = (self.width, self.height)
        self.show()

    def resize(self, size, position=None):
        "resize image to tuple size at given position"
        self.width, self.height = size
        self.ctx.clearRect(0, 0, self.canvasWidth, self.canvasHeight)
        if position is None:
            self.show(self.position, self.width, self.height)
        else:
            self.show(position, self.width, self.height)

    def rotate(self, degree):
        "rotate image by degree"
        if self.ctx is not None:
            self.ctx.clearRect(0, 0, self.canvasWidth, self.canvasHeight)
            # Move registration point and turn axis to the center of the canvas
            self.ctx.translate(self.canvasWidth/2, self.canvasHeight/2)
            # Rotate degree in degrees
            self.ctx.rotate(math.pi / 180 * degree)
            # Move registration point back to the top left corner of canvas
            self.ctx.translate(-self.canvasWidth/2, -self.canvasWidth/2)
            self.ctx.drawImage(self.img, 0, 0, self.canvasWidth, self.canvasHeight)
        else:
            raise AttributeError("No context/canvas id exists for showing the image, use set_canvas to define canvas_id for the image.")

    def set_canvas(self, canvas_id):
        "set the canvas id, the canvas and the canvas context for the Image object"
        self.canvas_id = canvas_id
        if self.canvas_id is not None:
            self.canvas = document.getElementById(self.canvas_id)
            self.canvasWidth = self.canvas.width
            self.canvasHeight = self.canvas.height
            self.ctx = self.canvas.getContext('2d')
        else:
            self.ctx = None

    def show(self, position=None, width=None, height=None):
        "show the image on the canvas with given position (tuple), width and height"
        if position is not None:
            self.pos_x = position[0]
            self.pos_y = position[1]
        else:
            self.pos_x = self.position[0]
            self.pos_y = self.position[1]
        if self.ctx is not None:
            if width is None: width = self.width
            if height is None: height = self.height
            self.ctx.drawImage(self.img, self.pos_x, self.pos_y, width, height)
        else:
            raise AttributeError("No context/canvas id exists for showing the image, use set_canvas to define canvas_id for the image.")

    def thumbnail(self, size, position=None):
        "create and show a thumbnail of a new size"
        width, height = size
        self.show(position, width, height)

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

def c(text):
    "short wrapper for console.log(text)"
    console.log(text)

def S(sel, kind=None):
    "short wrapper for jQuery like $(selector).kind function"
    if sel[0] == "#":
        if kind is None:
            return doc_id(sel[1:])
        elif kind == "text" or kind == "txt":
            return doc_id(sel[1:]).innerText
        elif kind == "html" or kind == "htm":
            return doc_id(sel[1:]).innerHTML
        elif kind == "value" or kind == "val":
            return doc_id(sel[1:]).value
    elif sel[0] == ".":
        if kind is None:
            return doc_class(sel[1:])
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
    "short wrapper for document.getElementsByClassName(clas)"
    return document.getElementsByClassName(clas)

def doc_class_htm(clas, ix):
    "short wrapper for document.getElementsByClassName(clas)[ix].innerHTML"
    return document.getElementsByClassName(clas)[ix].innerHTML

def doc_class_txt(clas, ix):
    "short wrapper for document.getElementsByClassName(clas)[ix].innerText"
    return document.getElementsByClassName(clas)[ix].innerText

def doc_class_val(clas, ix):
    "short wrapper for document.getElementsByClassName(clas)[ix].value"
    return document.getElementsByClassName(clas)[ix].value

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
    "short wrapper for document.getElementsByTagName(tag)"
    return document.getElementsByTagName(tag)

def doc_tag_htm(tag, ix):
    "short wrapper for document.getElementsByTagName(tag)[ix].innerHTML"
    return document.getElementsByTagName(tag)[ix].innerHTML

def doc_tag_txt(tag, ix):
    "short wrapper for document.getElementsByTagName(tag)[ix].innerText"
    return document.getElementsByTagName(tag)[ix].innerText

def doc_tag_val(tag, ix):
    "short wrapper for document.getElementsByTagName(tag)[ix].value"
    return document.getElementsByTagName(tag)[ix].value

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

