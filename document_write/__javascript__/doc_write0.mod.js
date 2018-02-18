	(function () {
		var __name__ = '__main__';
		var write_text = function () {
			var html_text = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>DocWrite</title>\n  </head>\n  <body>\n  <h1>Header</h1>\n  <p>any information in the body part</p>\n  <button onclick="window.history.back();">Go Back</button>\n  </body>\n</html>';
			document.open ();
			document.write (html_text);
			document.close ();
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.write_text = write_text;
		__pragma__ ('</all>')
	}) ();
