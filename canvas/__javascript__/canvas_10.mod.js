	(function () {
		var __name__ = '__main__';
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.ctx = document.getElementById (self.canvas_id).getContext ('2d');
				var __left0__ = tuple ([31, 69, 1, -(1), 8, 25, 1, 1]);
				self.ax = __left0__ [0];
				self.ay = __left0__ [1];
				self.adx = __left0__ [2];
				self.ady = __left0__ [3];
				self.bx = __left0__ [4];
				self.by = __left0__ [5];
				self.bdx = __left0__ [6];
				self.bdy = __left0__ [7];
				self.ani = setInterval (self.animate, 50);
			});},
			get animate () {return __get__ (this, function (self) {
				if (self.ax == 150) {
					self.adx = -(1);
				}
				else if (self.ax == 0) {
					self.adx = 1;
				}
				if (self.ay == 150) {
					self.ady = -(1);
				}
				else if (self.ay == 0) {
					self.ady = 1;
				}
				self.ax = self.ax + self.adx;
				self.ay = self.ay + self.ady;
				if (self.bx == 150) {
					self.bdx = -(1);
				}
				else if (self.bx == 0) {
					self.bdx = 1;
				}
				if (self.by == 150) {
					self.bdy = -(1);
				}
				else if (self.by == 0) {
					self.bdy = 1;
				}
				self.bx = self.bx + self.bdx;
				self.by = self.by + self.bdy;
				self.ctx.clearRect (0, 0, 200, 200);
				self.ctx.rect (0, 0, 200, 200);
				self.ctx.stroke ();
				self.ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
				self.ctx.fillRect (self.ax, self.ay, 50, 50);
				self.ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
				self.ctx.fillRect (self.bx, self.by, 50, 50);
			});}
		});
		var graphic = Graphics ('graphics');
		__pragma__ ('<all>')
			__all__.Graphics = Graphics;
			__all__.__name__ = __name__;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
