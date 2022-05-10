#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:

    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.text = document.createElementNS(self.svgNS,'text')
        self.svg.setAttribute('height', 100)
        self.svg.setAttribute('width', 200)
        self.text.setAttribute('x', 20)
        self.text.setAttribute('y', 35)
        self.text.setAttribute('fill', 'red')
        self.text.setAttribute('transform', 'rotate(30 20,40)')
        self.text.setAttribute('font-family', "Verdana")
        self.text.setAttribute('font-size', 20)
        self.text.textContent = 'I love SVG'
        self.svg.appendChild(self.text)
        document.body.appendChild(self.svg)

graphic = SVG()
