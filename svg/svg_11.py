#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
template for this code was:
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
"""

class SVG:
    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.svg.setAttribute('height', 200)
        self.svg.setAttribute('width', 300)
        self.r1 = self.draw_graphic('rect', 'width:100%; height:100%; fill:red')
        self.svg.appendChild(self.r1)
        self.c1 = self.draw_graphic('circle', 'cx:150; cy:100; r:80; fill:green')
        self.svg.appendChild(self.c1)
        self.t1 = self.draw_graphic('text', 'x:150; y:125; font-size:60; text-anchor:middle; fill:white')
        self.t1.textContent = "SVG"
        self.svg.appendChild(self.t1)
        document.body.appendChild(self.svg)
    
    def draw_graphic(self, kind, variablen):
        graphic = document.createElementNS(self.svgNS, kind)
        variablen = variablen.replace(" ", "")
        elems = variablen.split(";")
        lelem = len(elems)
        for i in range(lelem):
            elem = elems[i]
            console.log(elem)
            if ":" in elem:
                key, value = elem.split(":")
                graphic.setAttribute(key, value)
        return graphic

graphic = SVG()