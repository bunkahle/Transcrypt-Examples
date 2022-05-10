#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:

    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.path = document.createElementNS(self.svgNS,'path')
        self.svg.setAttribute('height', 210)
        self.svg.setAttribute('width', 400)
        self.path.setAttribute('d', "M150 0 L75 200 L225 200 Z")
        self.svg.appendChild(self.path)
        document.body.appendChild(self.svg)

graphic = SVG()
