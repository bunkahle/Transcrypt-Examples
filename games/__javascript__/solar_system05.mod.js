	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var SolarSystem = __class__ ('SolarSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.sun = new Image ();
				self.moon = new Image ();
				self.earth = new Image ();
				self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
				if (self.sun.naturalWidth == 'undefined' || self.sun.naturalWidth == 0) {
					self.sun.src = 'Canvas_sun.png';
				}
				self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
				if (self.moon.naturalWidth == 'undefined' || self.moon.naturalWidth == 0) {
					self.moon.src = 'Canvas_moon.png';
				}
				self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
				if (self.earth.naturalWidth == 'undefined' || self.earth.naturalWidth == 0) {
					self.earth.src = 'Canvas_earth.png';
				}
				self.Keys = dict ({'SPACE': 32, 'LEFT': 37, 'UP': 38, 'RIGHT': 39, 'DOWN': 40});
				self.accel_value = 1.0;
				self.accelerate = 1.0;
				document.onkeypress = self.keyHandler;
				self.paused = false;
				self.main_loop ();
			});},
			get render () {return __get__ (this, function (self) {
				self.ctx = document.getElementById ('canvas').getContext ('2d');
				self.ctx.globalCompositeOperation = 'destination-over';
				self.ctx.clearRect (0, 0, 300, 300);
				self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
				self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
				self.ctx.save ();
				self.ctx.translate (150, 150);
				self.time = new Date ();
				var secs = self.time.getSeconds ();
				var msecs = self.time.getMilliseconds ();
				self.ctx.rotate ((((2 * math.pi) / 60) * self.accelerate) * secs + (((2 * math.pi) / 60000) * self.accelerate) * msecs);
				self.ctx.translate (105, 0);
				self.ctx.fillRect (0, -(12), 50, 24);
				self.ctx.drawImage (self.earth, -(12), -(12));
				self.ctx.save ();
				self.ctx.rotate ((((2 * math.pi) / 6) * self.accelerate) * secs + (((2 * math.pi) / 6000) * self.accelerate) * msecs);
				self.ctx.translate (0, 28.5);
				self.ctx.drawImage (self.moon, -(3.5), -(3.5));
				self.ctx.restore ();
				self.ctx.restore ();
				self.ctx.beginPath ();
				self.ctx.arc (150, 150, 105, 0, math.pi * 2, false);
				self.ctx.stroke ();
				self.ctx.font = '20px Arial';
				self.ctx.fillStyle = 'white';
				self.ctx.fillText ('Accel:' + str (self.accelerate), 10, 20);
				self.ctx.drawImage (self.sun, 0, 0, 300, 300);
				self.main_loop ();
			});},
			get pause () {return __get__ (this, function (self) {
				self.paused = !(self.paused);
				if (self.paused) {
					document.getElementById ('info').innerHTML = '<b>Game stopped</b>';
				}
				else {
					document.getElementById ('info').innerHTML = '<b>Game running</b>';
				}
			});},
			get keyHandler () {return __get__ (this, function (self, e) {
				self.keyCode = e.keyCode;
				self.charCode = e.charCode;
				console.log ((('keyCode: ' + str (self.keyCode)) + ' charCode: ') + str (self.charCode));
			});},
			get accel () {return __get__ (this, function (self) {
				self.accelerate += self.accel_value;
			});},
			get slowdown () {return __get__ (this, function (self) {
				self.accelerate -= self.accel_value;
			});},
			get user_input () {return __get__ (this, function (self) {
				if (self.keyCode == self.Keys ['RIGHT']) {
					self.accelerate += self.accel_value;
				}
				else if (self.keyCode == self.Keys ['LEFT']) {
					self.accelerate -= self.accel_value;
				}
				self.keyCode = -(1);
			});},
			get main_loop () {return __get__ (this, function (self) {
				self.user_input ();
				if (!(self.paused)) {
					self.animate = window.requestAnimationFrame (self.render);
				}
				else {
					setTimeout (self.main_loop, 50);
				}
			});}
		});
		var solarSystem = SolarSystem ();
		__pragma__ ('<use>' +
			'math' +
		'</use>')
		__pragma__ ('<all>')
			__all__.SolarSystem = SolarSystem;
			__all__.__name__ = __name__;
			__all__.solarSystem = solarSystem;
		__pragma__ ('</all>')
	}) ();
