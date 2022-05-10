	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.polyline = document.createElementNS (self.svgNS, 'polyline');
				self.svg.setAttribute ('height', 200);
				self.svg.setAttribute ('width', 500);
				self.polyline.setAttribute ('points', '20, 20 40,25 60,40 80,120 120,140 200,180');
				self.polyline.setAttribute ('style', 'fill:none;stroke:black;stroke-width:3');
				self.svg.appendChild (self.polyline);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
