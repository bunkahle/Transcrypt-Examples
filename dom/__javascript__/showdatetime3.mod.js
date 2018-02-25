	(function () {
		var __name__ = '__main__';
		var text = 'It is ';
		var date_time = Date ();
		var elements = date_time.split (' ');
		var time = elements [4].split (':');
		var hour = parseInt (time [0]);
		text += elements [4] + '<br>';
		if ((6 < hour && hour < 11)) {
			text += 'I would say: Good morning';
		}
		else if ((11 <= hour && hour < 14)) {
			text += 'Enjoy your lunch';
		}
		else if ((14 <= hour && hour < 17)) {
			text += 'Good afternoon';
		}
		else if ((17 <= hour && hour < 22)) {
			text += 'Good evening';
		}
		else {
			text += 'Good night';
		}
		document.getElementById ('greet').innerHTML = text;
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.date_time = date_time;
			__all__.elements = elements;
			__all__.hour = hour;
			__all__.text = text;
			__all__.time = time;
		__pragma__ ('</all>')
	}) ();
