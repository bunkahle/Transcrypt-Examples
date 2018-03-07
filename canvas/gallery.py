#!/usr/bin/env python
# -*- coding: utf-8 -*-

def draw():
  # Loop through all images
    for i in range(document.images.length):
        # Don't add a canvas for the frame image
        if (document.images[i].getAttribute('id') != 'frame'):
            # Create canvas element
            canvas = document.createElement('canvas')
            canvas.setAttribute('width', 132)
            canvas.setAttribute('height', 150)
            # Insert before the image
            document.images[i].parentNode.insertBefore(canvas, document.images[i])
            ctx = canvas.getContext('2d')
            # Draw image to canvas
            ctx.drawImage(document.images[i], 15, 20)
            # Add frame
            ctx.drawImage(document.getElementById('frame'), 0, 0)