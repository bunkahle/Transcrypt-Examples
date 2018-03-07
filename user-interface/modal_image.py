def modal_action():
	modal.style.display = "block"
	modalImg.src = img.src
	captionText.innerHTML = img.alt

def modal_close():
	modal.style.display = "none"

# Get the modal
modal = document.getElementById('myModal')

# Get the image and insert it inside the modal - use its "alt" text as a caption
img = document.getElementById('myImg')
modalImg = document.getElementById("img01")
captionText = document.getElementById("caption")
img.onclick = modal_action

# Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0]

# When the user clicks on <span> (x), close the modal
span.onclick = modal_close