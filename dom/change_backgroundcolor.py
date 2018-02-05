#!/usr/bin/env python
# -*- coding: utf-8 -*-

def change_background():
    # change the background color to red
	document.body.style.background = "red"
	col = prompt("Which background color do you like?", "")
	# change it back after 1 second
	document.body.style.background = col
