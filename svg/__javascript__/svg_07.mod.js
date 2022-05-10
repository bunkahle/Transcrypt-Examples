	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.path = document.createElementNS (self.svgNS, 'path');
				self.svg.setAttribute ('height', 210);
				self.svg.setAttribute ('width', 400);
				self.path.setAttribute ('d', 'M150 0 L75 200 L225 200 Z');
				self.svg.appendChild (self.path);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
