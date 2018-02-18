	(function () {
		var math = {};
		var __name__ = '__main__';
		__nest__ (math, '', __init__ (__world__.math));
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.askready = 'Are you ready? Webpage will take a little time to load...';
				self.header = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>DocWrite</title>\n  </head>\n  <body>\n';
				self.footer = '\n  </body>\n</html>';
			});},
			get fibonacci () {return __get__ (this, function (self, n) {
				if (n == 0) {
					return 0;
				}
				else if (n == 1) {
					return 1;
				}
				else {
					return self.fibonacci (n - 1) + self.fibonacci (n - 2);
				}
			});},
			get looping () {return __get__ (this, function (self) {
				confirm (self.askready);
				document.open ();
				document.write (self.header);
				for (var i = 0; i < 32; i++) {
					var fib = self.fibonacci (i);
					var text = ((str (fib) + ' = ') + str (i)) + '<br>\n';
					document.write ('    ' + text);
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
