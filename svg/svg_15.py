#!/usr/bin/env python
# -*- coding: utf-8 -*-

svg_def = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="48" fill="none" stroke="#000"/>
  <path d="M50,2a48,48 0 1 1 0,96a24 24 0 1 1 0-48a24 24 0 1 0 0-48"/>
  <circle cx="50" cy="26" r="6"/>
  <circle cx="50" cy="74" r="6" fill="#FFF"/>
</svg>"""

class SVG:
    def __init__(self):
        document.getElementById("canvas").innerHTML = svg_def

graphic = SVG()