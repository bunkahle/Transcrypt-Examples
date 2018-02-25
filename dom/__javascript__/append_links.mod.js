	(function () {
		var random = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		var append_link = function () {
			var new_links = list (['https://github.com/bunkahle/Transcrypt-Examples', 'https://www.transcrypt.org/', 'https://www.javascript.com/', 'https://www.w3schools.com/js/']);
			var new_links_desc = list (['Transcrypt-Examples', 'Transcrypt Website', 'Javascript', 'Javascript Tutorials']);
			var nl = dict (zip (new_links_desc, new_links));
			var element = document.createElement ('A');
			var rnd = random.randint (0, len (new_links) - 1);
			var t = document.createTextNode (new_links_desc [rnd]);
			element.setAttribute ('href', nl [new_links_desc [rnd]]);
			element.appendChild (t);
			document.body.appendChild (element);
			var bre = document.createElement ('BR');
			document.body.appendChild (bre);
		};
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.append_link = append_link;
		__pragma__ ('</all>')
	}) ();
