#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random

def append_link():
    new_links = ["https://github.com/bunkahle/Transcrypt-Examples", "https://www.transcrypt.org/", "https://www.javascript.com/", "https://www.w3schools.com/js/"]
    new_links_desc = ["Transcrypt-Examples", "Transcrypt Website", "Javascript", "Javascript Tutorials"]
    nl = dict(zip(new_links_desc, new_links))
    element = document.createElement("A")
    rnd = random.randint(0, len(new_links)-1)
    # e. g. for rnd = 1 -> new_links_desc[rnd] = "Transcrypt Website"
    t = document.createTextNode(new_links_desc[rnd])
    # e. g. nl["Transcrypt Website"] = "https://www.transcrypt.org/"
    element.setAttribute("href", nl[new_links_desc[rnd]])
    element.appendChild(t)
    document.body.appendChild(element)
    bre = document.createElement("BR")
    document.body.appendChild(bre)
