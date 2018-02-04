#!/usr/bin/env python
# -*- coding: utf-8 -*-

class TestSystem:
    
    def __init__ (self):
        pass

    def square(self):
        rows = 4
        cols = 4
        table_html = ""
        table_html = table_html + "<table>"
        for i in range(rows):
            table_html = table_html + "<tr>"
            for j in range(cols):
                table_html = table_html + '<td id="cell-'+str(i)+'-'+str(j)+'" onclick="dom11.ClickCell(this)">'
                table_html = table_html + "<span></span>"
                table_html = table_html + "</td>"
            table_html = table_html + "</tr>"
        table_html = table_html + "</table>"
        document.write(table_html)
        document.querySelector("test").innerText=table_html

    def ClickCell(self, cell):
        cell.style.backgroundColor = "red"

testSystem = TestSystem()



