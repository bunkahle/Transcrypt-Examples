#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.canvas = document.getElementById(self.canvas_id)
        self.ctx = self.canvas.getContext('2d')
        # push the default settings onto the stack
        self.ctx.save()

        self.ctx.beginPath()
        self.ctx.lineWidth = "3"
        self.ctx.strokeStyle = "blue"
        self.ctx.strokeRect(60, 60, 160, 160)
        # Move the origin/orientation point from (0, 0) t0 (60, 60)
        self.ctx.translate(60, 60)  
        self.ctx.strokeStyle = "red"
        self.ctx.strokeRect(60, 60, 160, 160)

        # self.ctx.restore() gets the default settings back from the stack
        # this is the orientation point = (0, 0)
        # the default color = "black"
        # and the default lineWidth = "1"
        self.ctx.restore()
        self.ctx.rect(0, 0, 300, 300)
        self.ctx.stroke()
        
graphic = Graphics('graphics')