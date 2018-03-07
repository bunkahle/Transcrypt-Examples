	(function () {
		var __name__ = '__main__';
		var modal_action = function () {
			modal.style.display = 'block';
			modalImg.src = img.src;
			captionText.innerHTML = img.alt;
		};
		var modal_close = function () {
			modal.style.display = 'none';
		};
		var modal = document.getElementById ('myModal');
		var img = document.getElementById ('myImg');
		var modalImg = document.getElementById ('img01');
		var captionText = document.getElementById ('caption');
		img.onclick = modal_action;
		var span = document.getElementsByClassName ('close') [0];
		span.onclick = modal_close;
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.captionText = captionText;
			__all__.img = img;
			__all__.modal = modal;
			__all__.modalImg = modalImg;
			__all__.modal_action = modal_action;
			__all__.modal_close = modal_close;
			__all__.span = span;
		__pragma__ ('</all>')
	}) ();
