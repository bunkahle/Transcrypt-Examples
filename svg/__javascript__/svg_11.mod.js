	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.svg.setAttribute ('height', 200);
				self.svg.setAttribute ('width', 300);
				self.r1 = self.draw_graphic ('rect', 'width:100%; height:100%; fill:red');
				self.svg.appendChild (self.r1);
				self.c1 = self.draw_graphic ('circle', 'cx:150; cy:100; r:80; fill:green');
				self.svg.appendChild (self.c1);
				self.t1 = self.draw_graphic ('text', 'x:150; y:125; font-size:60; text-anchor:middle; fill:white');
				self.t1.textContent = 'SVG';
				self.svg.appendChild (self.t1);
				document.body.appendChild (self.svg);
			});},
			get draw_graphic () {return __get__ (this, function (self, kind, variablen) {
				var graphic = document.createElementNS (self.svgNS, kind);
				var variablen = variablen.py_replace (' ', '');
				var elems = variablen.py_split (';');
				var lelem = len (elems);
				for (var i = 0; i < lelem; i++) {
					var elem = elems [i];
					console.log (elem);
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
