	(function () {
		var __name__ = '__main__';
		var createTable = function () {
			var body = document.getElementsByTagName ('body') [0];
			var tbl = document.createElement ('TABLE');
			tbl.setAttribute ('id', 'myTable');
			document.getElementById ('table1').appendChild (tbl);
			var tblBody = document.createElement ('tbody');
			for (var i = 0; i < 4; i++) {
				var y = document.createElement ('TR');
				y.setAttribute ('id', 'myTr' + str (i));
				document.getElementById ('myTable').appendChild (y);
				for (var j = 0; j < 5; j++) {
					var x = document.createElement ('TD');
					x.setAttribute ('id', ('TD' + str (i)) + str (j));
					var t = document.createTextNode ((((('1' + ' (') + str (i)) + ',') + str (j)) + ')');
					x.appendChild (t);
					y.appendChild (x);
				}
				tblBody.appendChild (y);
			}
			tbl.appendChild (tblBody);
			tbl.setAttribute ('border', '2');
		};
		var preve = function () {
			var tbl = document.getElementById ('myTable');
			var nr = tbl.rows [1].cells [1].innerHTML.__getslice__ (0, 2, 1);
			if (nr == '' || nr == '&n') {
				var nr = '2';
			}
			if (int (nr) > 1) {
				var nr = str (int (nr) - 1);
				write_table (nr);
			}
		};
		var nexte = function () {
			var tbl = document.getElementById ('myTable');
			var nr = tbl.rows [1].cells [1].innerHTML.__getslice__ (0, 2, 1);
			console.log ('nr' + nr);
			if (nr == '' || nr == '&n') {
				var nr = '0';
			}
			if (int (nr) < 10) {
				var nr = str (int (nr) + 1);
				write_table (nr);
			}
		};
		var cleare = function () {
			write_table ('');
		};
		var write_table = function (nr) {
			var tbl = document.getElementById ('myTable');
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 5; j++) {
					var idname = ('TD' + str (i)) + str (j);
					if (nr != '') {
						tbl.rows [i].cells [j].innerHTML = ((((nr + ' (') + str (i)) + ',') + str (j)) + ')';
					}
					else {
						tbl.rows [i].cells [j].innerHTML = '&nbsp;';
					}
				}
			}
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.cleare = cleare;
			__all__.createTable = createTable;
			__all__.nexte = nexte;
			__all__.preve = preve;
			__all__.write_table = write_table;
		__pragma__ ('</all>')
	}) ();
