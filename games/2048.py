import random,Tkinter
def shift(c): 
        # print "c", c
        # print list([i for i in c if i>0] + [0]*c.count(0))
        return list([i for i in c if i>0] + [0]*c.count(0))
def sms(l):
        l=shift(l)
        for i in range(len(l)-1):
                if l[i+1]==l[i]: l[i], l[i+1] = 2*l[i], 0
        return shift(l)
class game2048(Tkinter.Tk):
        b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] # matrix
        def __init__(self,parent):
                Tkinter.Tk.__init__(self,parent)
                self.parent = parent
                self.grid()
                self.bl = [Tkinter.Button(self, height=2, width=4, state=Tkinter.DISABLED, font=("Helvetica", 24)) for i in range(16)] # buttonist
                for i in range(16): self.bl[i].grid(row=i//4, column=i%4)
                self.new_number()
                self.bind_all('<Key>', self.key)
                self.mainloop()
        def rot(self): 
                "rotate matrix b [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] clockwise"
                self.b = list(map(list, zip(*self.b[::-1]))) 
        def move(self, n):
                # deep copy of self.b in diff
                diff = self.b[:]
                for i in range(n): self.rot()
                for i in range(4): self.b[i] = sms(self.b[i])
                for i in range(4-n): self.rot()
                return 1 if self.b != diff else 0
        def new_number(self):
                "create a new number in b and display all numbers with their colors on the buttons"
                # get a random empty element with its tuple coordinates
                k = [(i//4, i%4) for i,j in enumerate(sum(self.b, [])) if j == 0][random.randint(0, sum(self.b, []).count(0)-1)]
                # assign a random number of 2 or 4 to this element
                self.b[k[0]][k[1]] = random.randint(1,2)*2
                for i in range(16):
                        d = self.b[i//4][i%4]
                        if d == 2048:
                                for i in range(16): self.bl[i].config(bg='green', text=':)')
                                break
                        # display button texts of their contents according to array b and their colors according to their number
                        self.bl[i].config(text=d if d else ' ', bg='#%06x'% ((2**24-1) - (d*1500) ))
        def key(self, event):
                "key handling"
                direction={'Left': 0, 'Down': 1, 'Right': 2, 'Up': 3}
                # shift the digits according to the move 0 1 2 or 4 and check if it has changed, if yes create a new number
                if self.move(direction[event.keysym]): 
                        self.new_number()
                # deep copy of self.b in p
                p = self.b[:]
                # check out all 4 possible moves and compare if numbers would change
                for i in range(4):
                        self.move(i)
                        # check if is still possible to move in any direction if any change return
                        if self.b != p:
                                self.b = p[:]
                                # print self.b
                                return # for a new move
                # otherwise the game has ended
                for i in range(16): self.bl[i].config(bg='red', text=':(')
a = game2048(None)
