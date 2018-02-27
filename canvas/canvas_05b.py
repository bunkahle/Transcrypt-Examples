#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.canvas = document.getElementById(self.canvas_id)
        self.canvasWidth = self.canvas.width
        self.canvasHeight = self.canvas.height
        self.ctx = self.canvas.getContext('2d')
        self.turning = True
        self.reverse = 1
        self.img = __new__(Image())
        self.img.src = 'smiley.jpg'
        self.img.onload = self.turn
        self.animate = setInterval(self.turn, 50)

    def turn(self):
        self.ctx.clearRect(0, 0, self.canvasWidth, self.canvasHeight)
        
        # Move registration point and turn axis to the center of the canvas
        self.ctx.translate(self.canvasWidth/2, self.canvasHeight/2)
        
        # Rotate 1 degree
        self.ctx.rotate(math.pi / 180 * self.reverse)
           
        # Move registration point back to the top left corner of canvas
        self.ctx.translate(-self.canvasWidth/2, -self.canvasWidth/2)
        self.ctx.drawImage(self.img, 0, 0, 200, 200)

    def toggle(self):
        self.turning = not self.turning
        if self.turning:
            self.animate = setInterval(self.turn, 50)
        else:
            clearInterval(self.animate)

    def reverse_move(self):
        self.reverse = - self.reverse
        
graphic = Graphics('graphics')