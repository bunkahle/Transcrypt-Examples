	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.ctx = document.getElementById (self.canvas_id).getContext ('2d');
				self.img = new Image ();
				self.img.src = 'smiley.jpg';
				self.img.onload = self.turn;
			});},
			get turn () {return __get__ (this, function (self) {
				self.ctx.translate (200, 0);
				self.ctx.rotate ((90 * math.pi) / 180);
				self.ctx.drawImage (self.img, 0, 0, 200, 200);
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
