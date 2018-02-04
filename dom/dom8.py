#!/usr/bin/env python
# -*- coding: utf-8 -*-


def main():
    document.getElementById("dwarves-numbers").onclick = SetDwarf

def SetDwarf():
    Dwarves = ["Doc","Grumpy","Happy","Sleepy","Bashful","Sneezy","Dopey"]
    dwarfNumber = document.getElementById("dwarves-numbers").value
    dwarf = Dwarves[dwarfNumber]
    document.getElementById("dwarf-name").innerHTML = dwarf

