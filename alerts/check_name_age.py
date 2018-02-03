#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        self.askname = 'What is your name, dear?'
        self.askage = 'And what is your age?'
    
    def questions(self):
        confirm("Are you ready?")
        self.ask_name()
        self.ask_age()
        if int(self.age)<21:
            alert('Sorry, ' + self.name + ", you're too young to enter with " + self.age)
        else:
            alert('Welcome, ' + self.name)
        
    def ask_name(self):
        self.name = prompt(self.askname,'')

    def ask_age(self):
        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

testSystem = TestSystem()
