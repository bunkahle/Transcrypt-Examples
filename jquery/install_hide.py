#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def install_hide():
	S("p").click(lambda: S(this).hide())

S(document).ready(install_hide)
    

