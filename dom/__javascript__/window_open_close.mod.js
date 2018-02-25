	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.myWindow = false;
			});},
			get openWin () {return __get__ (this, function (self) {
				self.myWindow = window.open ('', 'myWindow', 'width=400, height=200');
			});},
			get closeWin () {return __get__ (this, function (self) {
				if (self.myWindow) {
					self.myWindow.close ();
				}
			});},
			get checkWin () {return __get__ (this, function (self) {
				if (!(self.myWindow)) {
					document.getElementById ('msg').innerHTML = "'myWindow' has never been opened!";
				}
				else if (self.myWindow.closed) {
					document.getElementById ('msg').innerHTML = "'myWindow' has been closed!";
				}
				else {
					document.getElementById ('msg').innerHTML = "'myWindow' has not been closed!";
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
