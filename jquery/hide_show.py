#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

def install_hide_show():
	S("#hide").click(lambda: 
		S("p").hide()
	)
	S("#show").click(lambda: 
        S("p").show()
    )

""" original Javascript:
	$(document).ready(function(){
	    $("#hide").click(function(){
	        $("p").hide();
	    });
	    $("#show").click(function(){
	        $("p").show();
	    });
	});
"""
S(document).ready(install_hide_show)
    

