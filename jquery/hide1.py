#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def showagain():
	S("#test").show()
	S("#dclick").show()

def install_hide():
	S("#test").click(lambda: S("#test").hide())
	S("#dclick").dblclick(lambda: S("#dclick").hide())
	S("#show").click(showagain)

S(document).ready(install_hide)
    

