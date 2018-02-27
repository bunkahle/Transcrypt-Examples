#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.ctx = document.getElementById(self.canvas_id).getContext('2d')
        self.img = __new__(Image())
        self.img.src = 'smiley.jpg'
        self.img.onload = self.turn

    def turn(self):
        self.ctx.translate(200, 0)
        self.ctx.rotate(90 * math.pi/180)
        self.ctx.drawImage(self.img, 0, 0, 200, 200)
        
graphic = Graphics('graphics')