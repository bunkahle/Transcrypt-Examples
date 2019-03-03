def createTable():
    document.writeln('<table id="table1">')
    for i in range(3):
        document.writeln('  <tr id="'+str(i)+'">')
        for j in range(3):
            document.write('      <td bgcolor="white" width=100 height=100 align="center" id="'+str(i)+str(j)+'" onclick="gridtest2.getPosition(this)">')
            document.writeln('Cell ID:'+str(i)+str(j)+'</td>')
        document.writeln('  </tr>')
    document.writeln('</table>')

def getPosition(pos):
    pos.bgColor="#ff0000"
    alert("Cell index is: " + pos.cellIndex + " and ID is " + pos.id + " and text is " + pos.innerText)
    x = int(pos.id[1])
    y = int(pos.id[0])
    cell = document.getElementById(pos.id)
    cell.bgColor="#ffffff"
    alert("row " + pos.parentNode.rowIndex + " - column " + pos.cellIndex);
    
