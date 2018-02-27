	(function () {
		var math = {};
		var time = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		__nest__ (time, '', __init__ (__world__.time));
		var Clock = __class__ ('Clock', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.img_url = 'chrome_clock.png';
				self.width = 300;
				self.height = 300;
				self.isActive = true;
				self.clock = new Image ();
				self.clock.src = self.img_url;
				self.draw ();
			});},
			get getTimeSeconds () {return __get__ (this, function (self) {
				return __mod__ (time.time (), 60.0);
			});},
			get getTimeMilliseconds () {return __get__ (this, function (self) {
				return __mod__ (time.time () * 1000.0, 1.0);
			});},
			get getTimeMinutes () {return __get__ (this, function (self) {
				return __mod__ (time.time () / 60, 60.0);
			});},
			get getTimeHours () {return __get__ (this, function (self) {
				return __mod__ (time.time () / 3600, 12.0);
			});},
			get onShow () {return __get__ (this, function (self) {
				self.isActive = true;
				self.animate = window.setTimeout (self.draw (), 50);
			});},
			get onHide () {return __get__ (this, function (self) {
				self.isActive = false;
				window.clearTimeout (self.animate);
			});},
			get draw () {return __get__ (this, function (self) {
				self.ctx = document.getElementById ('clock').getContext ('2d');
				self.ctx.globalCompositeOperation = 'destination-over';
				self.ctx.clearRect (0, 0, 300, 300);
				self.ctx.save ();
				self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
				self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
				self.ctx.translate (self.width / 2, self.height / 2);
				var secs = self.getTimeSeconds ();
				var mins = self.getTimeMinutes () + secs / 60.0;
				var hours = self.getTimeHours () + mins / 60.0;
				self.ctx.save ();
				self.ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
				self.ctx.rotate (((2 * math.pi) / 60) * secs + math.pi);
				self.ctx.fillRect (-(1), -(self.width * 0.04), 2, self.width * 0.38);
				self.ctx.restore ();
				self.ctx.save ();
				self.ctx.rotate (((2 * math.pi) / 60) * mins + math.pi);
				self.ctx.fillRect (-(1), -(1), 3, self.width * 0.35);
				self.ctx.restore ();
				self.ctx.save ();
				self.ctx.rotate (((2 * math.pi) / 12) * hours + math.pi);
				self.ctx.fillRect (-(2), -(2), 4, self.width * 0.2);
				self.ctx.restore ();
				self.ctx.restore ();
				self.ctx.drawImage (self.clock, 0, 0, self.width, self.height);
				self.animate = window.setTimeout (self.draw, 50);
			});}
		});
		var clock = Clock ();
		__pragma__ ('<use>' +
			'math' +
			'time' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Clock = Clock;
			__all__.__name__ = __name__;
			__all__.clock = clock;
		__pragma__ ('</all>')
	}) ();
