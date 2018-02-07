#!/usr/bin/env python
# -*- coding: utf-8 -*-


def play(id):
    document.getElementById("playing").innerText="playing:"+id
    document.getElementById("audio_file").play()