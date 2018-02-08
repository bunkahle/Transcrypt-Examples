#!/usr/bin/env python
# -*- coding: utf-8 -*-

def display_document_properties(self):
	text = "document.baseURI:" + document.baseURI + "<br>\n"
	text = text + "document.doctype: " + document.doctype + "<br>\n"
	text = text + "document.documentURI: " + document.documentURI + "<br>\n"
	text = text + "document.domain: " + document.domain + "<br>\n"
	text = text + "document.inputEncoding: " + document.inputEncoding + "<br>\n"
	text = text + "document.lastModified: " + document.lastModified + "<br>\n"
	text = text + "document.title: " + document.title + "<br>\n"
	text = text + "document.URL: " + document.URL + "<br>\n"
	document.getElementById('info').innerHTML = text
