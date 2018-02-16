#!/usr/bin/env python
# -*- coding: utf-8 -*-

def init():
    insert()

def insert():
    document.querySelector('output').innerHTML = 'Hello, DOM!'
    button1 = document.getElementById("button1")
    button1.addEventListener('mousedown', pressed)

def pressed():
    para = 'A new paragraph'
    container = document.getElementById('textblock')
    newElm = document.createElement('p')
    newElm.innerText = para
    container.appendChild(newElm)