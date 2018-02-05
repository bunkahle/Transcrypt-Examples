#!/usr/bin/env python
# -*- coding: utf-8 -*-

def button_alert():
	answer = prompt("Do you want to go to the Transcrypt site?", "Y")
	if answer == "Y" or answer == "y":
		location.href = "https://www.transcrypt.org/"

def change_button():
	butt = document.getElementById("myBtn")
	# alert("innerHTML"+butt.innerHTML+":")
	if  "200" in butt.innerHTML:
		butt.innerHTML = '<img src="https://www.transcrypt.org/illustrations/monk_transcribing.png" width="100" height="100">'
	else:
		butt.innerHTML = '<img src="https://www.transcrypt.org/illustrations/monk_transcribing.png" width="200" height="200">'