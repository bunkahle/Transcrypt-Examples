class ProgressBar:

    def __init__(self):
        self.stop = False
        self.width = 1        

    def frame(self):
        if (self.width >= 100 or self.stop):
            clearInterval(self.id)
        else:
            self.width +=1 
            self.elem.style.width = self.width + '%' 
            document.getElementById("label").innerHTML = self.width * 1  + '%'

    def move(self):
        messages = ["Start Progress", "Stop Progress"]
        label = document.querySelector("#start").innerHTML
        self.elem = document.getElementById("myBar")
        if label == messages[0]:
            document.querySelector("#start").innerHTML = messages[1]
            self.stop = False
            self.id = setInterval(self.frame, 100)
        else:
            document.querySelector("#start").innerHTML = messages[0]
            self.stop = True
            clearInterval(self.id)

pb = ProgressBar()