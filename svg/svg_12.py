#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:
    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.svg.setAttribute('height', 500)
        self.svg.setAttribute('width', 500)
        self.r1 = self.draw_graphic('rect', 'x:10; y:10; width:100; height:20; fill:#ff00ff')
        self.svg.appendChild(self.r1)
        self.r2 = self.draw_graphic('rect', 'x:20; y:40; width:100; height:40; rx:15; ry:15; fill:pink; stroke:purple; strokeWidth:7')
        self.svg.appendChild(self.r2)
        self.c1 = self.draw_graphic('circle', 'cx:150; cy:150; r:100; stroke:black; stroke-width:5; fill:red')
        self.svg.appendChild(self.c1)
        self.e1 = self.draw_graphic('ellipse', 'cx:150; cy:150; rx:50; ry:20; stroke:green; stroke-width:5; fill:yellow')
        self.svg.appendChild(self.e1)
        self.l1 = self.draw_graphic('line', 'x1:150; y1:150; x2:250; y2:200; stroke:blue; stroke-width:5')
        self.svg.appendChild(self.l1)
        self.t1 = self.draw_graphic('text', 'x:100; y:100; fill:white;font-family:Verdana;font-size:20')
        self.t1.textContent = 'I love SVG'
        self.svg.appendChild(self.t1)
        document.body.appendChild(self.svg)
    
    def draw_graphic(self, kind, variablen):
        graphic = document.createElementNS(self.svgNS, kind)
        variablen = variablen.replace(" ", "")
        elems = variablen.split(";")
        lelem = len(elems)
        for i in range(lelem):
            elem = elems[i]
            # console.log(elem)
            if ":" in elem:
                key, value = elem.split(":")
                graphic.setAttribute(key, value)
        return graphic

graphic = SVG()