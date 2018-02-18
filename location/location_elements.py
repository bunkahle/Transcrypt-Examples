#!/usr/bin/env python
# -*- coding: utf-8 -*-

def init():
    insert_hash()

def show():
    text = "These are the location elements:<br>"
    text += "Sets or returns the anchor part (#) of a URL that begins with the # character as <b>location.hash</b>: " + location.hash + "<br>"
    text += "Represents the hostname and port number of the URL <b>location.host</b>: " + location.host + "<br>"
    text += "Represents the hostname part of the URL as <b>location.hostname</b>: " + location.hostname + "<br>"
    text += "Represents the complete URL as <b>location.href</b>: " + location.href + "<br>"
    text += "Returns the protocol, hostname and port number of a URL as <b>location.origin</b>: " + location.origin + "<br>"
    text += "Represents the pathname part of the URL as <b>location.pathname</b>: " + location.pathname + "<br>"
    text += "Represents the port part (e.g. :8080) of the URL* as <b>location.port</b>: " + location.port + "<br>"
    text += "Represents the protocol part of the URL as <b>location.protocol</b>: " + location.protocol + "<br>"
    text += "The search part of the URL, including the ? is <b>location.search</b>: " + location.search
    text += "<p><b>* Note: </b>If the port number is default (80 for http and 443 for https), most browsers will display 0 or nothing.</p>"
    # console.log(dir(location))
    document.getElementById("locs").innerHTML = text

def create_query():
    location.search = "?testname=transcrypt&lang=python"

def goto_hash(h):
    console.log(location.href+"#"+h)
    location.assign(location.href+"#"+h)

def insert_hash():
    x = ""
    for i in range(100):
        if i == 50:
            x += '<a name="para' + str(i) + '"></a>' + '<p id="para'+str(i)+'">Paragraph '+str(i)+' - Now please scroll back to the beginning and press show location elements again - look for the hash</p>'
        else:
            x += '<a name="para' + str(i) + '"></a>' + '<p id="para'+str(i)+'">Paragraph '+str(i)+'</p>'
    document.getElementById("hashtext").innerHTML = x
    console.log(x)