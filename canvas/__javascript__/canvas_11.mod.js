	(function () {
		var __name__ = '__main__';
		var Graphics = __class__ ('Graphics', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id) {
				self.canvas_id = canvas_id;
				self.canvas = document.getElementById (self.canvas_id);
				self.ctx = self.canvas.getContext ('2d');
				self.canvas.onmouseover = self.drawCanvas;
				self.kx = document.getElementById ('kx');
				self.ky = document.getElementById ('ky');
				var __left0__ = tuple ([0, 0]);
				self.x = __left0__ [0];
				self.y = __left0__ [1];
				self.ctx.fillStyle = 'rgb(255, 0, 0)';
				window.addEventListener ('mousemove', self.drawCanvas);
			});},
			get drawCanvas () {return __get__ (this, function (self, event) {
				self.x = event.clientX - self.canvas.offsetLeft;
				self.y = event.clientY - self.canvas.offsetTop;
				self.kx.innerHTML = self.x;
				self.ky.innerHTML = self.y;
				self.canvas.onmouseup = self.set_active_false;
				self.canvas.onmousedown = self.set_active_true;
				if (self.active) {
					self.ctx.fillRect (self.x, self.y, 10, 10);
				}
				var red = document.getElementById ('red');
				red.onclick = self.set_red;
				var green = document.getElementById ('green');
				green.onclick = self.set_green;
				var blue = document.getElementById ('blue');
				blue.onclick = self.set_blue;
			});},
			get set_red () {return __get__ (this, function (self) {
				print ('red');
				self.ctx.fillStyle = 'rgb(255, 0, 0)';
			});},
			get set_green () {return __get__ (this, function (self) {
				print ('green');
				self.ctx.fillStyle = 'rgb(0, 255, 0)';
			});},
			get set_blue () {return __get__ (this, function (self) {
				print ('blue');
				self.ctx.fillStyle = 'rgb(0, 0, 255)';
			});},
			get set_active_true () {return __get__ (this, function (self) {
				self.active = true;
			});},
			get set_active_false () {return __get__ (this, function (self) {
				self.active = false;
			});}
		});
		var graphic = null;
		var init = function () {
			graphic = Graphics ('graphics');
		};
		var clearCanvas = function (self) {
			graphic.ctx.clearRect (0, 0, graphic.canvas.width, graphic.canvas.height);
		};
		__pragma__ ('<all>')
			__all__.Graphics = Graphics;
			__all__.__name__ = __name__;
			__all__.clearCanvas = clearCanvas;
			__all__.graphic = graphic;
			__all__.init = init;
		__pragma__ ('</all>')
	}) ();
