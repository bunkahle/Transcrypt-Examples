	(function () {
		var SVG = __class__ ('SVG', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg');
				self.svgNS = self.svg.namespaceURI;
				self.text = document.createElementNS (self.svgNS, 'text');
				self.svg.setAttribute ('height', 100);
				self.svg.setAttribute ('width', 200);
				self.text.setAttribute ('x', 20);
				self.text.setAttribute ('y', 35);
				self.text.setAttribute ('fill', 'red');
				self.text.setAttribute ('transform', 'rotate(30 20,40)');
				self.text.setAttribute ('font-family', 'Verdana');
				self.text.setAttribute ('font-size', 20);
				self.text.textContent = 'I love SVG';
				self.svg.appendChild (self.text);
				document.body.appendChild (self.svg);
			});}
		});
		var graphic = SVG ();
		__pragma__ ('<all>')
			__all__.SVG = SVG;
			__all__.graphic = graphic;
		__pragma__ ('</all>')
	}) ();
