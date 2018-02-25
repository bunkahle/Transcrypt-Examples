	(function () {
		var __name__ = '__main__';
		var getfocus = function () {
			document.getElementById ('myAnchor').focus ();
		};
		var losefocus = function () {
			document.getElementById ('myAnchor').blur ();
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.getfocus = getfocus;
			__all__.losefocus = losefocus;
		__pragma__ ('</all>')
	}) ();
