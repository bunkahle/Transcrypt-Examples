class SlideShow():

    def __init__(self):
        self.slideIndex = 1
        self.showSlides()

    def plusSlides(self, n):
        self.slideIndex = self.slideIndex + n
        self.showSlides()

    def currentSlide(self, n):
        self.slideIndex = n
        self.showSlides()

    def showSlides(self, n):
        n = self.slideIndex
        slides = document.getElementsByClassName("mySlides")
        dots = document.getElementsByClassName("dot")
        if (n > slides.length): self.slideIndex = 1
        if (n < 1): self.slideIndex = slides.length
        for i in range(slides.length):
            slides[i].style.display = "none"
        for i in range(dots.length):
            dots[i].className = dots[i].className.replace(" active", "")
        slides[self.slideIndex-1].style.display = "block"
        dots[self.slideIndex-1].className += " active"

slideShow = SlideShow()