	(function () {
		var random = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		var append_item = function (self) {
			var new_items = list (['Fire', 'Water', 'Earth', 'Air', 'Ether', 'Wood', 'Metal']);
			var node = document.createElement ('LI');
			var rnd = random.randint (0, len (new_items) - 1);
			var textnode = document.createTextNode (new_items [rnd]);
			node.appendChild (textnode);
			document.getElementById ('myList').appendChild (node);
		};
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.append_item = append_item;
		__pragma__ ('</all>')
	}) ();
