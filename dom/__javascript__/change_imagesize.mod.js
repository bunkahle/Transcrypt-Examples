	(function () {
		var __name__ = '__main__';
		var button_alert = function () {
			var answer = prompt ('Do you want to go to the Transcrypt site?', 'Y');
			if (answer == 'Y' || answer == 'y') {
				location.href = 'https://www.transcrypt.org/';
			}
		};
		var change_button = function () {
			var butt = document.getElementById ('myBtn');
			if (__in__ ('200', butt.innerHTML)) {
				butt.innerHTML = '<img src="https://www.transcrypt.org/illustrations/monk_transcribing.png" width="100" height="100">';
			}
			else {
				butt.innerHTML = '<img src="https://www.transcrypt.org/illustrations/monk_transcribing.png" width="200" height="200">';
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.button_alert = button_alert;
			__all__.change_button = change_button;
		__pragma__ ('</all>')
	}) ();
