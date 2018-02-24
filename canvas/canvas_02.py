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
        self.ctx.drawImage(self.img, 0, 0)
        self.ctx.beginPath()
        self.ctx.moveTo(30, 96)
        self.ctx.lineTo(70, 66)
        self.ctx.lineTo(103, 76)
        self.ctx.lineTo(170, 15)
        self.ctx.stroke()
        
graphic = Graphics('graphics')