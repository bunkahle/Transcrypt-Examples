	(function () {
		var __name__ = '__main__';
		var show_height = function () {
			alert ('Window height is: ' + window.innerHeight);
		};
		var say_hi = function () {
			alert ('hi');
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.say_hi = say_hi;
			__all__.show_height = show_height;
		__pragma__ ('</all>')
	}) ();
