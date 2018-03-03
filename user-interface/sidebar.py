#!/usr/bin/env python
# -*- coding: utf-8 -*-

class SideBar:

    def __init__(self):
        self.menuclosed = True

    def links(self, event):
        document.getElementById("clicktarget").innerHTML = "Click came from: "+ event.target.id

    def changeNav(self):
        self.menuclosed = not self.menuclosed
        if self.menuclosed:
            self.closeNav()
        else:
            self.openNav()            

    def openNav(self):
        document.getElementById("mySidenav").style.width = "250px"
        document.getElementById("mainContent").style.marginLeft = "250px"
        document.getElementById("men").innerHTML = "&#9776; close"

    def closeNav(self):
        document.getElementById("mySidenav").style.width = "0"
        document.getElementById("mainContent").style.marginLeft= "0%"
        document.getElementById("men").innerHTML = "&#9776; open"

sideBar = SideBar()