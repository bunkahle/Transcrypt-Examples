	(function () {
		var __name__ = '__main__';
		var draw = function () {
			for (var i = 0; i < document.images.length; i++) {
				if (document.images [i].getAttribute ('id') != 'frame') {
					var canvas = document.createElement ('canvas');
					canvas.setAttribute ('width', 132);
					canvas.setAttribute ('height', 150);
					document.images [i].parentNode.insertBefore (canvas, document.images [i]);
					var ctx = canvas.getContext ('2d');
					ctx.drawImage (document.images [i], 15, 20);
					ctx.drawImage (document.getElementById ('frame'), 0, 0);
				}
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.draw = draw;
		__pragma__ ('</all>')
	}) ();
