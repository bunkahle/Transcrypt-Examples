#!/usr/bin/env python
# -*- coding: utf-8 -*-

class Magnifier():

    def __init__(self):
        self.img = document.getElementById("myimage")
        self.saved_src = self.img.src
        self.resultat = document.getElementById("myresult")
        # create lens:
        self.lens = document.createElement("DIV")
        self.lens.setAttribute("class", "img-zoom-lens")
        self.lens.setAttribute("position", "absolute")
        # insert lens:
        self.img.parentElement.insertBefore(self.lens, self.img)
        # calculate the ratio between result DIV and lens:
        self.cx = self.resultat.offsetWidth / self.lens.offsetWidth
        self.cy = self.resultat.offsetHeight / self.lens.offsetHeight
        # set background properties for the result DIV:
        self.resultat.style.backgroundImage = "url('" + self.img.src + "')"
        self.resultat.style.backgroundSize = (self.img.width * self.cx) + "px " + (self.img.height * self.cy) + "px"
        # execute a function when someone moves the cursor over the image, or the lens:
        window.addEventListener("mousemove", self.moveLens)
        self.img.addEventListener("mousemove", self.moveLens)
        # and also for touch screens:
        self.lens.addEventListener("touchmove", self.moveLens)
        self.img.addEventListener("touchmove", self.moveLens)
        self.counter = 0

    def moveLens(self, e):
        # console.log("moveLens")
        self.img.src = self.saved_src + "?" + __new__(Date().getTime())
        if (not e): e = window.event # only for IE which has window.event
        a = self.img.getBoundingClientRect()
        # e.preventDefault()
        # get the cursor's x and y positions:
        # calculate the cursor's x and y coordinates, relative to the image:
        x = e.pageX - a.left
        y = e.pageY - a.top
        # consider any page scrolling:
        x = x - window.pageXOffset
        y = y - window.pageYOffset
        # calculate the position of the lens:
        x = x - (self.lens.offsetWidth / 2)
        y = y - (self.lens.offsetHeight / 2)
        # prevent the lens from being positioned outside the image:
        if (x > self.img.width - self.lens.offsetWidth): x = self.img.width - self.lens.offsetWidth
        if (x < 0): x = 0
        if (y > self.img.height - self.lens.offsetHeight): y = self.img.height - self.lens.offsetHeight
        if (y < 0): y = 0
        # set the position of the lens:
        self.lens.style.left = str(x) + "px"
        self.lens.style.top = str(y) + "px"
        # display what the lens "sees":
        self.resultat.style.backgroundPosition = "-" + str(x * self.cx) + "px -" + str(y * self.cy) + "px"

magnificent = Magnifier()
