	(function () {
		var __name__ = '__main__';
		var read = function () {
			var x = document.getElementById ('main');
			var y = x.getElementsByTagName ('p');
			var __iterable0__ = y;
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var i = __iterable0__ [__index0__];
				document.getElementById ('demo').innerHTML = (document.getElementById ('demo').innerHTML + '<br>\n') + i.innerHTML;
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.read = read;
		__pragma__ ('</all>')
	}) ();
