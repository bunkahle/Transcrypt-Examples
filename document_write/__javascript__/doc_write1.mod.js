	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.header = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>DocWrite</title>\n  </head>\n  <body>\n';
				self.footer = '\n  </body>\n</html>';
			});},
			get write () {return __get__ (this, function (self) {
				document.open ();
				document.write (self.header);
				document.write ('Hello World!');
				document.write ('Have a nice day!');
				document.write ('<p>Note that writeln() adds a new line after each statement:</p>');
				document.writeln ('Hello World!<br>');
				document.writeln ('Have a nice day!<br>');
				document.writeln ('Check the sourcecode for line breaks! (Right mousebutton on the html document and click view sourcecode<br><br>');
				document.writeln (Date ());
				document.write ('    <button onclick="window.history.back();">Go Back</button>');
				document.write (self.footer);
				document.close ();
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
