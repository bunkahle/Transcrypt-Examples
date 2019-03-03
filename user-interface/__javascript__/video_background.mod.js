	(function () {
		var __name__ = '__main__';
		var pause = function () {
			var video = document.getElementById ('myVideo');
			var btn = document.getElementById ('myBtn');
			if (video.paused) {
				video.play ();
				btn.innerHTML = 'Pause';
			}
			else {
				video.pause ();
				btn.innerHTML = 'Play';
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.pause = pause;
		__pragma__ ('</all>')
	}) ();
