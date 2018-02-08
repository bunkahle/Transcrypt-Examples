#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random

def append_item(self):
    new_items = ["Fire", "Water", "Earth", "Air", "Ether", "Wood", "Metal"]
    node = document.createElement("LI")
    rnd = random.randint(0, len(new_items)-1)
    textnode = document.createTextNode(new_items[rnd])
    # textnode = document.createTextNode("Water")
    node.appendChild(textnode)
    document.getElementById("myList").appendChild(node)
