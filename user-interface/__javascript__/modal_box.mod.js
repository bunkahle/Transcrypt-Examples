	(function () {
		var __name__ = '__main__';
		var open_box = function (event) {
			modal.style.display = 'block';
		};
		var close_box = function (event) {
			if (event.target == modal || event.target == span || event.target == closebut || event.target == saving) {
				close_modal ();
			}
		};
		var close_modal = function () {
			modal.style.display = 'none';
		};
		var msg = function () {
			modal.style.display = 'none';
			alert ('saving');
		};
		var modal = document.getElementById ('myModal');
		var btn = document.getElementById ('myBtn');
		var span = document.getElementsByClassName ('close') [0];
		var closebut = document.getElementsByClassName ('btn') [0];
		var saving = document.getElementsByClassName ('save') [0];
		btn.onclick = open_box;
		span.onclick = close_box;
		window.onclick = close_box;
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.btn = btn;
			__all__.close_box = close_box;
			__all__.close_modal = close_modal;
			__all__.closebut = closebut;
			__all__.modal = modal;
			__all__.msg = msg;
			__all__.open_box = open_box;
			__all__.saving = saving;
			__all__.span = span;
		__pragma__ ('</all>')
	}) ();
