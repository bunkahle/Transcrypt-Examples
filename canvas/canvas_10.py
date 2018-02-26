#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.ctx = document.getElementById(self.canvas_id).getContext('2d')
        self.ax, self.ay, self.adx, self.ady, self.bx, self.by, self.bdx, self.bdy = 31, 69, 1, -1, 8, 25, 1, 1
        self.ani = setInterval(self.animate, 50)

    def animate(self):
            # move and bounce for square A
            if (self.ax == 150):
                self.adx = -1
            elif (self.ax == 0):
                self.adx = 1
            if(self.ay == 150):
                self.ady = -1
            elif (self.ay == 0):
                self.ady = 1
            self.ax = self.ax+self.adx
            self.ay = self.ay+self.ady
            # move and bounce for square B
            if (self.bx == 150):
                self.bdx = -1
            elif (self.bx == 0):
                self.bdx = 1
            if (self.by == 150):
                self.bdy = -1
            elif (self.by == 0):
                self.bdy = 1
            self.bx = self.bx+self.bdx
            self.by = self.by+self.bdy
            # draw new
            self.ctx.clearRect(0, 0, 200, 200)
            self.ctx.rect(0, 0, 200, 200)
            self.ctx.stroke()
            self.ctx.fillStyle = "rgba(0, 0, 255, 0.5)"
            self.ctx.fillRect(self.ax, self.ay, 50, 50)
            self.ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
            self.ctx.fillRect(self.bx, self.by, 50, 50)
        
graphic = Graphics('graphics')