#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

text = 'Hello, DOM!'
# instead of : document.getElementById('output').innerText = text
S("#output").text(text)
    

