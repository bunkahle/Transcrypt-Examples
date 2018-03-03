	(function () {
		var __name__ = '__main__';
		var getclick = function (event) {
			document.getElementById ('info').innerHTML = 'Locally clicked: ' + event.target.id;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.getclick = getclick;
		__pragma__ ('</all>')
	}) ();
