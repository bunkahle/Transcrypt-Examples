	(function () {
		var random = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		var Tile = __class__ ('Tile', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, value) {
				if (typeof value == 'undefined' || (value != null && value .hasOwnProperty ("__kwargtrans__"))) {;
					var value = 0;
				};
				self.value = value;
			});}
		});
		var Game2048 = __class__ ('Game2048', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, size) {
				self.grid = (function () {
					var __accu0__ = [];
					for (var j = 0; j < size; j++) {
						__accu0__.append ((function () {
							var __accu1__ = [];
							for (var i = 0; i < size; i++) {
								__accu1__.append (Tile ());
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
				self.gl = size;
				self.b = (function () {
					var __accu0__ = [];
					var __iterable0__ = self.grid;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var j = __iterable0__ [__index0__];
						__accu0__.append ((function () {
							var __accu1__ = [];
							var __iterable1__ = j;
							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
								var i = __iterable1__ [__index1__];
								__accu1__.append (false);
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
				self.colorcodes = dict ({0: 'white', 2: 'AntiqueWhite', 4: 'BurlyWood', 8: 'BurlyWood', 16: 'Cyan', 32: 'Gold', 64: 'GoldenRod', 128: 'HotPink', 256: 'Crimson', 512: 'DarkRed', 1024: 'DeepPink', 2048: 'DarkMagenta'});
				self.start_value = int (document.getElementById ('selstart').value);
				self.addRandomTile ();
				self.addRandomTile ();
				for (var i = 0; i < 16; i++) {
					document.getElementById ('butt' + str (i)).style.fontSize = 'large';
					document.getElementById ('butt' + str (i)).style.backgroundColor = 'white';
					document.getElementById ('butt' + str (i)).style.height = '100px';
					document.getElementById ('butt' + str (i)).style.width = '100px';
					document.getElementById ('butt' + str (i)).innerHTML = '   ';
				}
				self.makeButtons ();
				document.onkeydown = self.on_keypress;
			});},
			get __str__ () {return __get__ (this, function (self) {
				var ret = '';
				var iS = dict ({});
				var __iterable0__ = self.grid;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var j = __iterable0__ [__index0__];
					for (var i = 0; i < len (j); i++) {
						iS [i] = max (iS.py_get (i), len (str (j [i])));
					}
				}
				var __iterable0__ = self.grid;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var j = __iterable0__ [__index0__];
					for (var i = 0; i < len (j); i++) {
						var ret = ((ret + str (j [i])) + ' ') + ' ' * (iS [i] - len (str (j [i])));
					}
					var ret = ret + '\n';
				}
				return ret.py_replace (' 0', '  ').py_replace ('0 ', '  ');
			});},
			get addRandomTile () {return __get__ (this, function (self) {
				var availableTiles = self.getAvailableTiles ();
				var findTile = self.findTile (random.choice (availableTiles));
				self.grid [findTile [0]] [findTile [1]] = Tile (self.start_value);
			});},
			get getAvailableTiles () {return __get__ (this, function (self) {
				var ret = list ([]);
				var __iterable0__ = self.grid;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var i = __iterable0__ [__index0__];
					var __iterable1__ = i;
					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
						var j = __iterable1__ [__index1__];
						if (j.value == 0) {
							ret.append (j);
						}
					}
				}
				return ret;
			});},
			get findTile () {return __get__ (this, function (self, tile) {
				for (var i = 0; i < len (self.grid); i++) {
					for (var j = 0; j < len (self.grid [i]); j++) {
						if (self.grid [i] [j] == tile) {
							return tuple ([i, j]);
						}
					}
				}
			});},
			get reloc () {return __get__ (this, function (self, i, j) {
				return i * self.gl + j;
			});},
			get makeButtons () {return __get__ (this, function (self) {
				for (var i = 0; i < len (self.grid); i++) {
					for (var j = 0; j < len (self.grid [i]); j++) {
						if (self.grid [i] [j].value) {
							document.getElementById ('butt' + str (self.reloc (i, j))).style.backgroundColor = self.colorcodes [self.grid [i] [j].value];
							document.getElementById ('butt' + str (self.reloc (i, j))).innerHTML = str (self.grid [i] [j].value);
						}
						else {
							document.getElementById ('butt' + str (self.reloc (i, j))).style.backgroundColor = 'white';
							document.getElementById ('butt' + str (self.reloc (i, j))).innerHTML = '   ';
						}
					}
				}
			});},
			get move () {return __get__ (this, function (self, direction) {
				var merged = list ([]);
				var moved = false;
				var lines = rotate (self.grid, direction + 1);
				console.log (lines);
				var __iterable0__ = lines;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var line = __iterable0__ [__index0__];
					console.log (line);
					while (len (line) && line [len (line) - 1].value == 0) {
						line.py_pop (-(1));
					}
					var i = len (line) - 1;
					while (i >= 0) {
						if (line [i].value == 0) {
							var moved = true;
							line.py_pop (i);
						}
						i--;
					}
					var i = 0;
					while (i < len (line) - 1) {
						if (line [i].value == line [i + 1].value && !(__in__ (line [i], merged) || __in__ (line [i + 1], merged))) {
							var moved = true;
							line [i] = Tile (line [i].value * 2);
							merged.append (line [i]);
							line.py_pop (i + 1);
						}
						else {
							i++;
						}
					}
					while (len (line) < len (self.grid)) {
						line.append (Tile ());
					}
				}
				var __iterable0__ = lines;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var line = __iterable0__ [__index0__];
					if (!(len (lines))) {
						var line = (function () {
							var __accu0__ = [];
							var __iterable1__ = self.grid;
							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
								var i = __iterable1__ [__index1__];
								__accu0__.append (Tile ());
							}
							return __accu0__;
						}) ();
					}
				}
				self.grid = rotate (lines, 0 - (direction + 1));
				if (moved) {
					self.addRandomTile ();
				}
			});},
			get on_keypress () {return __get__ (this, function (self, event) {
				var kc = event.keyCode;
				if (kc == 37) {
					self.move (3);
				}
				else if (kc == 38) {
					self.move (2);
				}
				else if (kc == 39) {
					self.move (1);
				}
				else if (kc == 40) {
					self.move (0);
				}
				self.makeButtons ();
				if (self.lost ()) {
					for (var i = 0; i < 16; i++) {
						document.getElementById ('butt' + str (i)).style.backgroundColor = 'red';
						document.getElementById ('butt' + str (i)).innerHTML = document.getElementById ('butt' + str (i)).innerHTML + ' :(';
					}
					alert ('Aaah! This did not work!');
				}
				else if (self.won ()) {
					alert ('Congratulations! You made it!');
				}
			});},
			get lost () {return __get__ (this, function (self) {
				var s = len (self.grid) - 1;
				var b = true;
				for (var i = 0; i < len (self.grid); i++) {
					for (var j = 0; j < len (self.grid [i]); j++) {
						var val = self.grid [i] [j].value;
						if (val == 0) {
							var b = false;
						}
						if (i > 0 && self.grid [i - 1] [j].value == val) {
							var b = false;
						}
						if (j > 0 && self.grid [i] [j - 1].value == val) {
							var b = false;
						}
						if (i < s && self.grid [i + 1] [j].value == val) {
							var b = false;
						}
						if (j < s && self.grid [i] [j + 1].value == val) {
							var b = false;
						}
					}
				}
				return b;
			});},
			get won () {return __get__ (this, function (self) {
				for (var i = 0; i < len (self.grid); i++) {
					for (var j = 0; j < len (self.grid [i]); j++) {
						if (self.grid [i] [j].value == 2048) {
							return true;
						}
					}
				}
				return false;
			});},
			get getValues () {return __get__ (this, function (self) {
				var ret = list ([]);
				var __iterable0__ = self.grid;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var i = __iterable0__ [__index0__];
					var __iterable1__ = i;
					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
						var j = __iterable1__ [__index1__];
						ret.append (j);
					}
				}
				return ret;
			});},
			get startvalue () {return __get__ (this, function (self) {
				self.start_value = int (document.getElementById ('selstart').value);
			});}
		});
		var rotate = function (l, num) {
			var num = __mod__ (num, 4);
			var s = len (l) - 1;
			var l2 = list ([]);
			if (num == 0) {
				var l2 = l;
			}
			else if (num == 1) {
				var l2 = (function () {
					var __accu0__ = [];
					var __iterable0__ = l;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var j = __iterable0__ [__index0__];
						__accu0__.append ((function () {
							var __accu1__ = [];
							var __iterable1__ = j;
							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
								var i = __iterable1__ [__index1__];
								__accu1__.append (false);
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
				for (var y = 0; y < len (l); y++) {
					for (var x = 0; x < len (l [y]); x++) {
						l2 [x] [s - y] = l [y] [x];
					}
				}
			}
			else if (num == 2) {
				var l2 = l;
				l2.reverse ();
				var __iterable0__ = l;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var i = __iterable0__ [__index0__];
					i.reverse ();
				}
			}
			else if (num == 3) {
				var l2 = (function () {
					var __accu0__ = [];
					var __iterable0__ = l;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var j = __iterable0__ [__index0__];
						__accu0__.append ((function () {
							var __accu1__ = [];
							var __iterable1__ = j;
							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
								var i = __iterable1__ [__index1__];
								__accu1__.append (false);
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
				for (var y = 0; y < len (l); y++) {
					for (var x = 0; x < len (l [y]); x++) {
						l2 [y] [x] = l [x] [s - y];
					}
				}
			}
			return l2;
		};
		var game2048 = Game2048 (4);
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Game2048 = Game2048;
			__all__.Tile = Tile;
			__all__.__name__ = __name__;
			__all__.game2048 = game2048;
			__all__.rotate = rotate;
		__pragma__ ('</all>')
	}) ();
