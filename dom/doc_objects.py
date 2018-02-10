#!/usr/bin/env python
# -*- coding: utf-8 -*-

def display_document_objects(self):
	text = "Number of anchors are: " + document.anchors.length + "<br>\n"
	text = text + "document.body.innerHTML.length:" + document.body.innerHTML.length + "<br>\n"
	text = text + "Number of embeds: " + document.embeds.length + "<br>\n"
	text = text + "Number of forms: " + document.forms.length + "<br>\n"
	text = text + "Number of images: " + document.images.length + "<br>\n"
	text = text + "Number of links: " + document.links.length + "<br>\n"
	text = text + "Number of scripts: " + document.scripts.length + "<br>\n"
	text = text + "The title of this document is: " + document.title + "<br>\n"
	document.getElementById('info').innerHTML = text
