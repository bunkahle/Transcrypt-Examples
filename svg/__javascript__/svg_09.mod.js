	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.r1 = self.draw_graphic ('rect', 'x:10; y:10; width:100; height:20; fill:#ff00ff');
				self.svg.appendChild (self.r1);
				self.r2 = self.draw_graphic ('rect', 'x:20; y:40; width:100; height:40; rx:15; ry:15; fill:pink; stroke:purple; strokeWidth:7');
				self.svg.appendChild (self.r2);
				document.body.appendChild (self.svg);
			});},
			get draw_graphic () {return __get__ (this, function (self, kind, variablen) {
				var graphic = document.createElementNS (self.svgNS, kind);
				var variablen = variablen.py_replace (' ', '');
				var elems = variablen.py_split (';');
				var lelem = len (elems);
				for (var i = 0; i < lelem; i++) {
					var elem = elems [i];
					if (__in__ (':', elem)) {
						var __left0__ = elem.py_split (':');
						var key = __left0__ [0];
						var value = __left0__ [1];
						graphic.setAttribute (key, value);
					}
				}
				return graphic;
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
