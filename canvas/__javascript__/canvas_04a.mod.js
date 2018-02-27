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
				self.ctx.save ();
				self.ctx.beginPath ();
				self.ctx.lineWidth = '3';
				self.ctx.strokeStyle = 'blue';
				self.ctx.strokeRect (60, 60, 160, 160);
				self.ctx.translate (60, 60);
				self.ctx.strokeStyle = 'red';
				self.ctx.strokeRect (60, 60, 160, 160);
				self.ctx.restore ();
				self.ctx.rect (0, 0, 300, 300);
				self.ctx.stroke ();
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
