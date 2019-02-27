	(function () {
		var __name__ = '__main__';
		var getParams = function () {
			var e = window.location.search.__getslice__ (1, null, 1).py_split ('&');
			for (var i = 0; i < len (e); i++) {
				console.log ((e [i].py_split ('=') [0] + ' => ') + e [i].py_split ('=') [1]);
			}
			console.log (window.location.hash.__getslice__ (1, null, 1));
			document.getElementById ('params').innerHTML = e;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.getParams = getParams;
		__pragma__ ('</all>')
	}) ();
