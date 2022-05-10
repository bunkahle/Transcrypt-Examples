	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.line = document.createElementNS (self.svgNS, 'line');
				self.svg.setAttribute ('height', 210);
				self.svg.setAttribute ('width', 500);
				self.line.setAttribute ('x1', 0);
				self.line.setAttribute ('y1', 0);
				self.line.setAttribute ('x2', 200);
				self.line.setAttribute ('y2', 50);
				self.line.setAttribute ('style', 'stroke:rgb(255,0,0);stroke-width:2');
				self.svg.appendChild (self.line);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
