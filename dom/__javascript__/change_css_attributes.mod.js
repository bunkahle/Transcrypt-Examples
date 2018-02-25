	(function () {
		var __name__ = '__main__';
		var window = document;
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.text = 'Hello, DOM!';
				self.size = 12;
				self.mult = 1;
			});},
			get insert () {return __get__ (this, function (self) {
				document.querySelector ('output').innerText = self.text;
			});},
			get pressed () {return __get__ (this, function (self) {
				self.size = self.size + 2 * self.mult;
				document.getElementById ('textblock').style.fontSize = str (self.size) + 'px';
				if (self.size == 36) {
					self.mult = -(1);
				}
				else if (self.size == 10) {
					self.mult = 1;
				}
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
			__all__.window = window;
		__pragma__ ('</all>')
	}) ();
