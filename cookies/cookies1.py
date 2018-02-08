#!/usr/bin/env python
# -*- coding: utf-8 -*-

import time

class TestSystem:
    
    def setCookie(self, cname, cvalue, exdays):
        t = time.time() + (int(exdays)*24*60*60)
        # console.log(t)
        struc_time = time.gmtime(t)
        # console.log(struc_time)
        expires = "expires=" + time.strftime("%a, %d %b %Y %H:%M:%S UTC", struc_time)
        # console.log(expires)
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
        alert("Cookie set: " + cname + "=" + cvalue + "; " + expires + "; path=/")

    def deleteCookie(self, cname):
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

    def getCookie(self, cname):
        name = cname + "="
        console.log("name="+name+";")
        # alert("document.cookie:"+document.cookie+":")
        decodedCookie = decodeURIComponent(document.cookie)
        # alert("decodedCookie:"+decodedCookie+":")
        allcookies = decodedCookie.split(';')
        # alert("allcookies:"+allcookies+":")
        for ca in allcookies:
            # console.log("ca="+ca+";")
            if name in ca:
                f = ca.find(name)
                c_content = ca[f+len(name):]
                return c_content
        return ""
    
    def show_cookies(self):
        decodedCookie = decodeURIComponent(document.cookie)
        allcookies = decodedCookie.split(';')
        alert("allcookies:"+allcookies+":")

    def checkCookie(self):
        user = self.getCookie("username")
        # console.log("username="+user+";")
        if (user != ""):
            alert("Welcome again " + user)
        else:
            user = prompt("Please enter your name:","")
            if (user != "" and user is not None):
                self.setCookie("username", user, 30)

    def create_cookie(self):
        cname = prompt("Please enter the cookie name:","")
        cvalue = prompt("Please enter the cookie value/text:","")
        days = prompt("In how many days is it going to expire?","")
        self.setCookie(cname, cvalue, days)

    def set_name(self):
        alert("Your name will be set as cookie")
        name = prompt('What is your name?','Transcrypt-User')
        days = prompt('How many days shall the cookie last?','7')
        self.setCookie("username", name, days)
           
testSystem = TestSystem()
