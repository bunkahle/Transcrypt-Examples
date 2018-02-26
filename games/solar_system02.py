#!/usr/bin/env python
# -*- coding: utf-8 -*-

import math

class SolarSystem:
    
    def __init__(self):
        self.sun = __new__(Image())
        self.moon = __new__(Image())
        self.earth = __new__(Image())
        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
            self.sun.src ='Canvas_sun.png'
        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
            self.moon.src ='Canvas_moon.png'
        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
            self.earth.src ='Canvas_earth.png'
        window.setTimeout(self.render, 50)

    def render(self):
        self.ctx = document.getElementById('canvas').getContext('2d')
        self.ctx.globalCompositeOperation = 'destination-over'
        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
        self.ctx.save()
        self.ctx.translate(150, 150)

        # Earth
        self.time = __new__(Date())
        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
        self.ctx.translate(105, 0)
        self.ctx.fillRect(0, -12, 50, 24) # Shadow
        self.ctx.drawImage(self.earth, -12, -12)

        # Moon
        self.ctx.save()
        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
        self.ctx.translate(0, 28.5)
        self.ctx.drawImage(self.moon, -3.5, -3.5)
        self.ctx.restore()

        self.ctx.restore()

        self.ctx.beginPath()
        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
        self.ctx.stroke()

        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

        window.setTimeout(self.render, 50)

solarSystem = SolarSystem()