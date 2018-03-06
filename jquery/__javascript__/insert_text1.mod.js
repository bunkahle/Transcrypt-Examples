	(function () {
		var __name__ = '__main__';
		var action = function () {
			var text = 'Hello, DOM!';
			$ ('#output').text (text);
		};
		$ (document).ready (action);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.action = action;
		__pragma__ ('</all>')
	}) ();
