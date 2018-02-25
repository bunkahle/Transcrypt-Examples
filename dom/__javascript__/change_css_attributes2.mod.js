	(function () {
		var __name__ = '__main__';
		var change_css = function () {
			if (document.getElementById ('p2').style.fontFamily == 'Arial') {
				document.getElementById ('p2').style.color = 'black';
				document.getElementById ('p2').style.fontFamily = 'Times';
				document.getElementById ('p2').style.fontSize = 'smaller';
			}
			else {
				document.getElementById ('p2').style.color = 'blue';
				document.getElementById ('p2').style.fontFamily = 'Arial';
				document.getElementById ('p2').style.fontSize = 'larger';
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.change_css = change_css;
		__pragma__ ('</all>')
	}) ();
