	(function () {
		var __name__ = '__main__';
		var display = function (element) {
			var att_len = document.getElementById (element).attributes.length;
			var x = ((('Attribute length of element ' + element) + ': ') + str (att_len)) + ' and their Values =>';
			for (var i = 0; i < att_len; i++) {
				x += ' ' + document.getElementById (element).attributes [i].localName;
				x += '=' + document.getElementById (element).attributes [i].value;
			}
			document.getElementById ('test').innerHTML = x;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.display = display;
		__pragma__ ('</all>')
	}) ();
