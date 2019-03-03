	(function () {
		var __name__ = '__main__';
		var GridGame = __class__ ('GridGame', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.moves = 0;
				self.gridarray = (function () {
					var __accu0__ = [];
					for (var i = 0; i < 3; i++) {
						__accu0__.append ((function () {
							var __accu1__ = [];
							for (var j = 0; j < 3; j++) {
								__accu1__.append (false);
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
			});},
			get createTable () {return __get__ (this, function (self) {
				document.writeln ('<table id="table1">');
				for (var i = 0; i < 3; i++) {
					document.writeln (('  <tr id="' + str (i)) + '">');
					for (var j = 0; j < 3; j++) {
						document.write ((('      <td bgcolor="grey" width=100 height=100 align="center" id="' + str (i)) + str (j)) + '" onclick="gridgame.gridGame.getPosition(this)">');
						document.writeln (' </td>');
					}
					document.writeln ('  </tr>');
				}
				document.writeln ('</table>');
			});},
			get getPosition () {return __get__ (this, function (self, pos) {
				self.moves = self.moves + 1;
				self.updateMoves ();
				var x = int (pos.id [0]);
				var y = int (pos.id [1]);
				self.gridarray [x] [y] = !(self.gridarray [x] [y]);
				if (x > 0) {
					self.gridarray [x - 1] [y] = !(self.gridarray [x - 1] [y]);
				}
				if (x < 2) {
					self.gridarray [x + 1] [y] = !(self.gridarray [x + 1] [y]);
				}
				if (y > 0) {
					self.gridarray [x] [y - 1] = !(self.gridarray [x] [y - 1]);
				}
				if (y < 2) {
					self.gridarray [x] [y + 1] = !(self.gridarray [x] [y + 1]);
				}
				self.do_lighting ();
			});},
			get do_lighting () {return __get__ (this, function (self) {
				var countwhite = 0;
				for (var x = 0; x < 3; x++) {
					for (var y = 0; y < 3; y++) {
						var cell = document.getElementById (str (x) + str (y));
						if (self.gridarray [x] [y]) {
							cell.bgColor = 'white';
							countwhite++;
						}
						else {
							cell.bgColor = 'grey';
						}
					}
				}
				if (countwhite == 9) {
					alert ('You have managed to turn all lights on! Congratulations');
				}
			});},
			get restart () {return __get__ (this, function (self) {
				self.moves = 0;
				self.gridarray = (function () {
					var __accu0__ = [];
					for (var i = 0; i < 3; i++) {
						__accu0__.append ((function () {
							var __accu1__ = [];
							for (var j = 0; j < 3; j++) {
								__accu1__.append (0);
							}
							return __accu1__;
						}) ());
					}
					return __accu0__;
				}) ();
				self.updateMoves ();
				for (var x = 0; x < 3; x++) {
					for (var y = 0; y < 3; y++) {
						var cell = document.getElementById (str (x) + str (y));
						cell.bgColor = 'grey';
					}
				}
			});},
			get updateMoves () {return __get__ (this, function (self) {
				document.getElementById ('moves').innerText = 'Moves: ' + str (self.moves);
			});}
		});
		var gridGame = GridGame ();
		__pragma__ ('<all>')
			__all__.GridGame = GridGame;
			__all__.__name__ = __name__;
			__all__.gridGame = gridGame;
		__pragma__ ('</all>')
	}) ();
