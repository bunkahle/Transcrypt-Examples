	(function () {
		var __name__ = '__main__';
		var Magnifier = __class__ ('Magnifier', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.img = document.getElementById ('myimage');
				self.saved_src = self.img.src;
				self.resultat = document.getElementById ('myresult');
				self.lens = document.createElement ('DIV');
				self.lens.setAttribute ('class', 'img-zoom-lens');
				self.lens.setAttribute ('position', 'absolute');
				self.img.parentElement.insertBefore (self.lens, self.img);
				self.cx = self.resultat.offsetWidth / self.lens.offsetWidth;
				self.cy = self.resultat.offsetHeight / self.lens.offsetHeight;
				self.resultat.style.backgroundImage = ("url('" + self.img.src) + "')";
				self.resultat.style.backgroundSize = ((self.img.width * self.cx + 'px ') + self.img.height * self.cy) + 'px';
				window.addEventListener ('mousemove', self.moveLens);
				self.img.addEventListener ('mousemove', self.moveLens);
				self.lens.addEventListener ('touchmove', self.moveLens);
				self.img.addEventListener ('touchmove', self.moveLens);
				self.counter = 0;
			});},
			get moveLens () {return __get__ (this, function (self, e) {
				self.img.src = (self.saved_src + '?') + new Date ().getTime ();
				if (!(e)) {
					var e = window.event;
				}
				var a = self.img.getBoundingClientRect ();
				var x = e.pageX - a.left;
				var y = e.pageY - a.top;
				var x = x - window.pageXOffset;
				var y = y - window.pageYOffset;
				var x = x - self.lens.offsetWidth / 2;
				var y = y - self.lens.offsetHeight / 2;
				if (x > self.img.width - self.lens.offsetWidth) {
					var x = self.img.width - self.lens.offsetWidth;
				}
				if (x < 0) {
					var x = 0;
				}
				if (y > self.img.height - self.lens.offsetHeight) {
					var y = self.img.height - self.lens.offsetHeight;
				}
				if (y < 0) {
					var y = 0;
				}
				self.lens.style.left = str (x) + 'px';
				self.lens.style.top = str (y) + 'px';
				self.resultat.style.backgroundPosition = ((('-' + str (x * self.cx)) + 'px -') + str (y * self.cy)) + 'px';
			});}
		});
		var magnificent = Magnifier ();
		__pragma__ ('<all>')
			__all__.Magnifier = Magnifier;
			__all__.__name__ = __name__;
			__all__.magnificent = magnificent;
		__pragma__ ('</all>')
	}) ();
