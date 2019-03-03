import random

class Tile:
    def __init__(self, value=0):
        self.value = value

class Game2048:
    def __init__(self, size):
        self.grid = [[Tile() for i in range(size)] for j in range(size)]
        self.gl = size
        self.b = [[False for i in j] for j in self.grid]
        self.colorcodes = {0: "white", 2:"AntiqueWhite", 4:"BurlyWood", 8:"BurlyWood", 16:"Cyan", 32:"Gold", 64:"GoldenRod", 128:"HotPink", 256:"Crimson", 512:"DarkRed", 1024:"DeepPink", 2048:"DarkMagenta"}
        self.start_value = int(document.getElementById("selstart").value)
        self.addRandomTile()
        self.addRandomTile()
        for i in range(16):
            document.getElementById("butt"+str(i)).style.fontSize = "large"
            document.getElementById("butt"+str(i)).style.backgroundColor  = "white"
            document.getElementById("butt"+str(i)).style.height = "100px"
            document.getElementById("butt"+str(i)).style.width = "100px"
            document.getElementById("butt"+str(i)).innerHTML = "   "
        self.makeButtons()
        document.onkeydown = self.on_keypress

    def __str__(self):
        ret = ''
        iS = {}
        for j in self.grid:
            for i in range(len(j)):
                iS[i] = max(iS.get(i), len(str(j[i])))
        for j in self.grid:
            for i in range(len(j)):
                ret = ret + str(j[i]) + ' ' + ' '*(iS[i]-len(str(j[i])))
            ret = ret + '\n'
        return ret.replace(' 0', '  ').replace('0 ', '  ')

    def addRandomTile(self):
        availableTiles = self.getAvailableTiles()
        findTile = self.findTile(random.choice(availableTiles))
        self.grid[findTile[0]][findTile[1]] = Tile(self.start_value)

    def getAvailableTiles(self):
        ret = []
        for i in self.grid:
            for j in i:
                if j.value == 0:
                    ret.append(j)
        return ret

    def findTile(self, tile):
        for i in range(len(self.grid)):
            for j in range(len(self.grid[i])):
                if self.grid[i][j] == tile:
                    return i, j

    def reloc(self, i, j):
        return i*self.gl+j

    def makeButtons(self):
        for i in range(len(self.grid)):
            for j in range(len(self.grid[i])):
                if self.grid[i][j].value:
                    document.getElementById("butt"+str(self.reloc(i, j))).style.backgroundColor  = self.colorcodes[self.grid[i][j].value]
                    document.getElementById("butt"+str(self.reloc(i, j))).innerHTML = str(self.grid[i][j].value)
                else:
                    document.getElementById("butt"+str(self.reloc(i, j))).style.backgroundColor  = "white"
                    document.getElementById("butt"+str(self.reloc(i, j))).innerHTML = "   "

    def move(self, direction):
        merged = []
        moved = False
        lines = rotate(self.grid, direction+1)
        console.log(lines)
        for line in lines:
            console.log(line)
            while len(line) and line[len(line)-1].value == 0:
                line.pop(-1)
            i = len(line)-1
            while i >= 0:
                if line[i].value == 0:
                    moved = True
                    line.pop(i)
                i -= 1
            i = 0
            while i < len(line)-1:
                if line[i].value == line[i+1].value and not (line[i] in merged or line[i+1] in merged):
                    moved = True
                    line[i] = Tile(line[i].value*2)
                    merged.append(line[i])
                    line.pop(i+1)
                else:
                    i += 1
            while len(line) < len(self.grid):
                line.append(Tile())
        for line in lines:
            if not len(lines):
                line = [Tile() for i in self.grid]
        self.grid = rotate(lines, 0-(direction+1))
        if moved:
            self.addRandomTile()

    def on_keypress(self, event):
        "key handling"
        kc = event.keyCode 
        if kc == 37: 
            self.move(3)
        elif kc == 38:
            self.move(2)
        elif kc == 39:
            self.move(1)
        elif kc == 40:
            self.move(0)
        self.makeButtons()
        if self.lost():
            for i in range(16): 
                document.getElementById("butt"+str(i)).style.backgroundColor  = "red"
                document.getElementById("butt"+str(i)).innerHTML  = document.getElementById("butt"+str(i)).innerHTML+ " :("
            alert("Aaah! This did not work!")
        elif self.won():
            alert("Congratulations! You made it!")

    def lost(self):
        s = len(self.grid)-1
        b = True
        for i in range(len(self.grid)):
            for j in range(len(self.grid[i])):
                val = self.grid[i][j].value
                if val == 0:
                    b = False
                if i > 0 and self.grid[i-1][j].value == val:
                    b = False
                if j > 0 and self.grid[i][j-1].value == val:
                    b = False
                if i < s and self.grid[i+1][j].value == val:
                    b = False
                if j < s and self.grid[i][j+1].value == val:
                    b = False
        return b

    def won(self):
        for i in range(len(self.grid)):
            for j in range(len(self.grid[i])):
                if self.grid[i][j].value == 2048:
                    return True
        return False

    def getValues(self):
        ret = []
        for i in self.grid:
            for j in i:
                ret.append(j)
        return ret

    def startvalue(self):
        self.start_value = int(document.getElementById("selstart").value)

def rotate(l, num):
    num = num % 4
    s = len(l)-1
    l2 = []
    if num == 0:
        l2 = l
    elif num == 1:
        l2 = [[False for i in j] for j in l]
        for y in range(len(l)):
            for x in range(len(l[y])):
                l2[x][s-y] = l[y][x]
    elif num == 2:
        l2 = l
        l2.reverse()
        for i in l:
            i.reverse()
    elif num == 3:
        l2 = [[False for i in j] for j in l]
        for y in range(len(l)):
            for x in range(len(l[y])):
                l2[y][x] = l[x][s-y]
    return l2

game2048 = Game2048(4)
