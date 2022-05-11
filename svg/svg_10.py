#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SVG:
    def __init__(self):
        self.svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        self.svgNS = self.svg.namespaceURI
        self.svg.setAttribute('height', 500)
        self.svg.setAttribute('width', 250)
        self.r1 = self.draw_graphic('rect', 'x:10; y:10; width:230; height:480; fill:#ff00ff')
        self.svg.appendChild(self.r1)
        self.r2 = self.draw_graphic('rect', 'x:40; y:30; width:170; height:400; fill:pink; stroke:purple; strokeWidth:7')
        self.svg.appendChild(self.r2)
        self.c1 = self.draw_graphic('circle', 'cx:125; cy:460; r:10; fill:white; stroke:black; strokeWidth:2')
        self.svg.appendChild(self.c1)
        self.c2 = self.draw_graphic('circle', 'cx:125; cy:125; r:48; fill:none; stroke:#000')
        self.svg.appendChild(self.c2)
        self.p1 = document.createElementNS(self.svgNS,'path')
        self.p1.setAttribute('d', 'M125,76a48,48 0 1 1 0,96a24 24 0 1 1 0-48a24 24 0 1 0 0-48')
        self.svg.appendChild(self.p1)
        self.c3 = self.draw_graphic('circle', 'cx=125; cy=96; r=6')
        self.svg.appendChild(self.c3)
        self.c4 = self.draw_graphic('circle', 'cx=125; cy=155; r=6; fill=#FFF')
        self.svg.appendChild(self.c4)
        self.t1 = self.draw_graphic('text', 'x:125; y:250; font-size:30; family-font:Verdana; text-anchor:middle; fill:black')
        self.t1.textContent = "Yin Yang"
        for i in range(5):
            y = str(300+i*20)
            line = self.draw_graphic('line', 'x1=50; y1='+y+'; x2=200; y2='+y+'; stroke=gray; stroke-width=5')
            self.svg.appendChild(line)    
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
            elif "=" in elem:
                key, value = elem.split("=")
                graphic.setAttribute(key, value)
        return graphic

graphic = SVG()