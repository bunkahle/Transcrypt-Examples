	(function () {
		var random = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		var Game2048 = __class__ ('Game2048', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.b = list ([list ([0, 0, 0, 0]), list ([0, 0, 0, 0]), list ([0, 0, 0, 0]), list ([0, 0, 0, 0])]);
				for (var i = 0; i < 16; i++) {
					document.getElementById ('butt' + str (i)).style.fontSize = 'large';
					document.getElementById ('butt' + str (i)).style.backgroundColor = 'white';
					document.getElementById ('butt' + str (i)).style.height = '100px';
					document.getElementById ('butt' + str (i)).style.width = '100px';
					document.getElementById ('butt' + str (i)).innerHTML = '   ';
				}
				self.start_value = document.getElementById ('selstart').value;
				self.start_value = int (self.start_value);
				self.new_number ();
				document.onkeypress = self.on_keypress;
			});},
			get shiftp () {return __get__ (this, function (self, c) {
				var lst = list ([]);
				var zeros = 0;
				var __iterable0__ = c;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var i = __iterable0__ [__index0__];
					if (i == 0) {
						zeros++;
					}
					if (i > 0) {
						lst.append (i);
					}
				}
				for (var i = 0; i < zeros; i++) {
					lst.append (0);
				}
				return lst;
			});},
			get sms () {return __get__ (this, function (self, l) {
				var l = self.shiftp (l);
				for (var i = 0; i < len (l) - 1; i++) {
					if (l [i + 1] == l [i]) {
						var __left0__ = tuple ([2 * l [i], 0]);
						l [i] = __left0__ [0];
						l [i + 1] = __left0__ [1];
					}
				}
				var ret = self.shiftp (l);
				return ret;
			});},
			get rot () {return __get__ (this, function (self) {
				self.b = list ([list ([self.b [3] [0], self.b [2] [0], self.b [1] [0], self.b [0] [0]]), list ([self.b [3] [1], self.b [2] [1], self.b [1] [1], self.b [0] [1]]), list ([self.b [3] [2], self.b [2] [2], self.b [1] [2], self.b [0] [2]]), list ([self.b [3] [3], self.b [2] [3], self.b [1] [3], self.b [0] [3]])]);
			});},
			get move () {return __get__ (this, function (self, n) {
				var diff = self.b.__getslice__ (0, null, 1);
				for (var i = 0; i < n; i++) {
					self.rot ();
				}
				for (var i = 0; i < 4; i++) {
					self.b [i] = self.sms (self.b [i]);
				}
				for (var i = 0; i < 4 - n; i++) {
					self.rot ();
				}
				if (self.b != diff) {
					return 1;
				}
				else {
					return 0;
				}
			});},
			get new_number () {return __get__ (this, function (self) {
				var empty = list ([]);
				var __iterable0__ = enumerate (self.b);
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var r = __left0__ [0];
					var row = __left0__ [1];
					var __iterable1__ = enumerate (row);
					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
						var __left0__ = __iterable1__ [__index1__];
						var c = __left0__ [0];
						var col = __left0__ [1];
						if (col == 0) {
							empty.append (tuple ([r, c]));
						}
					}
				}
				if (len (empty) > 0) {
					var k = empty [random.randint (0, len (empty) - 1)];
					self.b [k [0]] [k [1]] = random.randint (1, 2) * self.start_value;
				}
				var j = -(1);
				for (var i = 0; i < 16; i++) {
					var d = self.b [Math.floor (i / 4)] [__mod__ (i, 4)];
					if (d == 2048) {
						var j = i;
					}
					if (d) {
						document.getElementById ('butt' + str (i)).innerHTML = str (d);
					}
					else {
						document.getElementById ('butt' + str (i)).innerHTML = '   ';
					}
					var colorcodes = dict ({0: 'white', 2: 'AntiqueWhite', 4: 'BurlyWood', 8: 'BurlyWood', 16: 'Cyan', 32: 'Gold', 64: 'GoldenRod', 128: 'HotPink', 256: 'Crimson', 512: 'DarkRed', 1024: 'DeepPink', 2048: 'DarkMagenta'});
					document.getElementById ('butt' + str (i)).style.backgroundColor = colorcodes [d];
				}
				if (j > -(1)) {
					for (var i = 0; i < 16; i++) {
						document.getElementById ('butt' + str (i)).innerHTML = document.getElementById ('butt' + str (i)).innerHTML + ' :)';
					}
					alert ('Congratulations! You made it to 2048!');
					self.b = list ([list ([0, 0, 0, 0]), list ([0, 0, 0, 0]), list ([0, 0, 0, 0]), list ([0, 0, 0, 0])]);
				}
			});},
			get on_keypress () {return __get__ (this, function (self, event) {
				var direction = dict ({'Left': 0, 'Down': 1, 'Right': 2, 'Up': 3});
				self.keypressed = -(1);
				var kc = event.keyCode;
				var cc = event.charCode;
				self.ckeys = dict ({38: 3, 39: 2, 37: 0, 40: 1});
				var __iterable0__ = self.ckeys.py_items ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var key = __left0__ [0];
					var val = __left0__ [1];
					if (kc == key) {
						self.keypressed = key;
						break;
					}
				}
				if (self.keypressed != -(1)) {
					if (self.move (self.ckeys [self.keypressed])) {
						self.new_number ();
					}
					var p = self.b.__getslice__ (0, null, 1);
					for (var i = 0; i < 4; i++) {
						self.move (i);
						if (self.b != p) {
							self.b = p.__getslice__ (0, null, 1);
							return ;
						}
					}
					for (var i = 0; i < 16; i++) {
						document.getElementById ('butt' + str (i)).style.backgroundColor = 'red';
						document.getElementById ('butt' + str (i)).innerHTML = document.getElementById ('butt' + str (i)).innerHTML + ' :(';
					}
					alert ('Aaah! This did not work!');
				}
			});},
			get startvalue () {return __get__ (this, function (self) {
				self.start_value = int (document.getElementById ('selstart').value);
			});}
		});
		var game2048 = Game2048 (null);
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Game2048 = Game2048;
			__all__.__name__ = __name__;
			__all__.game2048 = game2048;
		__pragma__ ('</all>')
	}) ();
