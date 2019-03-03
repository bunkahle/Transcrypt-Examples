#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from random import randint

class Tetris:
    def __init__(self):
        self.ROWS = 10
        self.COLS = 20
        self.FELD = []
        self.ckeys = {"up":38, "right":39, "left":37, "down":40, "esc":27, "quit": 81, "pause": 80}
        self.tetrominoes = [ [['.','X','X'], 
                              ['X','X','.'], 
                              ['.','.','.']], 
                             [['X','X','.'], 
                              ['.','X','X'], 
                              ['.','.','.']], 
                             [['.','.','.'], 
                              ['X','X','X'], 
                              ['.','.','.']], 
                             [['.','X','.'], 
                              ['.','X','.'], 
                              ['.','X','.']], 
                             [['.','.','.'], 
                              ['X','X','X'], 
                              ['.','.','X']], 
                             [['.','.','X'], 
                              ['X','X','X'], 
                              ['.','.','.']], 
                             [['.','X','X'], 
                              ['.','X','X'], 
                              ['.','.','.']], 
                             [['.','.','.'], 
                              ['.','X','.'], 
                              ['X','X','X']]]
        self.lt = len(self.tetrominoes)               
        self.init_field()

    def mult_string(self, s, c):
        new_row = ""
        for i in range(c):
            new_row += s
        return new_row

    def chkBoard(self): # kill full lines and increase score
        deleted = False
        for i in range(self.ROWS):
            if not "." in self.FELD[i]:
                self.showfield()
                start = self.FELD[:i]
                ende = self.FELD[i+1:]
                new_row = self.mult_string(".", self.COLS)
                self.FELD = ["X"+new_row+"X"]
                self.FELD.extend(start)
                self.FELD.extend(ende)
                self.score = self.score + self.score
                deleted = True
                # self.sleep(self.speed)
                self.showfield()
                break
        return deleted

    def testCollision(self, FP):
        for i in range(3):
            for j in range(3):
                try:
                    if FP[2][i][j] == "X" and self.FELD[FP[0]+i][FP[1]+j] == "X":
                        return 1 # collision 
                except:
                    return 0
        return 0 # no collision

    def putFig(self, FP, mode):
        for i in range(3):
            for j in range(3):
                try:
                    if FP[2][i][j] == "X": # mode == "X"
                        self.FELD[FP[0]+i] = self.FELD[FP[0]+i][:FP[1]+j] + mode + self.FELD[FP[0]+i][FP[1]+j+1:]  # drawing new brick
                except:
                    pass

    def MoveFig(self, FP, key, d):
        def return_success(F, success):
            self.putFig(F, "X")
            self.keypressed = -1
            return success, F # movement with success=1 or without success=0
        FPC = [FP[0], FP[1], FP[2]]
        if key == self.ckeys["left"]: FPC[1] = FPC[1] - d
        elif key == self.ckeys["right"]: FPC[1] = FPC[1] + d
        elif key == self.ckeys["down"]: 
            if FPC[0]<self.ROWS-4:
                FPC[0] = FPC[0] + d*2
        elif key == self.ckeys["up"]: FPC[2] = self.RotFig(FPC[2], 1)
        else:
            FPC[0] = FPC[0] + d
        self.putFig(FP, ".")
        if not self.testCollision(FPC): # no collision
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
            if not self.testCollision(FPC): # no collision
                return return_success(FPC, 1)
            else:    
                return return_success(FP, 0)   

    def RotFig(self, FPR, rot): # rot = 0 no rotation, rot = 1 90 degress right, 2 = 180 degress, 3 = 270 degress right
        F2 =  [FPR[0], FPR[1], FPR[2]]
        for r in range(rot%4):
            FPR =  [[F2[2][0], F2[1][0], F2[0][0]], [F2[2][1], F2[1][1], F2[0][1]], [F2[2][2], F2[1][2], F2[0][2]] ]
        return FPR

    def showfield(self, update=True):
        if update: document.getElementById('next').innerHTML = self.msg+"<br>\nRound No.:"+str(self.counter)+' Bricks passed so far: '+str(self.bricks)+' '
        sfeld = "+" + self.mult_string("-", self.COLS) + "+<br>"
        for i in range(self.ROWS):
            sfeld += '|' + self.FELD[i][1:-1] + "|<br>"
        sfeld += "+" + self.mult_string("-", self.COLS) + "+<br>"
        document.getElementById('canvas').innerHTML = sfeld

    def on_keypress(self, e):
        if self.end: return
        kc = e.keyCode 
        cc = e.charCode
        for key, val in self.ckeys.items():
            if kc == val or cc == val:
                self.keypressed = val
                break
        self.loop()

    def getsizes(self):
        self.COLS = document.getElementById("SelectX").value
        self.ROWS = document.getElementById("SelectY").value

    def clearscreen(self):
        document.getElementById('canvas').innerHTML = ""
        document.getElementById('title').innerHTML = "Your score is: 0"
        self.getsizes()
        self.init_field()

    def loop(self):
        clearTimeout(self.cont)
        if self.end: 
            return
        self.counter += 1
        self.score = self.score + 1
        self.msg = "Next Brick:<pre>" + self.new_brick + "</pre>"
        self.showfield()
        if self.keypressed == self.ckeys["esc"] or self.keypressed == self.ckeys["quit"]: # esc or quit (q)
            document.getElementById('title').innerHTML = "Game over. Your score is: "+str(self.score+self.counter)
            self.end = True
            clearTimeout(self.cont)
            return
        if self.keypressed == self.ckeys["pause"]: # pause (p)
            self.pause = not self.pause
            self.keypressed = -1
        if not self.pause:
            move, self.FigPos = self.MoveFig(self.FigPos, self.keypressed, 1)
            dele = True
            if not move:
                while dele:
                    dele = self.chkBoard() # check for complete rows and delete them
                self.FigPos = [0, int(self.COLS/2)-1, self.new_tetrom] # create new tetrominoe with x,y,figure
                self.new_tetrom = self.tetrominoes[randint(0, self.lt-1)] # create next brick for already showing it
                self.new_brick = "<pre>"+"\n".join([b[0]+b[1]+b[2] for b in self.new_tetrom])+"</pre>"
                self.bricks += 1
                if self.testCollision(self.FigPos):
                    document.getElementById('title').innerHTML = "Game Over. Your score is: "+str(self.score+self.counter)
                    self.end = True
                    return
                else:
                    document.getElementById('title').innerHTML = "Your score is: "+str(self.score+self.counter)
                self.putFig(self.FigPos, "X")
        self.cont = setTimeout(self.loop, self.speed*1000)

    def init_field(self):
        self.FELD = []
        for i in range(self.ROWS):
            new_row = self.mult_string(".", self.COLS)
            self.FELD.append("X"+new_row+"X")
        new_row = self.mult_string("X", self.COLS+2)
        self.FELD.append(new_row)
        try:
            self.showfield(update=False) # as long as canvas is not created
        except:
            pass
        self.score = 0
        self.counter = 0

    def resize(self):
        self.getsizes()
        self.clearscreen()

    def run(self):
        document.getElementById('next').innerHTML = "Started"
        self.pause = False
        self.end = False
        self.bricks = 0
        self.speed = .5
        self.keypressed = - 1
        self.init_field()
        self.FigPos = [0, int(self.COLS/2)-1, self.tetrominoes[randint(0,self.lt-1)]] # x,y,figur
        self.new_tetrom = self.tetrominoes[randint(0,self.lt-1)]
        self.new_brick = "\n".join([b[0]+b[1]+b[2] for b in self.new_tetrom])
        document.onkeydown = self.on_keypress
        self.putFig(self.FigPos, "X")
        self.loop()

tetris = Tetris()