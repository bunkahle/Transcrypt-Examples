	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.polygon = document.createElementNS (self.svgNS, 'polygon');
				self.svg.setAttribute ('height', 280);
				self.svg.setAttribute ('width', 500);
				self.polygon.setAttribute ('points', '220,10 300,210 170,250 123,234');
				self.polygon.setAttribute ('style', 'fill:lime;stroke:purple;stroke-width:3');
				self.svg.appendChild (self.polygon);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
