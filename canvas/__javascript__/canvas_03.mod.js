	(function () {
		var __name__ = '__main__';
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.ctx = document.getElementById (self.canvas_id).getContext ('2d');
				self.img = new Image ();
				self.img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
				if (self.img.naturalWidth == 'undefined' || self.img.naturalWidth == 0) {
					self.img.src = 'backdrop.png';
				}
				self.img.onload = self.display;
			});},
			get display () {return __get__ (this, function (self) {
				print ('width and height of self.img:', self.img.width, self.img.height);
				var mult = 2;
				self.ctx.drawImage (self.img, 0, 0, self.img.width * mult, self.img.height * mult);
				print ('line width:', self.ctx.lineWidth);
				self.ctx.beginPath ();
				self.ctx.lineWidth = self.ctx.lineWidth * mult;
				self.ctx.moveTo (30 * mult, 96 * mult);
				self.ctx.lineTo (70 * mult, 66 * mult);
				self.ctx.lineTo (103 * mult, 76 * mult);
				self.ctx.lineTo (170 * mult, 15 * mult);
				self.ctx.stroke ();
			});}
		});
		var graphic = Graphics ('graphics');
		__pragma__ ('<all>')
			__all__.Graphics = Graphics;
			__all__.__name__ = __name__;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
