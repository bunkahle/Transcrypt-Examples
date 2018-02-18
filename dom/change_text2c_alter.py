#!/usr/bin/env python
# -*- coding: utf-8 -*-

import TranscryptFrame as tf

def insert():
    # working:
    # myElement = tf.S("#intro")
    # tf.S("#demo").innerHTML = "The text from the intro paragraph is " + myElement.innerHTML

    # working:
    # myElement_htm = tf.S("#intro", "htm")
    # tf.S("#demo").innerHTML = "The text from the intro paragraph is " + myElement_htm

    # working:
    tf.S("#demo").innerHTML = "The text from the intro paragraph is " + tf.S("#intro", "htm")

    # not working: can't assign to function call
    # tf.S("#demo", "htm") = "The text from the intro paragraph is " + tf.S("#intro", "htm")
