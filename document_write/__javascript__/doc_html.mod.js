	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.header = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>Document Frame</title>\n    <script src="__javascript__/doc_html.js"></script>\n  </head>\n  <body bgcolor="#E6E6FA">\n    <table id="outertable"><tr><td>\n      <table><tr><td><h2 id="id1">Document Frame for editing html:</h2></td>\n        <td>&nbsp;&nbsp;&nbsp;<button id="changebutton" type="button" onclick="doc_html.testSystem.change_doc()">Try to run the html/code!</button> &nbsp;&nbsp;&nbsp;<button onclick="window.history.back();">Go Back</button></td></tr>\n      </table>\n      <textarea rows=40 cols="80" autocomplete="off" id="textareaCode" wrap="logical" spellcheck="false">\n';
				self.startdoc = '\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <script src="__javascript__/doc_html.js"></script>\n    <title>Titel</title>\n  </head>\n  <body>\n    <h1>Write into html document</h1>\n    <p id="explain">To proceed click the button below</p>\n    <p>\n    <div id ="testmessage">...</div><br>\n    <button id="click" onclick="alert(\'hello\')">Say hello</button>\n    </p>\n  </body>\n</html>\n        ';
				self.footer = '      \n      </textarea>\n      </td>\n      <td>\n        <div id="playground"><h2 align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML-Playground</h2></div>\n      </td></tr>\n    </table>\n  </body>\n</html> ';
			});},
			get change_doc () {return __get__ (this, function (self) {
				var sliced_html = document.getElementById ('textareaCode').value;
				var sliced_html = sliced_html.py_replace ('</textarea>', '&lt;/textarea&gt;');
				window.location = 'about:blank';
				document.write (self.header);
				document.write (sliced_html);
				var footer = self.footer.__getslice__ (0, null, 1);
				var sliced_html = sliced_html.py_replace ('&lt;', '<').py_replace ('&gt;', '>');
				var tag2 = '<div id="playground">';
				var f1 = footer.lower ().find (tag2) + len (tag2);
				var f2 = footer.lower ().find ('</div>');
				document.write ((footer.__getslice__ (0, f1, 1) + sliced_html) + footer.__getslice__ (f2, null, 1));
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
