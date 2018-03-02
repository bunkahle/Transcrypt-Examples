	(function () {
		var time = {};
		var __name__ = '__main__';
		__nest__ (time, '', __init__ (__world__.time));
		var con = console;
		var doc = document;
		var his = history;
		var loc = location;
		var win = window;
		var py_isNaN = function (x) {
			try {
				var a = int (x);
				return false;
			}
			catch (__except0__) {
				return true;
			}
		};
		var button_disable = function (butt) {
			document.getElementById (butt).disabled = true;
		};
		var button_enable = function (butt) {
			document.getElementById (butt).disabled = false;
		};
		var button_isDisabled = function (butt) {
			if (document.getElementById (butt).disabled == true) {
				return true;
			}
			else {
				return false;
			}
		};
		var conlog = function (text) {
			console.log (text);
		};
		var S = function (sel, kind) {
			if (typeof kind == 'undefined' || (kind != null && kind .hasOwnProperty ("__kwargtrans__"))) {;
				var kind = null;
			};
			if (sel [0] == '#') {
				if (kind === null) {
					return doc_id (sel.__getslice__ (1, null, 1));
				}
				else if (kind == 'text' || kind == 'txt') {
					return doc_id (sel.__getslice__ (1, null, 1)).innerText;
				}
				else if (kind == 'html' || kind == 'htm') {
					return doc_id (sel.__getslice__ (1, null, 1)).innerHTML;
				}
				else if (kind == 'value' || kind == 'val') {
					return doc_id (sel.__getslice__ (1, null, 1)).value;
				}
			}
			else if (sel [0] == '.') {
				if (kind === null) {
					return doc_class (sel.__getslice__ (1, null, 1));
				}
				else if (kind == 'text' || kind == 'txt') {
					return doc_class (sel.__getslice__ (1, null, 1)).innerText;
				}
				else if (kind == 'html' || kind == 'htm') {
					return doc_class (sel.__getslice__ (1, null, 1)).innerHTML;
				}
				else if (kind == 'value' || kind == 'val') {
					return doc_class (sel.__getslice__ (1, null, 1)).value;
				}
			}
			else if (kind === null) {
				return doc_tag (sel);
			}
			else if (kind == 'text' || kind == 'txt') {
				return doc_tag (sel).innerText;
			}
			else if (kind == 'html' || kind == 'htm') {
				return doc_tag (sel).innerHTML;
			}
			else if (kind == 'value' || kind == 'val') {
				return doc_tag (sel).value;
			}
		};
		var doc_class = function (clas) {
			return document.getElementsByClassName (clas);
		};
		var doc_class_htm = function (clas) {
			return document.getElementsByClassName (clas).innerHTML;
		};
		var doc_class_txt = function (clas) {
			return document.getElementsByClassName (clas).innerText;
		};
		var doc_class_val = function (clas) {
			return document.getElementsByClassName (clas).value;
		};
		var doc_id = function (id) {
			return document.getElementById (id);
		};
		var doc_id_htm = function (id) {
			return document.getElementById (id).innerHTML;
		};
		var doc_id_txt = function (id) {
			return document.getElementById (id).innerText;
		};
		var doc_id_val = function (id) {
			return document.getElementById (id).value;
		};
		var doc_qs = function (sel) {
			return document.querySelector (sel);
		};
		var doc_qs_htm = function (sel) {
			return document.querySelector (sel).innerHTML;
		};
		var doc_qs_txt = function (sel) {
			return document.querySelector (sel).innerText;
		};
		var doc_qs_val = function (sel) {
			return document.querySelector (sel).value;
		};
		var doc_qsa = function (sel) {
			return document.querySelectorAll (sel);
		};
		var doc_tag = function (tag) {
			return document.getElementsByTagName (tag);
		};
		var doc_tag_htm = function (tag) {
			return document.getElementsByTagName (tag).innerHTML;
		};
		var doc_tag_txt = function (tag) {
			return document.getElementsByTagName (tag).innerText;
		};
		var doc_tag_val = function (tag) {
			return document.getElementsByTagName (tag).value;
		};
		var deleteCookie = function (cname) {
			document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		};
		var getAllCookies = function (cname) {
			var decodedCookie = decodeURIComponent (document.cookie);
			var allcookies = decodedCookie.py_split (';');
			return allcookies;
		};
		var getCookie = function (cname) {
			var py_name = cname + '=';
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
		};
		var setCookie = function (cname, cvalue, exdays) {
			var t = time.time () + ((int (exdays) * 24) * 60) * 60;
			var struc_time = time.gmtime (t);
			var expires = 'expires=' + time.strftime ('%a, %d %b %Y %H:%M:%S UTC', struc_time);
			document.cookie = ((((cname + '=') + cvalue) + '; ') + expires) + '; path=/';
		};
		__pragma__ ('<use>' +
			'time' +
		'</use>')
		__pragma__ ('<all>')
			__all__.S = S;
			__all__.__name__ = __name__;
			__all__.button_disable = button_disable;
			__all__.button_enable = button_enable;
			__all__.button_isDisabled = button_isDisabled;
			__all__.con = con;
			__all__.conlog = conlog;
			__all__.deleteCookie = deleteCookie;
			__all__.doc = doc;
			__all__.doc_class = doc_class;
			__all__.doc_class_htm = doc_class_htm;
			__all__.doc_class_txt = doc_class_txt;
			__all__.doc_class_val = doc_class_val;
			__all__.doc_id = doc_id;
			__all__.doc_id_htm = doc_id_htm;
			__all__.doc_id_txt = doc_id_txt;
			__all__.doc_id_val = doc_id_val;
			__all__.doc_qs = doc_qs;
			__all__.doc_qs_htm = doc_qs_htm;
			__all__.doc_qs_txt = doc_qs_txt;
			__all__.doc_qs_val = doc_qs_val;
			__all__.doc_qsa = doc_qsa;
			__all__.doc_tag = doc_tag;
			__all__.doc_tag_htm = doc_tag_htm;
			__all__.doc_tag_txt = doc_tag_txt;
			__all__.doc_tag_val = doc_tag_val;
			__all__.getAllCookies = getAllCookies;
			__all__.getCookie = getCookie;
			__all__.his = his;
			__all__.py_isNaN = py_isNaN;
			__all__.loc = loc;
			__all__.setCookie = setCookie;
			__all__.win = win;
		__pragma__ ('</all>')
	}) ();
