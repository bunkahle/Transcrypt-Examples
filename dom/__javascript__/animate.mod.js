	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				// pass;
			});},
			get myMove () {return __get__ (this, function (self) {
				self.elem = document.getElementById ('animate');
				self.pos = 0;
				self.id = setInterval (self.frame, 5);
			});},
			get frame () {return __get__ (this, function (self) {
				if (self.pos == 350) {
					clearInterval (self.id);
				}
				else {
					self.pos = self.pos + 1;
					self.elem.style.top = self.pos + 'px';
					self.elem.style.left = self.pos + 'px';
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
