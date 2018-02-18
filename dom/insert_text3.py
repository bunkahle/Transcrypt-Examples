#!/usr/bin/env python
# -*- coding: utf-8 -*-
    
def insert():
    x = document.getElementById("myPre").innerHTML
    document.getElementById("demo").innerHTML = x
    console.log("This message can only be seen in the console window - hit F12 to view it in the browser")
    console.log("Console.log can be used for debugging, especially for variables like x.")
    console.log("x has the value:"+x+": end of var")
