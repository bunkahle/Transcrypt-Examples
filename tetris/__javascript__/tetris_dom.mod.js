	(function () {
		var __name__ = '__main__';
		var randint = __init__ (__world__.random).randint;
		var Tetris = __class__ ('Tetris', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.ROWS = 10;
				self.COLS = 20;
				self.FELD = list ([]);
				self.ckeys = dict ({'up': 38, 'right': 39, 'left': 37, 'down': 40, 'esc': 27, 'quit': 81, 'pause': 80});
				self.tetrominoes = list ([list ([list (['.', 'X', 'X']), list (['X', 'X', '.']), list (['.', '.', '.'])]), list ([list (['X', 'X', '.']), list (['.', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', '.', '.']), list (['X', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', 'X', '.']), list (['.', 'X', '.']), list (['.', 'X', '.'])]), list ([list (['.', '.', '.']), list (['X', 'X', 'X']), list (['.', '.', 'X'])]), list ([list (['.', '.', 'X']), list (['X', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', 'X', 'X']), list (['.', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', '.', '.']), list (['.', 'X', '.']), list (['X', 'X', 'X'])])]);
				self.lt = len (self.tetrominoes);
				self.init_field ();
			});},
			get mult_string () {return __get__ (this, function (self, s, c) {
				var new_row = '';
				for (var i = 0; i < c; i++) {
					new_row += s;
				}
				return new_row;
			});},
			get chkBoard () {return __get__ (this, function (self) {
				var deleted = false;
				for (var i = 0; i < self.ROWS; i++) {
					if (!(__in__ ('.', self.FELD [i]))) {
						self.showfield ();
						var start = self.FELD.__getslice__ (0, i, 1);
						var ende = self.FELD.__getslice__ (i + 1, null, 1);
						var new_row = self.mult_string ('.', self.COLS);
						self.FELD = list ([('X' + new_row) + 'X']);
						self.FELD.extend (start);
						self.FELD.extend (ende);
						self.score = self.score + self.score;
						var deleted = true;
						self.showfield ();
						break;
					}
				}
				return deleted;
			});},
			get testCollision () {return __get__ (this, function (self, FP) {
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						try {
							if (FP [2] [i] [j] == 'X' && self.FELD [FP [0] + i] [FP [1] + j] == 'X') {
								return 1;
							}
						}
						catch (__except0__) {
							return 0;
						}
					}
				}
				return 0;
			});},
			get putFig () {return __get__ (this, function (self, FP, mode) {
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						try {
							if (FP [2] [i] [j] == 'X') {
								self.FELD [FP [0] + i] = (self.FELD [FP [0] + i].__getslice__ (0, FP [1] + j, 1) + mode) + self.FELD [FP [0] + i].__getslice__ ((FP [1] + j) + 1, null, 1);
							}
						}
						catch (__except0__) {
							// pass;
						}
					}
				}
			});},
			get MoveFig () {return __get__ (this, function (self, FP, key, d) {
				var return_success = function (F, success) {
					self.putFig (F, 'X');
					self.keypressed = -(1);
					return tuple ([success, F]);
				};
				var FPC = list ([FP [0], FP [1], FP [2]]);
				if (key == self.ckeys ['left']) {
					FPC [1] = FPC [1] - d;
				}
				else if (key == self.ckeys ['right']) {
					FPC [1] = FPC [1] + d;
				}
				else if (key == self.ckeys ['down']) {
					if (FPC [0] < self.ROWS - 4) {
						FPC [0] = FPC [0] + d * 2;
					}
				}
				else if (key == self.ckeys ['up']) {
					FPC [2] = self.RotFig (FPC [2], 1);
				}
				else {
					FPC [0] = FPC [0] + d;
				}
				self.putFig (FP, '.');
				if (!(self.testCollision (FPC))) {
					return return_success (FPC, 1);
				}
				else {
					if (key == self.ckeys ['left']) {
						FPC [1] = FPC [1] + d;
						FPC [0] = FPC [0] + d;
					}
					else if (key == self.ckeys ['right']) {
						FPC [1] = FPC [1] - d;
						FPC [0] = FPC [0] + d;
					}
					else if (key == self.ckeys ['down']) {
						FPC [0] = FPC [0] - d;
					}
					else if (key == self.ckeys ['up']) {
						FPC [2] = list ([FP [2] [0], FP [2] [1], FP [2] [2]]);
						FPC [0] = FPC [0] + d;
					}
					if (!(self.testCollision (FPC))) {
						return return_success (FPC, 1);
					}
					else {
						return return_success (FP, 0);
					}
				}
			});},
			get RotFig () {return __get__ (this, function (self, FPR, rot) {
				var F2 = list ([FPR [0], FPR [1], FPR [2]]);
				for (var r = 0; r < __mod__ (rot, 4); r++) {
					var FPR = list ([list ([F2 [2] [0], F2 [1] [0], F2 [0] [0]]), list ([F2 [2] [1], F2 [1] [1], F2 [0] [1]]), list ([F2 [2] [2], F2 [1] [2], F2 [0] [2]])]);
				}
				return FPR;
			});},
			get showfield () {return __get__ (this, function (self, py_update) {
				if (typeof py_update == 'undefined' || (py_update != null && py_update .hasOwnProperty ("__kwargtrans__"))) {;
					var py_update = true;
				};
				if (py_update) {
					document.getElementById ('next').innerHTML = ((((self.msg + '<br>\nRound No.:') + str (self.counter)) + ' Bricks passed so far: ') + str (self.bricks)) + ' ';
				}
				var sfeld = ('+' + self.mult_string ('-', self.COLS)) + '+<br>';
				for (var i = 0; i < self.ROWS; i++) {
					sfeld += ('|' + self.FELD [i].__getslice__ (1, -(1), 1)) + '|<br>';
				}
				sfeld += ('+' + self.mult_string ('-', self.COLS)) + '+<br>';
				document.getElementById ('canvas').innerHTML = sfeld;
			});},
			get on_keypress () {return __get__ (this, function (self, e) {
				if (self.end) {
					return ;
				}
				var kc = e.keyCode;
				var cc = e.charCode;
				var __iterable0__ = self.ckeys.py_items ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var key = __left0__ [0];
					var val = __left0__ [1];
					if (kc == val || cc == val) {
						self.keypressed = val;
						break;
					}
				}
				self.loop ();
			});},
			get getsizes () {return __get__ (this, function (self) {
				self.COLS = document.getElementById ('SelectX').value;
				self.ROWS = document.getElementById ('SelectY').value;
			});},
			get clearscreen () {return __get__ (this, function (self) {
				document.getElementById ('canvas').innerHTML = '';
				document.getElementById ('title').innerHTML = 'Your score is: 0';
				self.getsizes ();
				self.init_field ();
			});},
			get loop () {return __get__ (this, function (self) {
				clearTimeout (self.cont);
				if (self.end) {
					return ;
				}
				self.counter++;
				self.score = self.score + 1;
				self.msg = ('Next Brick:<pre>' + self.new_brick) + '</pre>';
				self.showfield ();
				if (self.keypressed == self.ckeys ['esc'] || self.keypressed == self.ckeys ['quit']) {
					document.getElementById ('title').innerHTML = 'Game over. Your score is: ' + str (self.score + self.counter);
					self.end = true;
					clearTimeout (self.cont);
					return ;
				}
				if (self.keypressed == self.ckeys ['pause']) {
					self.pause = !(self.pause);
					self.keypressed = -(1);
				}
				if (!(self.pause)) {
					var __left0__ = self.MoveFig (self.FigPos, self.keypressed, 1);
					var move = __left0__ [0];
					self.FigPos = __left0__ [1];
					var dele = true;
					if (!(move)) {
						while (dele) {
							var dele = self.chkBoard ();
						}
						self.FigPos = list ([0, int (self.COLS / 2) - 1, self.new_tetrom]);
						self.new_tetrom = self.tetrominoes [randint (0, self.lt - 1)];
						self.new_brick = ('<pre>' + '\n'.join ((function () {
							var __accu0__ = [];
							var __iterable0__ = self.new_tetrom;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var b = __iterable0__ [__index0__];
								__accu0__.append ((b [0] + b [1]) + b [2]);
							}
							return __accu0__;
						}) ())) + '</pre>';
						self.bricks++;
						if (self.testCollision (self.FigPos)) {
							document.getElementById ('title').innerHTML = 'Game Over. Your score is: ' + str (self.score + self.counter);
							self.end = true;
							return ;
						}
						else {
							document.getElementById ('title').innerHTML = 'Your score is: ' + str (self.score + self.counter);
						}
						self.putFig (self.FigPos, 'X');
					}
				}
				self.cont = setTimeout (self.loop, self.speed * 1000);
			});},
			get init_field () {return __get__ (this, function (self) {
				self.FELD = list ([]);
				for (var i = 0; i < self.ROWS; i++) {
					var new_row = self.mult_string ('.', self.COLS);
					self.FELD.append (('X' + new_row) + 'X');
				}
				var new_row = self.mult_string ('X', self.COLS + 2);
				self.FELD.append (new_row);
				try {
					self.showfield (__kwargtrans__ ({py_update: false}));
				}
				catch (__except0__) {
					// pass;
				}
				self.score = 0;
				self.counter = 0;
			});},
			get resize () {return __get__ (this, function (self) {
				self.getsizes ();
				self.clearscreen ();
			});},
			get run () {return __get__ (this, function (self) {
				document.getElementById ('next').innerHTML = 'Started';
				self.pause = false;
				self.end = false;
				self.bricks = 0;
				self.speed = 0.5;
				self.keypressed = -(1);
				self.init_field ();
				self.FigPos = list ([0, int (self.COLS / 2) - 1, self.tetrominoes [randint (0, self.lt - 1)]]);
				self.new_tetrom = self.tetrominoes [randint (0, self.lt - 1)];
				self.new_brick = '\n'.join ((function () {
					var __accu0__ = [];
					var __iterable0__ = self.new_tetrom;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var b = __iterable0__ [__index0__];
						__accu0__.append ((b [0] + b [1]) + b [2]);
					}
					return __accu0__;
				}) ());
				document.onkeydown = self.on_keypress;
				self.putFig (self.FigPos, 'X');
				self.loop ();
			});}
		});
		var tetris = Tetris ();
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Tetris = Tetris;
			__all__.__name__ = __name__;
			__all__.randint = randint;
			__all__.tetris = tetris;
		__pragma__ ('</all>')
	}) ();
