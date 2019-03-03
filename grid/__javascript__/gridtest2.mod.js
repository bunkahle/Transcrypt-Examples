	(function () {
		var __name__ = '__main__';
		var createTable = function () {
			document.writeln ('<table id="table1">');
			for (var i = 0; i < 3; i++) {
				document.writeln (('  <tr id="' + str (i)) + '">');
				for (var j = 0; j < 3; j++) {
					document.write ((('      <td bgcolor="white" width=100 height=100 align="center" id="' + str (i)) + str (j)) + '" onclick="gridtest2.getPosition(this)">');
					document.writeln ((('Cell ID:' + str (i)) + str (j)) + '</td>');
				}
				document.writeln ('  </tr>');
			}
			document.writeln ('</table>');
		};
		var getPosition = function (pos) {
			pos.bgColor = '#ff0000';
			alert ((((('Cell index is: ' + pos.cellIndex) + ' and ID is ') + pos.id) + ' and text is ') + pos.innerText);
			var x = int (pos.id [1]);
			var y = int (pos.id [0]);
			var cell = document.getElementById (pos.id);
			cell.bgColor = '#ffffff';
			alert ((('row ' + pos.parentNode.rowIndex) + ' - column ') + pos.cellIndex);
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.createTable = createTable;
			__all__.getPosition = getPosition;
		__pragma__ ('</all>')
	}) ();
