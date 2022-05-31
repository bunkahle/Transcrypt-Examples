/**************************************
* Jonas Raoni Soares Silva
* http://www.joninhas.ath.cx
**************************************/

Canvas = function(){ //v1.0
	var o = this;
	(o.penPos = {x: 0, y: 0}, o.pixelSize = 10, o.pen = {style: "solid",
		size: 1, color: "#000"}, o.brush = {style: "solid", color: "#000"});
};
with({p: Canvas.prototype}){
	p.pixel = function(x, y, color) {
		var o = this, s = document.body.appendChild(document.createElement("div")).style;
		return (s.position = "absolute", s.width = (o.pen.size * o.pixelSize) + "px",
			s.height = (o.pen.size * o.pixelSize) + "px", s.fontSize = "1px",
			s.left = (x * o.pixelSize) + "px", s.top = (y * o.pixelSize) + "px",
			s.backgroundColor = color || o.pen.color, o);
	};
	p.line = function(x1, y1, x2, y2){
		if(Math.abs(x1 - x2) < Math.abs(y1 - y2))
			for(y = Math.min(y1, y2) - 1, x = Math.max(y1, y2); ++y <= x;
				this.pixel((y * (x1 - x2) - x1 * y2 + y1 * x2) / (y1 - y2), y));
		else
			for(x = Math.min(x1, x2) - 1, y = Math.max(x1, x2); ++x <= y;
				this.pixel(x, (x * (y1 - y2) - y1 * x2 + x1 * y2) / (x1 - x2)));
		return this;
	};
	p.arc = function(x, y, raio, startAngle, degrees) {
		for(degrees += startAngle; degrees --> startAngle;
			this.pixel(Math.cos(degrees * Math.PI / 180) * raio + x,
				Math.sin(degrees * Math.PI / 180) * raio + y)); return this;
	};
	p.rectangle = function(x, y, width, height, rotation){
		return this.moveTo(x, y).lineBy(0, height).lineBy(width, 0).lineBy(0, -height).lineBy(-width, 0);
	};
	p.moveTo = function(x, y){var o = this; return (o.penPos.x = x, o.penPos.y = y, o);};
	p.moveBy = function(x, y){var o = this; return o.moveTo(o.penPos.x + x, o.penPos.y + y);};
	p.lineTo = function(x, y){var o = this; return o.line(o.penPos.x, o.penPos.y, x, y).moveTo(x, y);};
	p.lineBy = function(x, y){var o = this; return o.lineTo(o.penPos.x + x, o.penPos.y + y);};
	p.curveTo = function(cx, cy, x, y){};
	p.polyBezier = function(points){};
	p.path = function(points){};
}