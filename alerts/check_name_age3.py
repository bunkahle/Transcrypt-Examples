#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.askname = 'What is your name, dear?'
        self.askage = 'And what is your age?'

    def isNaN(self, x):
        try:
            a = int(x)
            return False
        except:
            return True
    
    def questions(self):
        confirm("Are you ready?")
        self.ask_name()
        self.ask_age()
        if self.isNaN(self.age):
            self.message = "You are to silly to enter your age."    
        elif int(self.age)<21:
            self.message = 'Sorry, ' + self.name + ", you're too young to enter with " + self.age
        else:
            self.message = 'Welcome, ' + self.name
        alert(self.message)
        
    def ask_name(self):
        self.name = prompt(self.askname,'')

    def ask_age(self):
        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

testSystem = TestSystem()
