#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.ctx = document.getElementById(self.canvas_id).getContext('2d')
        self.img = __new__(Image())
        self.img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png'
        if self.img.naturalWidth == "undefined" or self.img.naturalWidth == 0:
            self.img.src ='backdrop.png'
        self.img.onload = self.display

    def display(self):
        print("width and height of self.img:", self.img.width, self.img.height)
        mult = 2
        self.ctx.drawImage(self.img, 0, 0, self.img.width*mult, self.img.height*mult)
        print("line width:", self.ctx.lineWidth)
        self.ctx.beginPath()
        self.ctx.lineWidth = self.ctx.lineWidth * mult
        self.ctx.moveTo(30*mult, 96*mult)
        self.ctx.lineTo(70*mult, 66*mult)
        self.ctx.lineTo(103*mult, 76*mult)
        self.ctx.lineTo(170*mult, 15*mult)
        self.ctx.stroke()
        
graphic = Graphics('graphics')