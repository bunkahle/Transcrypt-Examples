	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				// pass;
			});},
			get info () {return __get__ (this, function (self) {
				var x = ('Browser CodeName: ' + navigator.appCodeName) + '<br>\n';
				var x = ((x + 'Browser Name: ') + navigator.appName) + '<br>\n';
				var x = ((x + 'Version Info: ') + navigator.appVersion) + '<br>\n';
				var x = ((x + 'Cookies Enabled: ') + navigator.cookieEnabled) + '<br>\n';
				var x = ((x + 'Language of the browser: ') + navigator.language) + '<br>\n';
				var x = ((x + 'Is the browser online? ') + navigator.onLine) + '<br>\n';
				var x = ((x + 'Platform: ') + navigator.platform) + '<br>\n';
				var x = ((x + "Browser's Engine Name: ") + navigator.product) + '<br>\n';
				var x = ((x + 'User-agent header sent: ') + navigator.userAgent) + '<br>\n';
				var x = ((x + 'Java Enabled: ') + navigator.javaEnabled ()) + '<br>\n';
				var x = (x + 'Data tainting enabled: ') + navigator.taintEnabled ();
				document.getElementById ('msg').innerHTML = x;
			});},
			get getLocation () {return __get__ (this, function (self) {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition (self.showPosition);
				}
				else {
					document.getElementById ('loc').innerHTML = 'Geolocation is not supported by this browser.';
				}
			});},
			get showPosition () {return __get__ (this, function (self, position) {
				document.getElementById ('loc').innerHTML = (('Latitude: ' + position.coords.latitude) + '<br>Longitude: ') + position.coords.longitude;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
