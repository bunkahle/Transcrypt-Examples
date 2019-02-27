	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.pars = dict ({});
			});},
			get getParams () {return __get__ (this, function (self) {
				var e = window.location.search.__getslice__ (1, null, 1).py_split ('&');
				for (var i = 0; i < len (e); i++) {
					var pair = e [i].py_split ('=');
					console.log ((pair [0] + ' => ') + pair [1]);
					self.pars [pair [0]] = pair [1];
					if (pair [1] == 'undefined' || pair [1] === null) {
						self.pars = dict ({});
					}
				}
				self.showParams ();
			});},
			get showParams () {return __get__ (this, function (self) {
				if (!(self.pars)) {
					var text = 'Parameter dictionary is empty';
				}
				else {
					var text = 'Parameter:<br>\n';
					var __iterable0__ = self.pars.py_items ();
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var __left0__ = __iterable0__ [__index0__];
						var key = __left0__ [0];
						var value = __left0__ [1];
						var text = (((text + key) + ' = ') + value) + '<br>\n';
					}
				}
				document.getElementById ('Parameter').innerHTML = text;
			});},
			get getInput () {return __get__ (this, function (self) {
				self.paramtext = document.getElementById ('input-text').value;
				self.processInput ();
			});},
			get processInput () {return __get__ (this, function (self) {
				if (self.paramtext [0] != '?') {
					self.paramtext = '?' + self.paramtext;
				}
				window.location.search = self.paramtext;
				self.getParams ();
			});},
			get checkInput () {return __get__ (this, function (self, event) {
				if (event.keyCode == 13 || event.which == 13) {
					self.paramtext = document.getElementById ('input-text').value;
					self.processInput ();
				}
				else {
					self.paramtext = document.getElementById ('input-text').value + chr (event.keyCode);
					document.getElementById ('Input').innerHTML = self.paramtext;
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
