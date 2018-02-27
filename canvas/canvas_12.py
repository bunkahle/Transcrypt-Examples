#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math, time

class Clock:

    def __init__(self):
        self.img_url = 'chrome_clock.png'
        self.width = 300
        self.height = 300
        self.isActive = True
        self.clock = __new__(Image())
        self.clock.src = self.img_url
        self.draw()
        
    def getTimeSeconds(self):
        return time.time() % 60.0

    def getTimeMilliseconds(self):
        return (time.time() * 1000.0) % 1.0

    def getTimeMinutes(self):
        return (time.time() / 60) % 60.0

    def getTimeHours(self):
        return (time.time() / 3600) % 12.0

    def onShow(self):
        self.isActive = True
        self.animate = window.setTimeout(self.draw(), 50)

    def onHide(self):
        self.isActive = False
        window.clearTimeout(self.animate)

    def draw(self):
        self.ctx = document.getElementById('clock').getContext('2d')
        self.ctx.globalCompositeOperation = 'destination-over'
        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
        self.ctx.save()
        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
        self.ctx.translate(self.width/2, self.height/2)

        secs = self.getTimeSeconds()
        mins = self.getTimeMinutes() + secs / 60.0
        hours = self.getTimeHours() + mins / 60.0

        # Seconds
        self.ctx.save()
        self.ctx.fillStyle = 'rgba(255, 0, 0, 0.4)'
        self.ctx.rotate(2 * math.pi / 60 * secs + math.pi)
        self.ctx.fillRect(-1,-(self.width * 0.04),2, self.width * 0.38)
        self.ctx.restore()

        # Minutes
        self.ctx.save()
        self.ctx.rotate(2 * math.pi / 60 * mins + math.pi)
        self.ctx.fillRect(-1,-1,3,self.width * 0.35)
        self.ctx.restore()

        # Hours
        self.ctx.save()
        self.ctx.rotate(2 * math.pi / 12 * hours + math.pi)
        self.ctx.fillRect(-2,-2,4,self.width * 0.2)
        self.ctx.restore()

        self.ctx.restore()

        self.ctx.drawImage(self.clock, 0, 0, self.width, self.height)
        self.animate = window.setTimeout(self.draw, 50)

clock = Clock()