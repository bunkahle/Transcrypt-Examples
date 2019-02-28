	(function () {
		var __name__ = '__main__';
		var check = function () {
			var username = document.log.uname.value;
			var password = document.log.psw.value;
			if (username == 'admin' && password == 'test') {
				alert ('User and Password is correct');
			}
			else {
				alert ('User and Password is wrong');
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.check = check;
		__pragma__ ('</all>')
	}) ();
