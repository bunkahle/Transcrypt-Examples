	(function () {
		var __name__ = '__main__';
		var change_background = function () {
			document.body.style.background = 'red';
			var col = prompt ('Which background color do you like?', '');
			document.body.style.background = col;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.change_background = change_background;
		__pragma__ ('</all>')
	}) ();
