#!/usr/bin/env python
# -*- coding: utf-8 -*-

import TranscryptFrame as tf

def insert():
    myElement = tf.doc_id("intro")
    tf.doc_id("demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML
