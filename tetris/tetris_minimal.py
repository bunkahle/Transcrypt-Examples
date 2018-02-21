#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from __future__ import print_function
from random import randrange
from copy import deepcopy
import os, sys, time
import msvcrt # windows
ckeys = {"up":72, "right":77, "left":75, "down":80, "esc":27, "drop": 32, "quit": 113, "pause": 112}
from ctypes import *
STD_OUTPUT_HANDLE = -11
class COORD(Structure):
    pass
COORD._fields_ = [("X", c_short), ("Y", c_short)]
speed = 0.5
COLS = 20
ROWS = 10

def print_at(r, c, s):
    h = windll.kernel32.GetStdHandle(STD_OUTPUT_HANDLE)
    windll.kernel32.SetConsoleCursorPosition(h, COORD(c, r))
    c = s.encode("windows-1252")
    windll.kernel32.WriteConsoleA(h, c_char_p(c), len(c), None, None)

def show_feld(COLS, ROWS, FELD):
    sfeld = "+" + COLS*"-" + "+\n"
    for i in range(ROWS):
        sfeld += '|' + FELD[i][1:-1] + "|\n"
    sfeld += "+" + COLS*"-" + "+\n"
    for i, sf in enumerate(sfeld.split("\n")):
        print_at(7+i, 0, sf)

def chkBoard(FELD, ROWS, COLS, score): # kill full lines and increase score
    deleted = True
    while deleted:
        deleted = False
        for i in range(ROWS):
            if not "." in FELD[i]:
                FELD.pop(i)
                FELD.insert(0, "|"+"."*COLS+"|")
                score = score + COLS
                deleted = True
                break
    return score

def testCollision(FELD, FP):
    for i in range(3):
        for j in range(3):
            if FP[2][i][j] == "X" and FELD[FP[0]+i][FP[1]+j] == "X":
                return 1 # collision 
    return 0 # no collision

def putFig(FP, mode):
    for i in range(3):
        for j in range(3):
            if FP[2][i][j] == "X": # mode == "X"
                FELD[FP[0]+i] = FELD[FP[0]+i][:FP[1]+j] + mode + FELD[FP[0]+i][FP[1]+j+1:]  # drawing new brick

def MoveFig(FELD, FP, key, d):
    def return_success(F, success):
        putFig(F, "X")
        return success, F # movement with success=1 or without success=0
    FPC = deepcopy(FP)
    if key == ckeys["left"]: FPC[1] = FPC[1] - d
    elif key == ckeys["right"]: FPC[1] = FPC[1] + d
    elif key == ckeys["down"]: FPC[0] = FPC[0] + d*2
    elif key == ckeys["up"]: FPC[2] = RotFig(FPC[2], 3)
    elif key == ckeys["drop"]: 
        d = FPC[0]
        putFig(FP, ".")
        FPC[0] = FPC[0] + 1
        while not testCollision(FELD, FPC): # no collision
            FPC[0] = FPC[0] + 1
        if d != FPC[0]:
            FPC[0] = FPC[0] -1
            return return_success(FPC, 1)
        else:
            return return_success(FP, 0)
    elif FPC[0]+d<=ROWS+1:
        FPC[0] = FPC[0] + d
    putFig(FP, ".")
    if not testCollision(FELD, FPC): # no collision
        return return_success(FPC, 1)
    else:
        if key == ckeys["left"]:
            FPC[1] = FPC[1] + d
            FPC[0] = FPC[0] + d
        elif key == ckeys["right"]:
            FPC[1] = FPC[1] - d
            FPC[0] = FPC[0] + d
        elif key == ckeys["down"]:
            FPC[0] = FPC[0] - d
        elif key == ckeys["up"]: 
            FPC[2] = deepcopy(FP[2])
            FPC[0] = FPC[0] + d
        if not testCollision(FELD, FPC): # no collision
            return return_success(FPC, 1)
        else:    
            return return_success(FP, 0)   

def RotFig(FPR, rot): # rot = 0 no rotation, rot = 1 90 degress right, 2 = 180 degress, 3 = 270 degress right
    for r in range(rot%4):
        FPR = list(list(x)[::-1] for x in zip(*FPR))
    return FPR

def showfield(COLS, ROWS, FELD, counter, msg):
    key = ""
    print_at(0, 0, msg)
    print_at(4, 0, "\n"+str(counter)+' Score: '+str(score+counter)+' ')
    show_feld(COLS, ROWS, FELD)
    t0 = time.time()
    key = -1
    pause = False
    while time.time()-t0<speed and key == -1 or pause:
        try:
            if msvcrt.kbhit(): 
                key = ord(msvcrt.getch())
                if key == 224: # cursorkey first read
                    key = ord(msvcrt.getch()) # 72 up, 77 right, 75 left, 80 down
        except:
            key = _Getch()
            time.sleep(speed)
        if key == ckeys["pause"] and not pause:
            pause = True
            key = -1
        elif key == ckeys["pause"] and pause:
            pause = False
    return key

tetrominoes = [ [['.','X','X'], ['X','X','.'], ['.','.','.']], [['X','X','.'], ['.','X','X'], ['.','.','.']], [['.','.','.'], ['X','X','X'], ['.','.','.']], [['.','X','.'], ['.','X','.'], ['.','X','.']], [['.','.','.'], ['X','X','X'], ['.','.','X']], [['.','.','X'], ['X','X','X'], ['.','.','.']], [['.','X','X'], ['.','X','X'], ['.','.','.']], [['.','.','.'], ['.','X','.'], ['X','X','X']]]
lt = len(tetrominoes)               
FELD = []
for i in range(ROWS): FELD.append("X"+"."*COLS+"X")
FELD.append("X"*(COLS+2))
os.system('cls')
print ("PYTHONIC TETRIS in the console window without external libraries needed -\ntested with Windows - bugs inclusive\n"+"Keys: Cursor keys to move right, left, down and rotate (up),\nSpace bar to drop, P for pause and Q oder ESC for exiting.\n"+"Written by Andreas Bunkahle 2018")
a = raw_input("Are you ready for this Pythonic game of tetris -\ncode with all batteries included? - Sure Babe (Y)")
os.system('cls')
score = 0
FigPos = [0, int(COLS/2)-1, tetrominoes[randrange(0,lt,1)]] # x,y,figure
counter = 0
new_tetrom = tetrominoes[randrange(0,lt,1)]
new_brick = "\n".join([b[0]+b[1]+b[2] for b in new_tetrom])
if not testCollision(FELD, FigPos):
    putFig(FigPos, "X")
    while True: # main loop
        counter += 1
        msg = "Next Brick:\n" + new_brick
        key = showfield(COLS, ROWS, FELD, counter, msg)
        if key == ckeys["esc"] or key == ckeys["quit"]: break
        move, FigPos = MoveFig(FELD, FigPos, key, 1)
        if not move:
            score = chkBoard(FELD, ROWS, COLS, score) # check for complete rows and delete them
            FigPos = [0, int(COLS/2)-1, new_tetrom] # create new tetrominoe with x,y,rotation,figure
            new_tetrom = tetrominoes[randrange(0,lt,1)] # create next brick for already showing it
            new_brick = "\n".join([b[0]+b[1]+b[2] for b in new_tetrom])
            if testCollision(FELD, FigPos): break
            putFig(FigPos, "X")
else:
    key = showfield(COLS, ROWS, FELD, counter, "Game size too small")
print("Game over. Your score is: "+str(score+counter))
