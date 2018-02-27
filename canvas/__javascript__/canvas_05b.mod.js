	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.canvas = document.getElementById (self.canvas_id);
				self.canvasWidth = self.canvas.width;
				self.canvasHeight = self.canvas.height;
				self.ctx = self.canvas.getContext ('2d');
				self.turning = true;
				self.reverse = 1;
				self.img = new Image ();
				self.img.src = 'smiley.jpg';
				self.img.onload = self.turn;
				self.animate = setInterval (self.turn, 50);
			});},
			get turn () {return __get__ (this, function (self) {
				self.ctx.clearRect (0, 0, self.canvasWidth, self.canvasHeight);
				self.ctx.translate (self.canvasWidth / 2, self.canvasHeight / 2);
				self.ctx.rotate ((math.pi / 180) * self.reverse);
				self.ctx.translate (-(self.canvasWidth) / 2, -(self.canvasWidth) / 2);
				self.ctx.drawImage (self.img, 0, 0, 200, 200);
			});},
			get toggle () {return __get__ (this, function (self) {
				self.turning = !(self.turning);
				if (self.turning) {
					self.animate = setInterval (self.turn, 50);
				}
				else {
					clearInterval (self.animate);
				}
			});},
			get reverse_move () {return __get__ (this, function (self) {
				self.reverse = -(self.reverse);
			});}
		});
		var graphic = Graphics ('graphics');
		__pragma__ ('<use>' +
			'math' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Graphics = Graphics;
			__all__.__name__ = __name__;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
