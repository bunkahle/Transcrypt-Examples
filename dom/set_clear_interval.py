#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Clock:

    def __init__(self):
        self.paused = False
        self.start_clock()

    def start_clock(self):
        self.clock = setInterval(self.timer, 1000)

    def timer(self):
        d = __new__(Date())
        t = d.toLocaleTimeString()
        document.getElementById("demo").innerHTML = "The time is: "+t

    def pause_clock(self):
        clearInterval(self.clock)

    def toggle_clock(self):
        self.paused = not self.paused
        if self.paused:
            self.pause_clock()
        else:
            self.start_clock()

runningclock = Clock()