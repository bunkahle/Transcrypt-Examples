	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.canvas = document.getElementById (self.canvas_id);
				self.ctx = self.canvas.getContext ('2d');
				self.ctx.rect (0, 0, 300, 300);
				self.ctx.stroke ();
				self.ctx.fillStyle = '#ff0000';
				self.ctx.fillRect (10, 10, 100, 100);
				self.ctx.fillStyle = '#0000ff';
				self.ctx.fillRect (110, 110, 80, 80);
				self.ctx.lineWidth = '3';
				self.ctx.strokeStyle = '#00ff00';
				self.ctx.strokeRect (55, 55, 100, 100);
				self.ctx.clearRect (120, 120, 20, 20);
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
