	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.ellipse = document.createElementNS (self.svgNS, 'ellipse');
				self.svg.setAttribute ('height', 300);
				self.svg.setAttribute ('width', 500);
				self.ellipse.setAttribute ('cx', 200);
				self.ellipse.setAttribute ('cy', 80);
				self.ellipse.setAttribute ('rx', 100);
				self.ellipse.setAttribute ('ry', 50);
				self.ellipse.setAttribute ('fill', 'yellow');
				self.ellipse.setAttribute ('stroke', 'purple');
				self.ellipse.setAttribute ('stroke-width', 5);
				self.svg.appendChild (self.ellipse);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
