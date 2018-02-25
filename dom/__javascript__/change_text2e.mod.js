	(function () {
		var __name__ = '__main__';
		var change_text = function (sel, color) {
			console.log ((sel + ':') + color);
			console.log ((':' + document.querySelector (sel).style.backgroundColor) + ':');
			if (document.querySelector (sel).style.backgroundColor == '') {
				document.querySelector (sel).style.backgroundColor = color;
			}
			else {
				document.querySelector (sel).style.backgroundColor = '';
			}
			document.getElementById ('demo').innerHTML = 'Highlighted css element: ' + sel;
		};
		var change_all_texts = function (sel, color) {
			console.log ((sel + ':') + color);
			console.log ((':' + document.querySelectorAll (sel) [0].style.backgroundColor) + ':');
			if (document.querySelectorAll (sel) [0].style.backgroundColor == '') {
				change_color (sel, color);
			}
			else {
				change_color (sel, '');
			}
			document.getElementById ('demo').innerHTML = 'Highlighted css element: ' + sel;
		};
		var change_color = function (sel, color) {
			var elements = document.querySelectorAll (sel);
			var __iterable0__ = elements;
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var e = __iterable0__ [__index0__];
				e.style.backgroundColor = color;
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.change_all_texts = change_all_texts;
			__all__.change_color = change_color;
			__all__.change_text = change_text;
		__pragma__ ('</all>')
	}) ();
