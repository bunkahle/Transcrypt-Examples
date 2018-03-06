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
				self.img = new Image ();
				self.draw ();
			});},
			get draw () {return __get__ (this, function (self) {
				self.ctx.fillStyle = '#FA6900';
				self.ctx.shadowOffsetX = 5;
				self.ctx.shadowOffsetY = 5;
				self.ctx.shadowBlur = 4;
				self.ctx.shadowColor = 'rgba(24, 24, 24, 0.5)';
				self.ctx.fillRect (0, 0, 15, 150);
				self.ctx.save ();
				self.ctx.fillStyle = '#E0E4CD';
				self.ctx.shadowOffsetX = 10;
				self.ctx.shadowOffsetY = 10;
				self.ctx.shadowBlur = 4;
				self.ctx.shadowColor = 'rgba(154, 154, 154, 0.5)';
				self.ctx.fillRect (30, 0, 30, 150);
				self.ctx.save ();
				self.ctx.fillStyle = '#A7DBD7';
				self.ctx.shadowOffsetX = 15;
				self.ctx.shadowOffsetY = 15;
				self.ctx.shadowBlur = 4;
				self.ctx.shadowColor = 'rgba(204, 204, 204, 0.5)';
				self.ctx.fillRect (90, 0, 45, 150);
				self.ctx.save ();
				self.ctx.restore ();
				self.ctx.beginPath ();
				self.ctx.arc (185, 75, 22, 0, math.pi * 2, true);
				self.ctx.closePath ();
				self.ctx.fill ();
				self.ctx.restore ();
				self.ctx.beginPath ();
				self.ctx.arc (260, 75, 15, 0, math.pi * 2, true);
				self.ctx.closePath ();
				self.ctx.fill ();
				self.ctx.restore ();
				self.ctx.beginPath ();
				self.ctx.arc (305, 75, 8, 0, math.pi * 2, true);
				self.ctx.closePath ();
				self.ctx.fill ();
			});}
		});
		var init = function () {
			var graphic = Graphics ('graphics');
		};
		__pragma__ ('<use>' +
			'math' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Graphics = Graphics;
			__all__.__name__ = __name__;
			__all__.init = init;
		__pragma__ ('</all>')
	}) ();
