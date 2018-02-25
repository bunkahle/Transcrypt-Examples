	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.forms = dict ({});
			});},
			get getForms () {return __get__ (this, function (self) {
				var x = document.forms ['frm1'];
				for (var i = 0; i < len (x); i++) {
					self.forms [x.elements [i].getAttribute ('name')] = x.elements [i].value;
				}
			});},
			get displayFormValues () {return __get__ (this, function (self) {
				self.getForms ();
				var text = 'Read directly from the form:<br>';
				var __iterable0__ = self.forms.py_items ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var key = __left0__ [0];
					var value = __left0__ [1];
					text += ((key + ': ') + value) + '<br>\n';
				}
				document.getElementById ('demo').innerHTML = text;
			});},
			get getParams () {return __get__ (this, function (self) {
				var e = window.location.search.__getslice__ (1, null, 1).py_split ('&');
				var text = 'Read from url line:<br>';
				for (var i = 0; i < len (e); i++) {
					text += ((e [i].py_split ('=') [0] + ' => ') + e [i].py_split ('=') [1]) + '<br>\n';
				}
				document.getElementById ('submitted').innerHTML = text;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
