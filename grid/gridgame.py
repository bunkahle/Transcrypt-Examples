class GridGame():

    def __init__(self):
        self.moves = 0
        self.gridarray = [[False for j in range(3)]for i in range(3)]

    def createTable(self):
        document.writeln('<table id="table1">')
        for i in range(3):
            document.writeln('  <tr id="'+str(i)+'">')
            for j in range(3):
                document.write('      <td bgcolor="grey" width=100 height=100 align="center" id="'+str(i)+str(j)+'" onclick="gridgame.gridGame.getPosition(this)">')
                document.writeln(' </td>')
            document.writeln('  </tr>')
        document.writeln('</table>')

    def getPosition(self, pos):
        self.moves = self.moves + 1
        self.updateMoves()
        x = int(pos.id[0])
        y = int(pos.id[1])
        self.gridarray[x][y] = not self.gridarray[x][y]
        # toggle the neighboring cells
        if x>0: self.gridarray[x-1][y] = not self.gridarray[x-1][y]
        if x<2: self.gridarray[x+1][y] = not self.gridarray[x+1][y]
        if y>0: self.gridarray[x][y-1] = not self.gridarray[x][y-1]
        if y<2: self.gridarray[x][y+1] = not self.gridarray[x][y+1]
        self.do_lighting()

    def do_lighting(self):
        countwhite = 0
        for x in range(3):
            for y in range(3):
                cell = document.getElementById(str(x)+str(y))
                if self.gridarray[x][y]:
                    cell.bgColor="white"
                    countwhite += 1
                else:
                    cell.bgColor="grey"
        if countwhite == 9:
            alert("You have managed to turn all lights on! Congratulations")

    def restart(self):
        self.moves = 0
        self.gridarray = [[0 for j in range(3)]for i in range(3)]
        self.updateMoves()
        for x in range(3):
            for y in range(3):
                cell = document.getElementById(str(x)+str(y))
                cell.bgColor="grey"

    def updateMoves(self):
        document.getElementById("moves").innerText = "Moves: "+str(self.moves)
    
gridGame = GridGame()