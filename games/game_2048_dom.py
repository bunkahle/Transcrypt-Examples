import random

class Game2048:
    
    def __init__(self):
        self.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] # matrix
        for i in range(16):
            # btn = document.getElementById("butt"+str(i))
            document.getElementById("butt"+str(i)).style.fontSize = "large"
            document.getElementById("butt"+str(i)).style.backgroundColor  = "white"
            document.getElementById("butt"+str(i)).style.height = "100px"
            document.getElementById("butt"+str(i)).style.width = "100px"
            document.getElementById("butt"+str(i)).innerHTML = "   "
        self.start_value = document.getElementById("selstart").value
        self.start_value = int(self.start_value)
        self.new_number()
        document.onkeypress = self.on_keypress

    def shiftp(self, c): 
        lst = []
        zeros = 0
        for i in c:
            if i == 0:
                zeros += 1
            if i>0:
                lst.append(i)
        for i in range(zeros):
            lst.append(0)
        return lst

    def sms(self, l):
        l = self.shiftp(l)
        for i in range(len(l)-1):
            if l[i+1]==l[i]: 
                l[i], l[i+1] = 2*l[i], 0
        ret = self.shiftp(l)
        return ret

    def rot(self): 
        "rotate matrix b [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] clockwise"
        # self.b = list(map(list, zip(*self.b[::-1]))) does not work
        self.b = [[self.b[3][0],self.b[2][0],self.b[1][0],self.b[0][0]], 
              [self.b[3][1],self.b[2][1],self.b[1][1],self.b[0][1]],
              [self.b[3][2],self.b[2][2],self.b[1][2],self.b[0][2]],
              [self.b[3][3],self.b[2][3],self.b[1][3],self.b[0][3]]]

    def move(self, n):
        # deep copy of self.b in diff
        diff = self.b[:]
        for i in range(n): self.rot()
        for i in range(4): self.b[i] = self.sms(self.b[i])
        for i in range(4-n): self.rot()
        if self.b != diff:
            return 1
        else:
            return 0

    def new_number(self):
        "create a new number in b and display all numbers with their colors on the buttons"
        # get a random empty element with its tuple coordinates
        empty = []
        for r, row in enumerate(self.b):
            for c, col in enumerate(row):
                if col == 0:
                    empty.append((r, c))
        if len(empty)>0:
            k = empty[random.randint(0, len(empty)-1)]
            # assign a random number of 2 or 4 to this element or a given self.start_value
            self.b[k[0]][k[1]] = random.randint(1,2)*self.start_value
        j = -1
        for i in range(16):
            d = self.b[i//4][i%4]
            if d == 2048:
                j = i
            # display button texts of their contents according to array b and their colors according to their number
            if d:
                document.getElementById("butt"+str(i)).innerHTML = str(d)
            else:
                document.getElementById("butt"+str(i)).innerHTML = '   '
            colorcodes = {0: "white", 2:"AntiqueWhite", 4:"BurlyWood", 8:"BurlyWood", 16:"Cyan", 32:"Gold", 64:"GoldenRod",         128:"HotPink", 256:"Crimson", 512:"DarkRed", 1024:"DeepPink", 2048:"DarkMagenta"}
            document.getElementById("butt"+str(i)).style.backgroundColor  = colorcodes[d]
        if j >-1:
            for i in range(16): 
                document.getElementById("butt"+str(i)).innerHTML  = document.getElementById("butt"+str(i)).innerHTML+" :)"
            alert("Congratulations! You made it to 2048!")
            self.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

    def on_keypress(self, event):
        "key handling"
        direction={'Left': 0, 'Down': 1, 'Right': 2, 'Up': 3}
        # shift the digits according to the move 0 1 2 or 4 and check if it has changed, if yes create a new number
        self.keypressed = -1
        kc = event.keyCode 
        cc = event.charCode
        self.ckeys = {38:3, 39:2, 37:0, 40:1}
        for key, val in self.ckeys.items():
            if kc == key:
                self.keypressed = key
                break
        if self.keypressed != -1:
            if self.move(self.ckeys[self.keypressed]): 
                self.new_number()
            # deep copy of self.b in p
            p = self.b[:]
            # check out all 4 possible moves and compare if numbers would change
            for i in range(4):
                self.move(i)
                # check if is still possible to move in any direction if any change return
                if self.b != p:
                    self.b = p[:]
                    # console.log(self.b)
                    return # for a new move
            # otherwise the game has ended
            for i in range(16): 
                document.getElementById("butt"+str(i)).style.backgroundColor  = "red"
                document.getElementById("butt"+str(i)).innerHTML  = document.getElementById("butt"+str(i)).innerHTML+ " :("
            alert("Aaah! This did not work!")
    
    def startvalue(self):
        self.start_value = int(document.getElementById("selstart").value)

game2048 = Game2048(None)
