	(function () {
		var __name__ = '__main__';
		var install_hide = function () {
			$ ('p').click ((function __lambda__ () {
				return $ (this).hide ();
			}));
		};
		$ (document).ready (install_hide);
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.install_hide = install_hide;
		__pragma__ ('</all>')
	}) ();
