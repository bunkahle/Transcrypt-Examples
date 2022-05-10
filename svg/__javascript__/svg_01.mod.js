	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.rect = document.createElementNS (self.svgNS, 'rect');
				self.rect.setAttribute ('x', 5);
				self.rect.setAttribute ('y', 5);
				self.rect.setAttribute ('width', 300);
				self.rect.setAttribute ('height', 300);
				self.rect.setAttribute ('fill', '#00ff00');
				self.svg.appendChild (self.rect);
				document.body.appendChild (self.svg);
				self.b = document.createElement ('br');
				document.body.appendChild (self.b);
				self.h = document.createElement ('a');
				self.t = document.createTextNode ('Hello World');
				self.h.setAttributeNS (null, 'href', 'http://www.google.com');
				self.h.appendChild (self.t);
				document.body.appendChild (self.h);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
