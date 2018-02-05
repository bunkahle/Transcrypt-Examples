#!/usr/bin/env python
# -*- coding: utf-8 -*-


def main():
   document.getElementById("target-area").onmouseover = MouseOver
   document.getElementById("target-area").onmouseout = MouseOut

def MouseOver():
    document.getElementById("target-area").style.backgroundColor = "red"

def MouseOut():
	document.getElementById("target-area").style.backgroundColor = "white"
