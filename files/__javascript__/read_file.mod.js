	(function () {
		var __name__ = '__main__';
		var read_file = function () {
			var xmlhttp = new XMLHttpRequest ();
			xmlhttp.open ('GET', 'https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md', false);
			xmlhttp.send ();
			var response = xmlhttp.responseText;
			console.log (response);
			alert (response);
		};
		var read_file_local = function () {
			var xmlhttp = new XMLHttpRequest ();
			xmlhttp.open ('GET', '01_readfile.html', false);
			xmlhttp.send ();
			var response = xmlhttp.responseText;
			console.log (response);
			alert (response);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.read_file = read_file;
			__all__.read_file_local = read_file_local;
		__pragma__ ('</all>')
	}) ();
