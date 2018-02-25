	(function () {
		var __name__ = '__main__';
		var text = 'Hello, DOM!';
		document.getElementById ('output').innerText = text;
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.text = text;
		__pragma__ ('</all>')
	}) ();
