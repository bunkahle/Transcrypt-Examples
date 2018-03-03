#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def getclick(event):
    targetid = event.target.id
    target = event.target
    print ("clicked:", targetid, target)
    document.getElementById("info").innerHTML = "Locally clicked: id="+targetid+" target="+target
    S("#test_c").slideUp("slow")
    S("#test_b").slideUp("slow")
    S("#test_a").slideUp("slow")
