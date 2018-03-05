	(function () {
		var __name__ = '__main__';
		var toggle = function (evt) {
			var button1 = document.getElementById ('button1');
			var button_class = document.getElementsByClassName ('button');
			if (button1.innerText == 'Click Me' || button1.innerText == 'Deactivated') {
				button1.innerText = 'Activated';
				button_class [0].style.backgroundColor = '#ff0000';
			}
			else {
				button1.innerText = 'Deactivated';
				button_class [0].style.backgroundColor = '#4CAF50';
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.toggle = toggle;
		__pragma__ ('</all>')
	}) ();
