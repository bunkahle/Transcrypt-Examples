#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.canvas = document.getElementById(self.canvas_id)
        self.ctx = self.canvas.getContext('2d')
        self.ctx.rect(0, 0, 300, 300)
        self.ctx.stroke()
        self.ctx.fillStyle = "#ff0000" # red
        self.ctx.fillRect(10,10, 100,100)
        self.ctx.fillStyle = "#0000ff" # blue
        self.ctx.fillRect(110,110, 80, 80)
        self.ctx.lineWidth = "3"
        self.ctx.strokeStyle = "#00ff00" # green
        self.ctx.strokeRect(55,55, 100, 100)
        self.ctx.clearRect(120, 120, 20, 20)
        
graphic = Graphics('graphics')