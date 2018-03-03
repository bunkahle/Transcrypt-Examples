	(function () {
		var __name__ = '__main__';
		var SideBar = __class__ ('SideBar', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.menuclosed = true;
			});},
			get links () {return __get__ (this, function (self, event) {
				document.getElementById ('clicktarget').innerHTML = 'Click came from: ' + event.target.id;
			});},
			get changeNav () {return __get__ (this, function (self) {
				self.menuclosed = !(self.menuclosed);
				if (self.menuclosed) {
					self.closeNav ();
				}
				else {
					self.openNav ();
				}
			});},
			get openNav () {return __get__ (this, function (self) {
				document.getElementById ('mySidenav').style.width = '250px';
				document.getElementById ('mainContent').style.marginLeft = '250px';
				document.getElementById ('men').innerHTML = '&#9776; close';
			});},
			get closeNav () {return __get__ (this, function (self) {
				document.getElementById ('mySidenav').style.width = '0';
				document.getElementById ('mainContent').style.marginLeft = '0%';
				document.getElementById ('men').innerHTML = '&#9776; open';
			});}
		});
		var sideBar = SideBar ();
		__pragma__ ('<all>')
			__all__.SideBar = SideBar;
			__all__.__name__ = __name__;
			__all__.sideBar = sideBar;
		__pragma__ ('</all>')
	}) ();
