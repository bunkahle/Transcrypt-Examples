	(function () {
		var __name__ = '__main__';
		var install_hide_show = function () {
			$ ('#hide').click ((function __lambda__ () {
				return $ ('p').hide ();
			}));
			$ ('#show').click ((function __lambda__ () {
				return $ ('p').show ();
			}));
		};
		$ (document).ready (install_hide_show);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.install_hide_show = install_hide_show;
		__pragma__ ('</all>')
	}) ();
