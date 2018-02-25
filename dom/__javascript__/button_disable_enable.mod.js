	(function () {
		var __name__ = '__main__';
		var disable_button = function (butt) {
			document.getElementById (butt).disabled = true;
		};
		var enable_button = function (butt) {
			document.getElementById (butt).disabled = false;
		};
		var button_alert = function () {
			alert ('Button can be clicked again.');
		};
		var change_button = function () {
			if (document.getElementById ('myBtn').disabled) {
				enable_button ('myBtn');
			}
			else {
				disable_button ('myBtn');
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.button_alert = button_alert;
			__all__.change_button = change_button;
			__all__.disable_button = disable_button;
			__all__.enable_button = enable_button;
		__pragma__ ('</all>')
	}) ();
