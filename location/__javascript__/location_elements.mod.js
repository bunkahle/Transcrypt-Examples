	(function () {
		var __name__ = '__main__';
		var init = function () {
			insert_hash ();
		};
		var show = function () {
			var text = 'These are the location elements:<br>';
			text += ('Sets or returns the anchor part (#) of a URL that begins with the # character as <b>location.hash</b>: ' + location.hash) + '<br>';
			text += ('Represents the hostname and port number of the URL <b>location.host</b>: ' + location.host) + '<br>';
			text += ('Represents the hostname part of the URL as <b>location.hostname</b>: ' + location.hostname) + '<br>';
			text += ('Represents the complete URL as <b>location.href</b>: ' + location.href) + '<br>';
			text += ('Returns the protocol, hostname and port number of a URL as <b>location.origin</b>: ' + location.origin) + '<br>';
			text += ('Represents the pathname part of the URL as <b>location.pathname</b>: ' + location.pathname) + '<br>';
			text += ('Represents the port part (e.g. :8080) of the URL* as <b>location.port</b>: ' + location.port) + '<br>';
			text += ('Represents the protocol part of the URL as <b>location.protocol</b>: ' + location.protocol) + '<br>';
			text += 'The search part of the URL, including the ? is <b>location.search</b>: ' + location.search;
			text += '<p><b>* Note: </b>If the port number is default (80 for http and 443 for https), most browsers will display 0 or nothing.</p>';
			document.getElementById ('locs').innerHTML = text;
		};
		var create_query = function () {
			location.search = '?testname=transcrypt&lang=python';
		};
		var goto_hash = function (h) {
			console.log ((location.href + '#') + h);
			location.assign ((location.href + '#') + h);
		};
		var insert_hash = function () {
			var x = '';
			for (var i = 0; i < 100; i++) {
				if (i == 50) {
					x += (((((('<a name="para' + str (i)) + '"></a>') + '<p id="para') + str (i)) + '">Paragraph ') + str (i)) + ' - Now please scroll back to the beginning and press show location elements again - look for the hash</p>';
				}
				else {
					x += (((((('<a name="para' + str (i)) + '"></a>') + '<p id="para') + str (i)) + '">Paragraph ') + str (i)) + '</p>';
				}
			}
			document.getElementById ('hashtext').innerHTML = x;
			console.log (x);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.create_query = create_query;
			__all__.goto_hash = goto_hash;
			__all__.init = init;
			__all__.insert_hash = insert_hash;
			__all__.show = show;
		__pragma__ ('</all>')
	}) ();
