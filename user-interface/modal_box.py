# open the box
def open_box(event):
    modal.style.display = "block"

# close the box
def close_box(event):
    if (event.target == modal or event.target == span or event.target == closebut or event.target == saving):
        close_modal()

def close_modal():
    modal.style.display = "none"

def msg():
    modal.style.display = "none"
    alert("saving")

# Get the modal
modal = document.getElementById('myModal')

# Get the button that opens the modal
btn = document.getElementById("myBtn")

# Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0]

closebut = document.getElementsByClassName("btn")[0]

saving = document.getElementsByClassName("save")[0]

# When the user clicks the button, open the modal 
btn.onclick = open_box

# When the user clicks on <span> (x), close the modal
span.onclick = close_box

# When the user clicks anywhere outside of the modal, close it
window.onclick = close_box
