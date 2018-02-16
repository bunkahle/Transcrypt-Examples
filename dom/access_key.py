#!/usr/bin/env python
# -*- coding: utf-8 -*-

def set_key():
    console.log("document loading has finished")
    document.getElementById("tra").accessKey = "t"
    console.log(document.getElementById("tra").innerHTML)
