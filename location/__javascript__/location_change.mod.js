	(function () {
		var __name__ = '__main__';
		var reload_page = function (forceGet) {
			if (typeof forceGet == 'undefined' || (forceGet != null && forceGet .hasOwnProperty ("__kwargtrans__"))) {;
				var forceGet = false;
			};
			console.log ('document is going to be reloaded');
			location.reload (forceGet);
			console.log ('document was reloaded');
		};
		var rep_page = function (page) {
			location.replace (page);
			console.log ('document was replaced - should not be in the history anymore');
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
			__all__.reload_page = reload_page;
			__all__.rep_page = rep_page;
			__all__.replace_url = replace_url;
		__pragma__ ('</all>')
	}) ();
