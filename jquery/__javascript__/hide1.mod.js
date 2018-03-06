	(function () {
		var __name__ = '__main__';
		var showagain = function () {
			$ ('#test').show ();
			$ ('#dclick').show ();
		};
		var install_hide = function () {
			$ ('#test').click ((function __lambda__ () {
				return $ ('#test').hide ();
			}));
			$ ('#dclick').dblclick ((function __lambda__ () {
				return $ ('#dclick').hide ();
			}));
			$ ('#show').click (showagain);
		};
		$ (document).ready (install_hide);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.install_hide = install_hide;
			__all__.showagain = showagain;
		__pragma__ ('</all>')
	}) ();
