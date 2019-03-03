def createTable():
    body = document.getElementsByTagName("body")[0]
    tbl = document.createElement("TABLE")
    tbl.setAttribute("id", "myTable")
    document.getElementById("table1").appendChild(tbl)
    tblBody = document.createElement("tbody")

    for i in range(4):
        y = document.createElement("TR")
        y.setAttribute("id", "myTr"+str(i))
        document.getElementById("myTable").appendChild(y)
        for j in range(5):
            x = document.createElement("TD")
            x.setAttribute("id", "TD"+str(i)+str(j))
            t = document.createTextNode("1"+" ("+str(i)+","+str(j)+")")
            # console.log(dir(t))
            # t.setAttribute("id", "CONTTD"+str(i)+str(j))
            x.appendChild(t)
            y.appendChild(x)
        tblBody.appendChild(y)
    tbl.appendChild(tblBody)
    tbl.setAttribute("border", "2")
    # body.appendChild(tbl)
    # console.log(document.querySelectorAll('TD'))

def preve():
    tbl = document.getElementById("myTable")
    nr = tbl.rows[1].cells[1].innerHTML[:2]
    if nr == "" or nr == "&n": nr="2"
    if int(nr)>1:
        nr = str(int(nr)-1)
        write_table(nr)

def nexte():
    tbl = document.getElementById("myTable")
    nr = tbl.rows[1].cells[1].innerHTML[:2]
    console.log("nr"+nr)    
    if nr == "" or nr == "&n": nr="0"
    if int(nr)<10:
        nr = str(int(nr)+1)
        write_table(nr)

def cleare():
    write_table("")

def write_table(nr):
    tbl = document.getElementById("myTable")
    for i in range(4):
        for j in range(5):
            idname = "TD"+str(i)+str(j)
            if nr != "":
                tbl.rows[i].cells[j].innerHTML = nr+" ("+str(i)+","+str(j)+")"
            else:
                tbl.rows[i].cells[j].innerHTML = "&nbsp;"
