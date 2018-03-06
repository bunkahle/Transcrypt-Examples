#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

# instead of : document.getElementById('output').innerText = text

def action():
	text = 'Hello, DOM!';
	S("#output").text(text)

S(document).ready(action)
    

