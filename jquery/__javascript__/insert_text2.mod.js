	(function () {
		var __name__ = '__main__';
		var insert = function () {
			var text = 'Hello, DOM!';
			$ ('#output').text (text);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.insert = insert;
		__pragma__ ('</all>')
	}) ();
