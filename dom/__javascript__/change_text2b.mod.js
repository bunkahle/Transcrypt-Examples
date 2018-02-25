	(function () {
		var __name__ = '__main__';
		var insert = function () {
			var myElement = document.getElementById ('intro');
			document.getElementById ('demo').innerHTML = 'The text from the intro paragraph is ' + myElement.innerHTML;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.insert = insert;
		__pragma__ ('</all>')
	}) ();
