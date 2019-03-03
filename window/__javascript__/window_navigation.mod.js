	(function () {
		var __name__ = '__main__';
		var back = function () {
			window.history.back ();
			document.getElementById ('len').innerHTML = 'Length of history: ' + str (window.history.length);
		};
		var fourth = function () {
			window.history.forward ();
			document.getElementById ('len').innerHTML = 'Length of history: ' + str (window.history.length);
		};
		var goto = function (steps) {
			window.history.go (steps);
			document.getElementById ('len').innerHTML = 'Length of history: ' + str (window.history.length);
		};
		var assign_page = function (page) {
			location.assign (page);
			console.log ('a new document was loaded');
		};
		var replace_url = function () {
			var new_url = document.getElementById ('input_location').value;
			if (!(__in__ ('http', new_url.__getslice__ (0, 4, 1)))) {
				var new_url = 'http://' + new_url;
			}
			assign_page (new_url);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.assign_page = assign_page;
			__all__.back = back;
			__all__.fourth = fourth;
			__all__.goto = goto;
			__all__.replace_url = replace_url;
		__pragma__ ('</all>')
	}) ();
