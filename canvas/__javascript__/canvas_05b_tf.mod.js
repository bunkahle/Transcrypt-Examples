	(function () {
		var __name__ = '__main__';
		var tf =  __init__ (__world__.TranscryptFrame);
		var RotateImage = __class__ ('RotateImage', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, canvas_id, src) {
				self.img = tf.CanvasImage (src, canvas_id, 200, 200);
				self.turning = true;
				self.reverse = 1;
				print ('Attributes of self.img', dir (self.img));
				self.animate = setInterval (self.turn, 50);
			});},
			get turn () {return __get__ (this, function (self) {
				self.img.rotate (1 * self.reverse);
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
		var graphic = RotateImage ('graphics', 'smiley.jpg');
		__pragma__ ('<use>' +
			'TranscryptFrame' +
		'</use>')
		__pragma__ ('<all>')
			__all__.RotateImage = RotateImage;
			__all__.__name__ = __name__;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
