	(function () {
		var __name__ = '__main__';
		var alert_standard = function () {
			var testMessage = 'TestMessage';
			alert (testMessage);
		};
		var alert_text = function (text) {
			alert (text);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.alert_standard = alert_standard;
			__all__.alert_text = alert_text;
		__pragma__ ('</all>')
	}) ();
