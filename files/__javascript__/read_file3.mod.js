	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.textType = 'text.*';
			});},
			get openFile () {return __get__ (this, function (self, event) {
				self.inputvar = event.target;
				self.freader = new FileReader ();
				self.freader.onload = self.processInput;
				self.freader.readAsText (self.inputvar.files [0]);
			});},
			get processInput () {return __get__ (this, function (self) {
				self.text = self.freader.result;
				document.getElementById ('fileDisplayArea').innerText = self.text;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
