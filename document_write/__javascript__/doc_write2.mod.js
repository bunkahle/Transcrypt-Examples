	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.result = '    The square root is: ';
				self.header = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>DocWrite</title>\n  </head>\n  <body>\n';
				self.footer = '\n  </body>\n</html>';
			});},
			get py_isNaN () {return __get__ (this, function (self, x) {
				try {
					var a = int (x);
					return false;
				}
				catch (__except0__) {
					return true;
				}
			});},
			get sqr () {return __get__ (this, function (self, x) {
				return math.sqrt (x);
			});},
			get squareroot () {return __get__ (this, function (self) {
				document.open ();
				document.write (self.header);
				var number = prompt ('Please enter a number', '');
				if (self.py_isNaN (number)) {
					alert ('This is not a number!');
				}
				else {
					var result = self.sqr (float (number));
					document.write ((self.result + str (result)) + '<br>\n');
				}
				document.write ('    <button onclick="window.history.back();">Go Back</button>');
				document.write (self.footer);
				document.close ();
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<use>' +
			'math' +
		'</use>')
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
