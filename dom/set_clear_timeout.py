#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Counting:

    def __init__(self):
        self.paused = False
        self.start_counting()
        self.count = 0

    def start_counting(self):
        self.counting = setTimeout(self.timer, 1000)

    def timer(self):
        if not self.paused:
            document.getElementById("demo").innerHTML = "Counting is at: "+ str(self.count)
            self.count += 1
            self.counting = setTimeout(self.timer, 1000)

    def pause_counting(self):
        clearTimeout(self.counting)

    def reset_counting(self):
        self.count = 0
        document.getElementById("demo").innerHTML = "Counting is at: "+ str(self.count)

    def toggle_counting(self):
        self.paused = not self.paused
        if self.paused:
            self.pause_counting()
        else:
            self.start_counting()

counting = Counting()