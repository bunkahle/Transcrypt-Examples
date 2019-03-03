	(function () {
		var __name__ = '__main__';
		var greet = function () {
			var py_name = document.getElementById ('Name').value;
			if (py_name == '' || py_name.length == 0 || py_name == null) {
				document.getElementById ('groet').innerHTML = '<p><font color="#ff0000">Hello Anonymous, may I know yor name? Please insert it below:</font></p>';
			}
			else {
				document.getElementById ('groet').innerHTML = ('<p><font color="#00ff00">Hello, ' + py_name) + ', thank you for introducing you</font></p>';
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.greet = greet;
		__pragma__ ('</all>')
	}) ();
