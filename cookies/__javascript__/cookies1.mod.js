	(function () {
		var time = {};
		var __name__ = '__main__';
		__nest__ (time, '', __init__ (__world__.time));
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get setCookie () {return __get__ (this, function (self, cname, cvalue, exdays) {
				var t = time.time () + ((int (exdays) * 24) * 60) * 60;
				var struc_time = time.gmtime (t);
				var expires = 'expires=' + time.strftime ('%a, %d %b %Y %H:%M:%S UTC', struc_time);
				document.cookie = ((((cname + '=') + cvalue) + '; ') + expires) + '; path=/';
				alert (((((('Cookie set: ' + cname) + '=') + cvalue) + '; ') + expires) + '; path=/');
			});},
			get deleteCookie () {return __get__ (this, function (self, cname) {
				document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			});},
			get getCookie () {return __get__ (this, function (self, cname) {
				var py_name = cname + '=';
				console.log (('name=' + py_name) + ';');
				var decodedCookie = decodeURIComponent (document.cookie);
				var allcookies = decodedCookie.py_split (';');
				var __iterable0__ = allcookies;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var ca = __iterable0__ [__index0__];
					if (__in__ (py_name, ca)) {
						var f = ca.find (py_name);
						var c_content = ca.__getslice__ (f + len (py_name), null, 1);
						return c_content;
					}
				}
				return '';
			});},
			get show_cookies () {return __get__ (this, function (self) {
				var decodedCookie = decodeURIComponent (document.cookie);
				var allcookies = decodedCookie.py_split (';');
				alert (('allcookies:' + allcookies) + ':');
			});},
			get checkCookie () {return __get__ (this, function (self) {
				var user = self.getCookie ('username');
				if (user != '') {
					alert ('Welcome again ' + user);
				}
				else {
					var user = prompt ('Please enter your name:', '');
					if (user != '' && user !== null) {
						self.setCookie ('username', user, 30);
					}
				}
			});},
			get create_cookie () {return __get__ (this, function (self) {
				var cname = prompt ('Please enter the cookie name:', '');
				var cvalue = prompt ('Please enter the cookie value/text:', '');
				var days = prompt ('In how many days is it going to expire?', '');
				self.setCookie (cname, cvalue, days);
			});},
			get set_name () {return __get__ (this, function (self) {
				alert ('Your name will be set as cookie');
				var py_name = prompt ('What is your name?', 'Transcrypt-User');
				var days = prompt ('How many days shall the cookie last?', '7');
				self.setCookie ('username', py_name, days);
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<use>' +
			'time' +
		'</use>')
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
