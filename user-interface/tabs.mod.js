	(function () {
		var __name__ = '__main__';
		var openLang = function (evt, langName) {
			var tabcontent = document.getElementsByClassName ('tabcontent');
			for (var i = 0; i < tabcontent.length; i++) {
				tabcontent [i].style.display = 'none';
			}
			var tablinks = document.getElementsByClassName ('tablinks');
			for (var i = 0; i < tablinks.length; i++) {
				tablinks [i].className = tablinks [i].className.py_replace (' active', '');
			}
			document.getElementById (langName).style.display = 'block';
			evt.currentTarget.className += ' active';
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.openLang = openLang;
		__pragma__ ('</all>')
	}) ();
