	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.text = 'Hello, DOM!';
				self.text2 = 'Hello, User!';
			});},
			get insert () {return __get__ (this, function (self) {
				document.querySelector ('output').innerText = self.text;
			});},
			get change () {return __get__ (this, function (self) {
				if (document.querySelector ('output').innerText == self.text) {
					document.querySelector ('output').innerText = self.text2;
				}
				else {
					document.querySelector ('output').innerText = self.text;
				}
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
