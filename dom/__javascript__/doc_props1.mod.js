	(function () {
		var __name__ = '__main__';
		var active_element = function () {
			var x = (document.activeElement.tagName + ', ') + document.activeElement.id;
			document.getElementById ('demo').innerHTML = x;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.active_element = active_element;
		__pragma__ ('</all>')
	}) ();
