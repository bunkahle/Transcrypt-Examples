	(function () {
		var __name__ = '__main__';
		var x = (function __lambda__ (a, b) {
			return a * b;
		});
		document.getElementById ('demo').innerHTML = x (4, 3);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.x = x;
		__pragma__ ('</all>')
	}) ();
