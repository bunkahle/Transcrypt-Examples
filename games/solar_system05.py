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
        self.Keys = {"SPACE":  32,
                     "LEFT":   37,
                     "UP":     38,
                     "RIGHT":  39,
                     "DOWN":   40}
        self.accel_value = 1.0
        self.accelerate = 1.0
        document.onkeypress = self.keyHandler
        self.paused = False
        self.main_loop()

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
        secs = self.time.getSeconds() 
        msecs = self.time.getMilliseconds()
        self.ctx.rotate(((2 * math.pi) / 60 * self.accelerate) * secs + ((2 * math.pi) / 60000 * self.accelerate) * msecs)
        self.ctx.translate(105, 0)
        self.ctx.fillRect(0, -12, 50, 24) # Shadow
        self.ctx.drawImage(self.earth, -12, -12)

        # Moon
        self.ctx.save()
        self.ctx.rotate(((2 * math.pi) / 6* self.accelerate) * secs + ((2 * math.pi) / 6000* self.accelerate) * msecs)
        self.ctx.translate(0, 28.5)
        self.ctx.drawImage(self.moon, -3.5, -3.5)
        self.ctx.restore()
        
        self.ctx.restore()
        self.ctx.beginPath()
        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
        self.ctx.stroke()

        self.ctx.font = "20px Arial"
        self.ctx.fillStyle = "white"
        self.ctx.fillText("Accel:"+str(self.accelerate),10,20)

        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

        self.main_loop()

    def pause(self):
        self.paused = not self.paused
        if self.paused:
            document.getElementById("info").innerHTML = "<b>Game stopped</b>"
        else:
            document.getElementById("info").innerHTML = "<b>Game running</b>"

    def keyHandler(self, e):
        self.keyCode = e.keyCode 
        self.charCode = e.charCode
        console.log("keyCode: "+str(self.keyCode)+" charCode: "+str(self.charCode))

    def accel(self):
        self.accelerate += self.accel_value

    def slowdown(self):
        self.accelerate -= self.accel_value

    def user_input(self):
        if self.keyCode == self.Keys["RIGHT"]:
            self.accelerate += self.accel_value
        elif self.keyCode == self.Keys["LEFT"]:
            self.accelerate -= self.accel_value
        # reset it
        self.keyCode = -1

    def main_loop(self):
        # update the game reaction according to user input
        self.user_input()
        # render the game output
        if not self.paused:
            # goto to the rendering routine - at the end of the routine main_loop will be called for return
            self.animate = window.requestAnimationFrame(self.render)
        else:
            # and restart the main loop in case the game is paused
            setTimeout(self.main_loop, 50)

solarSystem = SolarSystem()