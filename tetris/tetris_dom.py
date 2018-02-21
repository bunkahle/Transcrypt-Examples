#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from random import randint
import time

class Tetris:

    def __init__(self):
        self.ROWS = 10
        self.COLS = 20
        self.FELD = []
        self.FELD = self.init_field(self.COLS, self.ROWS, self.FELD)

    def mult_string(self, s, c):
        new_row = ""
        for i in range(c):
            new_row += s
        return new_row

    def show_feld(self, COLS, ROWS, FELD):
        sfeld = "+" + self.mult_string("-", COLS) + "+<br>"
        for i in range(ROWS):
            sfeld += '|' + FELD[i][1:-1] + "|<br>"
        sfeld += "+" + self.mult_string("-", COLS) + "+<br>"
        document.getElementById('canvas').innerHTML = sfeld

    def chkBoard(self, FELD, ROWS, COLS, score): # kill full lines and increase score
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

    def testCollision(self, FELD, FP):
        for i in range(3):
            for j in range(3):
                try:
                    if FP[2][i][j] == "X" and FELD[FP[0]+i][FP[1]+j] == "X":
                        return 1 # collision 
                except:
                    return 0
        return 0 # no collision

    def putFig(self, FELD, FP, mode):
        for i in range(3):
            for j in range(3):
                try:
                    if FP[2][i][j] == "X": # mode == "X"
                        FELD[FP[0]+i] = FELD[FP[0]+i][:FP[1]+j] + mode + FELD[FP[0]+i][FP[1]+j+1:]  # drawing new brick
                except:
                    pass

    def MoveFig(self, FELD, FP, key, d):
        def return_success(F, success):
            self.putFig(FELD, F, "X")
            self.keypressed = -1
            return success, F # movement with success=1 or without success=0
        self.ckeys = {"up":38, "right":39, "left":37, "down":40, "esc":27, "quit": 113, "pause": 112}
        FPC = [FP[0], FP[1], FP[2]]
        if key == self.ckeys["left"]: FPC[1] = FPC[1] - d
        elif key == self.ckeys["right"]: FPC[1] = FPC[1] + d
        elif key == self.ckeys["down"]: 
            if FPC[0]<self.ROWS-4:
                FPC[0] = FPC[0] + d*2
        elif key == self.ckeys["up"]: FPC[2] = self.RotFig(FPC[2], 1)
        else:
            FPC[0] = FPC[0] + d
        self.putFig(FELD, FP, ".")
        if not self.testCollision(FELD, FPC): # no collision
            return return_success(FPC, 1)
        else:
            if key == self.ckeys["left"]:
                FPC[1] = FPC[1] + d
                FPC[0] = FPC[0] + d
            elif key == self.ckeys["right"]:
                FPC[1] = FPC[1] - d
                FPC[0] = FPC[0] + d
            elif key == self.ckeys["down"]:
                FPC[0] = FPC[0] - d
            elif key == self.ckeys["up"]: 
                # FPC[2] = FP[2][:]
                FPC[2] = [FP[2][0], FP[2][1], FP[2][2]]
                FPC[0] = FPC[0] + d
            if not self.testCollision(FELD, FPC): # no collision
                return return_success(FPC, 1)
            else:    
                return return_success(FP, 0)   

    def RotFig(self, FPR, rot): # rot = 0 no rotation, rot = 1 90 degress right, 2 = 180 degress, 3 = 270 degress right
        F2 =  [FPR[0], FPR[1], FPR[2]]
        for r in range(rot%4):
            FPR =  [[F2[2][0], F2[1][0], F2[0][0]], [F2[2][1], F2[1][1], F2[0][1]], [F2[2][2], F2[1][2], F2[0][2]] ]
        return FPR

    def wait(self):
        if self.keypressed == -1:
            setTimeout(self.wait, 50)

    def showfield(self, COLS, ROWS, FELD, score, counter, msg, speed):
        key = ""
        document.getElementById('next').innerHTML = msg+"\n"+str(counter)+' Score: '+str(score+counter)+' '
        self.show_feld(COLS, ROWS, FELD)

    def on_keypress(self, e):
        kc = e.keyCode 
        cc = e.charCode
        self.ckeys = {"up":38, "right":39, "left":37, "down":40, "esc":27, "quit": 113, "pause": 112}
        for key, val in self.ckeys.items():
            if kc == val or cc == val:
                self.keypressed = val
                break
        self.loop()

    def clearscreen(self):
        document.getElementById('canvas').innerHTML = ""
        document.getElementById('title').innerHTML = "Your score is: 0"
        self.FELD = self.init_field(self.COLS, self.ROWS, self.FELD)

    def loop(self):
        clearTimeout(self.cont)
        self.counter += 1
        self.score = self.score + 1
        msg = "Next Brick:<pre>" + self.new_brick + "</pre>"
        self.showfield(self.COLS, self.ROWS, self.FELD, self.score, self.counter, msg, self.speed)
        if self.keypressed == 27 or self.keypressed == 113: # esc or quit
            document.getElementById('title').innerHTML = "Game over. Your score is: "+str(self.score+self.counter)
            return
        move, self.FigPos = self.MoveFig(self.FELD, self.FigPos, self.keypressed, 1)
        if not move:
            score = self.chkBoard(self.FELD, self.ROWS, self.COLS, self.score) # check for complete rows and delete them
            self.FigPos = [0, int(self.COLS/2)-1, self.new_tetrom] # create new tetrominoe with x,y,figure
            self.new_tetrom = self.tetrominoes[randint(0,self.lt-1)] # create next brick for already showing it
            self.new_brick = "<pre>"+"\n".join([b[0]+b[1]+b[2] for b in self.new_tetrom])+"</pre>"
            self.bricks += 1
            if self.testCollision(self.FELD, self.FigPos):
                document.getElementById('title').innerHTML = "Game over. Your score is: "+str(self.score+self.counter)
                return
            self.putFig(self.FELD, self.FigPos, "X")
        self.cont = setTimeout(self.loop, self.speed*1000)

    def init_field(self, COLS, ROWS, FELD):
        FELD = []
        for i in range(ROWS):
            new_row = self.mult_string(".", COLS)
            FELD.append("X"+new_row+"X")
        new_row = self.mult_string("X", COLS+2)
        FELD.append(new_row)
        try:
            self.show_feld(COLS, ROWS, FELD) # as long as canvas is not created
        except:
            pass
        self.score = 0
        self.counter = 0
        return FELD

    def run(self):
        document.getElementById('next').innerHTML = "Started"
        self.pause = False
        self.bricks = 0
        self.speed = .5
        self.COLS = 20
        self.ROWS = 10
        self.keypressed = - 1
        self.tetrominoes = [ [['.','X','X'], ['X','X','.'], ['.','.','.']], [['X','X','.'], ['.','X','X'], ['.','.','.']], [['.','.','.'], ['X','X','X'], ['.','.','.']], [['.','X','.'], ['.','X','.'], ['.','X','.']], [['.','.','.'], ['X','X','X'], ['.','.','X']], [['.','.','X'], ['X','X','X'], ['.','.','.']], [['.','X','X'], ['.','X','X'], ['.','.','.']], [['.','.','.'], ['.','X','.'], ['X','X','X']]]
        self.lt = len(self.tetrominoes)               
        self.FELD = self.init_field(self.COLS, self.ROWS, self.FELD)
        r = randint(0,self.lt-1)
        self.FigPos = [0, int(self.COLS/2)-1, self.tetrominoes[randint(0,self.lt-1)]] # x,y,figure
        self.new_tetrom = self.tetrominoes[randint(0,self.lt-1)]
        self.new_brick = "\n".join([b[0]+b[1]+b[2] for b in self.new_tetrom])
        document.onkeypress = self.on_keypress
        self.putFig(self.FELD, self.FigPos, "X")
        self.loop()

tetris = Tetris()