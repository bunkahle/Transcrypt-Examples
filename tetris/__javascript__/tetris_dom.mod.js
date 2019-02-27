	(function () {
		var time = {};
		var randint = __init__ (__world__.random).randint;
		__nest__ (time, '', __init__ (__world__.time));
		var Tetris = __class__ ('Tetris', [object], {
			get __init__ () {return __get__ (this, function (self) {
				self.ROWS = 10;
				self.COLS = 20;
				self.FELD = list ([]);
				self.FELD = self.init_field (self.COLS, self.ROWS, self.FELD);
			});},
			get mult_string () {return __get__ (this, function (self, s, c) {
				var new_row = '';
				for (var i = 0; i < c; i++) {
					new_row += s;
				}
				return new_row;
			});},
			get show_feld () {return __get__ (this, function (self, COLS, ROWS, FELD) {
				var sfeld = ('+' + self.mult_string ('-', COLS)) + '+<br>';
				for (var i = 0; i < ROWS; i++) {
					sfeld += ('|' + FELD [i].__getslice__ (1, -(1), 1)) + '|<br>';
				}
				sfeld += ('+' + self.mult_string ('-', COLS)) + '+<br>';
				document.getElementById ('canvas').innerHTML = sfeld;
			});},
			get chkBoard () {return __get__ (this, function (self, FELD, ROWS, COLS, score) {
				var deleted = true;
				while (deleted) {
					var deleted = false;
					for (var i = 0; i < ROWS; i++) {
						if (!(__in__ ('.', FELD [i]))) {
							FELD.py_pop (i);
							FELD.insert (0, ('|' + '.' * COLS) + '|');
							var score = score + COLS;
							var deleted = true;
							break;
						}
					}
				}
				return score;
			});},
			get testCollision () {return __get__ (this, function (self, FELD, FP) {
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						try {
							if (FP [2] [i] [j] == 'X' && FELD [FP [0] + i] [FP [1] + j] == 'X') {
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
			get putFig () {return __get__ (this, function (self, FELD, FP, mode) {
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						try {
							if (FP [2] [i] [j] == 'X') {
								FELD [FP [0] + i] = (FELD [FP [0] + i].__getslice__ (0, FP [1] + j, 1) + mode) + FELD [FP [0] + i].__getslice__ ((FP [1] + j) + 1, null, 1);
							}
						}
						catch (__except0__) {
							// pass;
						}
					}
				}
			});},
			get MoveFig () {return __get__ (this, function (self, FELD, FP, key, d) {
				var return_success = function (F, success) {
					self.putFig (FELD, F, 'X');
					self.keypressed = -(1);
					return tuple ([success, F]);
				};
				self.ckeys = dict ({'up': 38, 'right': 39, 'left': 37, 'down': 40, 'esc': 27, 'quit': 113, 'pause': 112});
				var FPC = list ([FP [0], FP [1], FP [2]]);
				if (key == self.ckeys ['left']) {
					FPC [1] = FPC [1] - d;
				}
				else {
					if (key == self.ckeys ['right']) {
						FPC [1] = FPC [1] + d;
					}
					else {
						if (key == self.ckeys ['down']) {
							if (FPC [0] < self.ROWS - 4) {
								FPC [0] = FPC [0] + d * 2;
							}
						}
						else {
							if (key == self.ckeys ['up']) {
								FPC [2] = self.RotFig (FPC [2], 1);
							}
							else {
								FPC [0] = FPC [0] + d;
							}
						}
					}
				}
				self.putFig (FELD, FP, '.');
				if (!(self.testCollision (FELD, FPC))) {
					return return_success (FPC, 1);
				}
				else {
					if (key == self.ckeys ['left']) {
						FPC [1] = FPC [1] + d;
						FPC [0] = FPC [0] + d;
					}
					else {
						if (key == self.ckeys ['right']) {
							FPC [1] = FPC [1] - d;
							FPC [0] = FPC [0] + d;
						}
						else {
							if (key == self.ckeys ['down']) {
								FPC [0] = FPC [0] - d;
							}
							else {
								if (key == self.ckeys ['up']) {
									FPC [2] = list ([FP [2] [0], FP [2] [1], FP [2] [2]]);
									FPC [0] = FPC [0] + d;
								}
							}
						}
					}
					if (!(self.testCollision (FELD, FPC))) {
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
			get wait () {return __get__ (this, function (self) {
				if (self.keypressed == -(1)) {
					setTimeout (self.wait, 50);
				}
			});},
			get showfield () {return __get__ (this, function (self, COLS, ROWS, FELD, score, counter, msg, speed) {
				var key = '';
				document.getElementById ('next').innerHTML = ((((msg + '\n') + str (counter)) + ' Score: ') + str (score + counter)) + ' ';
				self.show_feld (COLS, ROWS, FELD);
			});},
			get on_keypress () {return __get__ (this, function (self, e) {
				var kc = e.keyCode;
				var cc = e.charCode;
				self.ckeys = dict ({'up': 38, 'right': 39, 'left': 37, 'down': 40, 'esc': 27, 'quit': 113, 'pause': 112});
				var __iterable0__ = self.ckeys.items ();
				for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
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
			get clearscreen () {return __get__ (this, function (self) {
				document.getElementById ('canvas').innerHTML = '';
				document.getElementById ('title').innerHTML = 'Your score is: 0';
				self.FELD = self.init_field (self.COLS, self.ROWS, self.FELD);
			});},
			get loop () {return __get__ (this, function (self) {
				clearTimeout (self.cont);
				self.counter++;
				self.score = self.score + 1;
				var msg = ('Next Brick:<pre>' + self.new_brick) + '</pre>';
				self.showfield (self.COLS, self.ROWS, self.FELD, self.score, self.counter, msg, self.speed);
				if (self.keypressed == 27 || self.keypressed == 113) {
					document.getElementById ('title').innerHTML = 'Game over. Your score is: ' + str (self.score + self.counter);
					return ;
				}
				var __left0__ = self.MoveFig (self.FELD, self.FigPos, self.keypressed, 1);
				var move = __left0__ [0];
				self.FigPos = __left0__ [1];
				if (!(move)) {
					var score = self.chkBoard (self.FELD, self.ROWS, self.COLS, self.score);
					self.FigPos = list ([0, int (self.COLS / 2) - 1, self.new_tetrom]);
					self.new_tetrom = self.tetrominoes [randint (0, self.lt - 1)];
					self.new_brick = ('<pre>' + '\n'.join (function () {
						var __accu0__ = [];
						var __iterable0__ = self.new_tetrom;
						for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
							var b = __iterable0__ [__index0__];
							__accu0__.append ((b [0] + b [1]) + b [2]);
						}
						return __accu0__;
					} ())) + '</pre>';
					self.bricks++;
					if (self.testCollision (self.FELD, self.FigPos)) {
						document.getElementById ('title').innerHTML = 'Game over. Your score is: ' + str (self.score + self.counter);
						return ;
					}
					self.putFig (self.FELD, self.FigPos, 'X');
				}
				self.cont = setTimeout (self.loop, self.speed * 1000);
			});},
			get init_field () {return __get__ (this, function (self, COLS, ROWS, FELD) {
				var FELD = list ([]);
				for (var i = 0; i < ROWS; i++) {
					var new_row = self.mult_string ('.', COLS);
					FELD.append (('X' + new_row) + 'X');
				}
				var new_row = self.mult_string ('X', COLS + 2);
				FELD.append (new_row);
				try {
					self.show_feld (COLS, ROWS, FELD);
				}
				catch (__except0__) {
					// pass;
				}
				self.score = 0;
				self.counter = 0;
				return FELD;
			});},
			get run () {return __get__ (this, function (self) {
				document.getElementById ('next').innerHTML = 'Started';
				self.pause = false;
				self.bricks = 0;
				self.speed = 0.5;
				self.COLS = 20;
				self.ROWS = 10;
				self.keypressed = -(1);
				self.tetrominoes = list ([list ([list (['.', 'X', 'X']), list (['X', 'X', '.']), list (['.', '.', '.'])]), list ([list (['X', 'X', '.']), list (['.', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', '.', '.']), list (['X', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', 'X', '.']), list (['.', 'X', '.']), list (['.', 'X', '.'])]), list ([list (['.', '.', '.']), list (['X', 'X', 'X']), list (['.', '.', 'X'])]), list ([list (['.', '.', 'X']), list (['X', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', 'X', 'X']), list (['.', 'X', 'X']), list (['.', '.', '.'])]), list ([list (['.', '.', '.']), list (['.', 'X', '.']), list (['X', 'X', 'X'])])]);
				self.lt = len (self.tetrominoes);
				self.FELD = self.init_field (self.COLS, self.ROWS, self.FELD);
				var r = randint (0, self.lt - 1);
				self.FigPos = list ([0, int (self.COLS / 2) - 1, self.tetrominoes [randint (0, self.lt - 1)]]);
				self.new_tetrom = self.tetrominoes [randint (0, self.lt - 1)];
				self.new_brick = '\n'.join (function () {
					var __accu0__ = [];
					var __iterable0__ = self.new_tetrom;
					for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
						var b = __iterable0__ [__index0__];
						__accu0__.append ((b [0] + b [1]) + b [2]);
					}
					return __accu0__;
				} ());
				document.onkeypress = self.on_keypress;
				self.putFig (self.FELD, self.FigPos, 'X');
				self.loop ();
			});}
		});
		var tetris = Tetris ();
		__pragma__ ('<use>' +
			'random' +
			'time' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Tetris = Tetris;
			__all__.randint = randint;
			__all__.tetris = tetris;
		__pragma__ ('</all>')
	}) ();
