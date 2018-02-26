	(function () {
		var random = {};
		var turtle = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		__nest__ (turtle, '', __init__ (__world__.turtle));
		var tree = function (size, myTurtle) {
			myTurtle.pensize (size / 20);
			if (size < random.randint (1, 2) * 20) {
				myTurtle.color ('green');
			}
			else {
				myTurtle.color ('brown');
			}
			if (size > 5) {
				myTurtle.forward (size);
				myTurtle.left (25);
				tree (size - random.randint (10, 20), myTurtle);
				myTurtle.right (50);
				tree (size - random.randint (10, 20), myTurtle);
				myTurtle.left (25);
				myTurtle.up ();
				myTurtle.back (size);
				myTurtle.down ();
			}
		};
		var myTurtle = turtle.Turtle ();
		myTurtle.color ('brown', 'blue');
		myTurtle.left (90);
		myTurtle.speed (0);
		myTurtle.up ();
		myTurtle.goto (0, 250);
		myTurtle.down ();
		tree (135, myTurtle);
		myTurtle.done ();
		__pragma__ ('<use>' +
			'random' +
			'turtle' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.myTurtle = myTurtle;
			__all__.tree = tree;
		__pragma__ ('</all>')
	}) ();
