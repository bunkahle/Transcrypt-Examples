	(function () {
		var __name__ = '__main__';
		var insert = function () {
			var text = 'The text from the intro paragraph is ';
			$ ('#demo').html (text + $ ('#intro').html ());
		};
		$ (document).ready (insert);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.insert = insert;
		__pragma__ ('</all>')
	}) ();
