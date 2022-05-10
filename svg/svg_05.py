#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:

    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.polygon = document.createElementNS(self.svgNS,'polygon')
        self.svg.setAttribute('height', 280)
        self.svg.setAttribute('width', 500)
        self.polygon.setAttribute('points', "220,10 300,210 170,250 123,234")
        self.polygon.setAttribute('style', 'fill:lime;stroke:purple;stroke-width:3')
        self.svg.appendChild(self.polygon)
        document.body.appendChild(self.svg)

graphic = SVG()
