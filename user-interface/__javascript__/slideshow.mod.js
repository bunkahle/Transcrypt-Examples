	(function () {
		var __name__ = '__main__';
		var SlideShow = __class__ ('SlideShow', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.slideIndex = 1;
				self.showSlides ();
			});},
			get plusSlides () {return __get__ (this, function (self, n) {
				self.slideIndex = self.slideIndex + n;
				self.showSlides ();
			});},
			get currentSlide () {return __get__ (this, function (self, n) {
				self.slideIndex = n;
				self.showSlides ();
			});},
			get showSlides () {return __get__ (this, function (self, n) {
				var n = self.slideIndex;
				var slides = document.getElementsByClassName ('mySlides');
				var dots = document.getElementsByClassName ('dot');
				if (n > slides.length) {
					self.slideIndex = 1;
				}
				if (n < 1) {
					self.slideIndex = slides.length;
				}
				for (var i = 0; i < slides.length; i++) {
					slides [i].style.display = 'none';
				}
				for (var i = 0; i < dots.length; i++) {
					dots [i].className = dots [i].className.py_replace (' active', '');
				}
				slides [self.slideIndex - 1].style.display = 'block';
				dots [self.slideIndex - 1].className += ' active';
			});}
		});
		var slideShow = SlideShow ();
		__pragma__ ('<all>')
			__all__.SlideShow = SlideShow;
			__all__.__name__ = __name__;
			__all__.slideShow = slideShow;
		__pragma__ ('</all>')
	}) ();
