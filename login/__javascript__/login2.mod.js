	(function () {
		var __name__ = '__main__';
		var validateForm = function () {
			var un = document.loginform.usr.value;
			var pw = document.loginform.pword.value;
			var username = 'admin';
			var password = 'test';
			if (un == username && pw == password) {
				return true;
			}
			else {
				alert ('Login was unsuccessful, please check your username and password');
				return false;
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.validateForm = validateForm;
		__pragma__ ('</all>')
	}) ();
