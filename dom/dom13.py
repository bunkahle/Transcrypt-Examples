#!/usr/bin/env python
# -*- coding: utf-8 -*-

def disable_button(butt):
	document.getElementById(butt).disabled = True

def enable_button(butt):
	document.getElementById(butt).disabled = False

def button_alert():
	alert("Button can be clicked again.")

def change_button():
	if document.getElementById("myBtn").disabled:
		enable_button("myBtn")
	else:
		disable_button("myBtn")