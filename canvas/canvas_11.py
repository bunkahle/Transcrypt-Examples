#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Graphics:

    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.canvas = document.getElementById(self.canvas_id)
        self.ctx = self.canvas.getContext('2d')
        self.canvas.onmouseover = self.drawCanvas
        self.kx = document.getElementById('kx')
        self.ky = document.getElementById('ky')
        self.x, self.y = 0, 0 
        # default color
        self.ctx.fillStyle = "rgb(255, 0, 0)"
        window.addEventListener("mousemove", self.drawCanvas)

    def drawCanvas(self, event):
        # draw
        self.x = event.clientX-self.canvas.offsetLeft
        self.y = event.clientY-self.canvas.offsetTop
        # print (self.x, self.y)
        self.kx.innerHTML = self.x
        self.ky.innerHTML = self.y
        self.canvas.onmouseup = self.set_active_false
        self.canvas.onmousedown = self.set_active_true
        if self.active:
            self.ctx.fillRect(self.x, self.y, 10, 10)
        red = document.getElementById('red')
        red.onclick = self.set_red
        green = document.getElementById('green')
        green.onclick = self.set_green
        blue = document.getElementById('blue')
        blue.onclick = self.set_blue
        
    def set_red(self):
        print ("red")
        self.ctx.fillStyle = "rgb(255, 0, 0)"

    def set_green(self):
        print ("green")
        self.ctx.fillStyle = "rgb(0, 255, 0)"

    def set_blue(self):
        print ("blue")
        self.ctx.fillStyle = "rgb(0, 0, 255)"

    def set_active_true(self):
        # print ("true")
        self.active = True

    def set_active_false(self):
        # print ("false")
        self.active = False

graphic = None

def init():
    global graphic
    graphic = Graphics('graphics')

def clearCanvas(self):
    graphic.ctx.clearRect(0, 0, graphic.canvas.width, graphic.canvas.height)