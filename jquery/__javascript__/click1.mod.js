	(function () {
		var __name__ = '__main__';
		var clicked = function () {
			print ('hallo');
			print (dir ($ ('#test')));
			$ ('#test').hide ();
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.clicked = clicked;
		__pragma__ ('</all>')
	}) ();
