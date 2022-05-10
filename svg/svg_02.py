#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:

    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.circle = document.createElementNS(self.svgNS,'circle')
        self.svg.setAttribute('height', 300)
        self.svg.setAttribute('width', 300)
        self.circle.setAttribute('cx', 150)
        self.circle.setAttribute('cy', 150)
        self.circle.setAttribute('r', 100)
        self.circle.setAttribute('stroke', 'black')
        self.circle.setAttribute('stroke-width', 5)
        self.circle.setAttribute('fill', 'red')
        self.svg.appendChild(self.circle)
        document.body.appendChild(self.svg)

        self.b=document.createElement('br')
        document.body.appendChild(self.b)

        self.h=document.createElement('a')
        self.t=document.createTextNode('A Circle')
        self.h.setAttributeNS(null, 'href', 'http://www.google.com')
        self.h.appendChild(self.t)

        document.body.appendChild(self.h)

graphic = SVG()