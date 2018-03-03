	(function () {
		var __name__ = '__main__';
		var links = function (event) {
			if (event.target.id == 1) {
				alert ('You clicked 1');
			}
			else if (event.target.id == 2) {
				alert ('You clicked 2');
			}
			else if (event.target.id == 3) {
				alert ('You clicked 3');
			}
			document.getElementById ('link_clicked').innerHTML = document.getElementById (event.target.id).innerHTML;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.links = links;
		__pragma__ ('</all>')
	}) ();
