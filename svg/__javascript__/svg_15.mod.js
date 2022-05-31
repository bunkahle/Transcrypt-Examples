	(function () {
		var svg_def = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">\n  <circle cx="50" cy="50" r="48" fill="none" stroke="#000"/>\n  <path d="M50,2a48,48 0 1 1 0,96a24 24 0 1 1 0-48a24 24 0 1 0 0-48"/>\n  <circle cx="50" cy="26" r="6"/>\n  <circle cx="50" cy="74" r="6" fill="#FFF"/>\n</svg>';
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				document.getElementById ('canvas').innerHTML = svg_def;
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
			__all__.svg_def = svg_def;
		__pragma__ ('</all>')
	}) ();
