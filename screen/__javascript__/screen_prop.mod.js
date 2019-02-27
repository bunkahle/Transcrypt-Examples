	(function () {
		var info = function () {
			var x = ('Available Height: ' + screen.availHeight) + 'px<br>\n';
			var x = ((x + 'Available Width: ') + screen.availWidth) + 'px<br>\n';
			var x = ((x + 'Color Depth: ') + screen.colorDepth) + '<br>\n';
			var x = ((x + 'Total Height: ') + screen.height) + 'px<br>\n';
			var x = ((x + 'Total Width: ') + screen.width) + 'px<br>\n';
			var x = ((x + 'Color Resolution: ') + screen.pixelDepth) + '<br>\n';
			document.getElementById ('info').innerHTML = x;
		};
		__pragma__ ('<all>')
			__all__.info = info;
		__pragma__ ('</all>')
	}) ();
