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
        try:
            age = int(self.age)
            if age<21:
                self.message = 'Sorry, ' + self.name + ", you're too young to enter with " + self.age
            else:
                self.message = 'Welcome, ' + self.name
        except:
            self.message = "You are to silly to enter your age."
        alert(self.message)
        
    def ask_name(self):
        self.name = prompt(self.askname,'')

    def ask_age(self):
        self.age = prompt("Hello, "+self.name+". "+self.askage,'')

testSystem = TestSystem()
