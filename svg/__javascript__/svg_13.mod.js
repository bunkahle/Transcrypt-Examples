	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.svg.setAttribute ('height', 100);
				self.svg.setAttribute ('width', 100);
				self.p1 = document.createElementNS (self.svgNS, 'path');
				self.p1.setAttribute ('d', 'M27,16c0-7,9-13,24-13c15,0,23,6,23,13l0,22c0,7-5,12-11,12l-24,0c-8,0-14,6-14,15l0,10l-9,0c-8,0-13-9-13-24c0-14,5-23,13-23l35,0l0-3l-24,0l0-9l0,0z M88,50v1');
				self.p1.setAttribute ('fill', '#3879B0');
				self.svg.appendChild (self.p1);
				self.p2 = document.createElementNS (self.svgNS, 'path');
				self.p2.setAttribute ('d', 'M74,87c0,7-8,13-23,13c-15,0-24-6-24-13l0-22c0-7,6-12,12-12l24,0c8,0,14-7,14-15l0-10l9,0c7,0,13,9,13,23c0,15-6,24-13,24l-35,0l0,3l23,0l0,9l0,0z M140,50v1');
				self.p2.setAttribute ('fill', '#FFDC4E');
				self.svg.appendChild (self.p2);
				self.c1 = self.draw_graphic ('circle', 'cx=64; cy=88; r=4; fill=#FFF');
				self.svg.appendChild (self.c1);
				self.c2 = self.draw_graphic ('circle', 'cx=37; cy=15; r=4; fill=#FFF');
				self.svg.appendChild (self.c2);
				self.t1 = self.draw_graphic ('text', 'x:45; y:90; font-size:20; family-font:Verdana; font-weight:bold; text-anchor:middle; fill:black');
				self.t1.textContent = 'Python';
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
					if (__in__ (':', elem)) {
						var __left0__ = elem.py_split (':');
						var key = __left0__ [0];
						var value = __left0__ [1];
						graphic.setAttribute (key, value);
					}
					else if (__in__ ('=', elem)) {
						var __left0__ = elem.py_split ('=');
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
