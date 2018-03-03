	(function () {
		var __name__ = '__main__';
		var getclick = function (event) {
			var targetid = event.target.id;
			var target = event.target;
			print ('clicked:', targetid, target);
			document.getElementById ('info').innerHTML = (('Locally clicked: id=' + targetid) + ' target=') + target;
			$ ('#test_c').slideUp ('slow');
			$ ('#test_b').slideUp ('slow');
			$ ('#test_a').slideUp ('slow');
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.getclick = getclick;
		__pragma__ ('</all>')
	}) ();
