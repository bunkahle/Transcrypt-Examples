#!/usr/bin/env python
# -*- coding: utf-8 -*-

import TranscryptFrame as tf

class RotateImage:

    def __init__(self, canvas_id, src):
        self.img = tf.CanvasImage(src, canvas_id, 200, 200)
        self.turning = True
        self.reverse = 1
        print("Attributes of self.img", dir(self.img))
        self.animate = setInterval(self.turn, 50)

    def turn(self):
        self.img.rotate(1*self.reverse)

    def toggle(self):
        self.turning = not self.turning
        if self.turning:
            self.animate = setInterval(self.turn, 50)
        else:
            clearInterval(self.animate)

    def reverse_move(self):
        self.reverse = - self.reverse
        
graphic = RotateImage('graphics', 'smiley.jpg')