	(function () {
		var __name__ = '__main__';
		var ProgressBar = __class__ ('ProgressBar', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.stop = false;
				self.width = 1;
			});},
			get frame () {return __get__ (this, function (self) {
				if (self.width >= 100 || self.stop) {
					clearInterval (self.id);
				}
				else {
					self.width++;
					self.elem.style.width = self.width + '%';
					document.getElementById ('label').innerHTML = self.width * 1 + '%';
				}
			});},
			get move () {return __get__ (this, function (self) {
				var messages = list (['Start Progress', 'Stop Progress']);
				var label = document.querySelector ('#start').innerHTML;
				self.elem = document.getElementById ('myBar');
				if (label == messages [0]) {
					document.querySelector ('#start').innerHTML = messages [1];
					self.stop = false;
					self.id = setInterval (self.frame, 100);
				}
				else {
					document.querySelector ('#start').innerHTML = messages [0];
					self.stop = true;
					clearInterval (self.id);
				}
			});}
		});
		var pb = ProgressBar ();
		__pragma__ ('<all>')
			__all__.ProgressBar = ProgressBar;
			__all__.__name__ = __name__;
			__all__.pb = pb;
		__pragma__ ('</all>')
	}) ();
