	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.on = false;
			});},
			get button_alert () {return __get__ (this, function (self) {
				var answer = prompt ('Do you want to go to the Transcrypt site?', 'Y');
				if (answer == 'Y' || answer == 'y') {
					location.href = 'https://www.transcrypt.org/';
				}
			});},
			get change_button () {return __get__ (this, function (self) {
				if (!(self.on)) {
					document.getElementById ('bulb').src = 'pic_bulbon.gif';
				}
				else {
					document.getElementById ('bulb').src = 'pic_bulboff.gif';
				}
				self.on = !(self.on);
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
