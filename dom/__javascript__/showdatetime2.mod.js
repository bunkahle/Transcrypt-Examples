	(function () {
		var __name__ = '__main__';
		var show_date_time = function () {
			var text = 'It is ';
			var date_time = Date ();
			var elements = date_time.py_split (' ');
			var time = elements [4].py_split (':');
			var hour = int (time [0]);
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
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.show_date_time = show_date_time;
		__pragma__ ('</all>')
	}) ();
