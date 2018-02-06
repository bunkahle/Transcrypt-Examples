#!/usr/bin/env python
# -*- coding: utf-8 -*-

def info():
    x = "Available Height: " + screen.availHeight + "px<br>\n"
    x = x + "Available Width: " + screen.availWidth + "px<br>\n"
    x = x + "Color Depth: " + screen.colorDepth + "<br>\n"
    x = x + "Total Height: " + screen.height + "px<br>\n"
    x = x + "Total Width: " + screen.width + "px<br>\n"
    x = x + "Color Resolution: " + screen.pixelDepth + "<br>\n"
    document.getElementById("info").innerHTML = x


