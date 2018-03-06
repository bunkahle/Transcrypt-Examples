#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math
class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.canvas = document.getElementById(self.canvas_id)
        self.ctx = self.canvas.getContext('2d')
        self.img = __new__(Image())
        self.draw()
        
    def draw(self):
        self.ctx.fillStyle = '#FA6900' # orange
        self.ctx.shadowOffsetX = 5 # little shade
        self.ctx.shadowOffsetY = 5 # little shade
        self.ctx.shadowBlur    = 4 
        self.ctx.shadowColor   = 'rgba(24, 24, 24, 0.5)' # dark grey
        self.ctx.fillRect(0,0,15,150) # lean rect
        self.ctx.save() # push the graphic context onto the stack

        self.ctx.fillStyle = '#E0E4CD' # grey
        self.ctx.shadowOffsetX = 10 # more shade
        self.ctx.shadowOffsetY = 10 # more shade
        self.ctx.shadowBlur    = 4
        self.ctx.shadowColor   = 'rgba(154, 154, 154, 0.5)' # grey
        self.ctx.fillRect(30,0,30,150) # middle rect
        self.ctx.save() # push the graphic context onto the stack

        self.ctx.fillStyle = '#A7DBD7' # light blue
        self.ctx.shadowOffsetX = 15 # strong shade
        self.ctx.shadowOffsetY = 15 # strong shade
        self.ctx.shadowBlur    = 4
        self.ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)' # light grey
        self.ctx.fillRect(90,0,45,150) # strong rect
        self.ctx.save() # push the graphic context onto the stack
        self.ctx.restore() # get stack back 
        self.ctx.beginPath()
        self.ctx.arc(185, 75, 22, 0, math.pi*2, True) # big circle
        self.ctx.closePath()
        self.ctx.fill()

        self.ctx.restore() # get stack back 
        self.ctx.beginPath()
        self.ctx.arc(260, 75, 15, 0, math.pi*2, True) # middle circle
        self.ctx.closePath()
        self.ctx.fill()

        self.ctx.restore() # get stack back 
        self.ctx.beginPath()
        self.ctx.arc(305, 75, 8, 0, math.pi*2, True) # small circle
        self.ctx.closePath()
        self.ctx.fill()

def init():
    graphic = Graphics('graphics')

