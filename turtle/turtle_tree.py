import random
import turtle

def tree(size, myTurtle):
    myTurtle.pensize(size / 20)

    if size < random.randint(1,2) * 20:
        myTurtle.color("green")
    else:
        myTurtle.color("brown")

    if size > 5:
        myTurtle.forward(size)
        myTurtle.left(25)
        tree(size - random.randint(10, 20), myTurtle)
        myTurtle.right(50)
        tree(size - random.randint(10, 20), myTurtle)
        myTurtle.left(25)
        myTurtle.up()       # penup()
        myTurtle.back(size) # backward(size)
        myTurtle.down()     # pendown()

#window = turtle.Screen()   # doesn't exists
#window.setup(800,600)      # doesn't exists
#window.bgcolor("white")    # doesn't exists

myTurtle = turtle.Turtle()
myTurtle.color("brown", "blue")
myTurtle.left(90)
myTurtle.speed(0)
myTurtle.up()         # penup()
myTurtle.goto(0, 250) # setpos(0, -250)     
myTurtle.down()       # pendown()

tree(135, myTurtle)

myTurtle.done() # display 