	(function () {
		var __name__ = '__main__';
		var set_key = function () {
			console.log ('document loading has finished');
			document.getElementById ('tra').accessKey = 't';
			console.log (document.getElementById ('tra').innerHTML);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.set_key = set_key;
		__pragma__ ('</all>')
	}) ();
