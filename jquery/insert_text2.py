#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def insert():
    text = 'Hello, DOM!'
    S("#output").text(text)