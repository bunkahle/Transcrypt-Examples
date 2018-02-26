	(function () {
		var __name__ = '__main__';
		var insert = function () {
			var x = document.getElementById ('myPre').innerHTML;
			document.getElementById ('demo').innerHTML = x;
			console.log ('This message can only be seen in the console window - hit F12 to view it in the browser');
			console.log ('Console.log can be used for debugging, especially for variables like x.');
			console.log (('x has the value:' + x) + ': end of var');
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.insert = insert;
		__pragma__ ('</all>')
	}) ();
