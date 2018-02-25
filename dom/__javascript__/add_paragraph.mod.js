	(function () {
		var __name__ = '__main__';
		var window = document;
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.text = 'Hello, DOM!';
				self.para = 'A new paragraph';
				self.textblock = 'This is an expandable text block.';
				self.button2 = document.getElementById ('button2');
				self.clicks = 0;
			});},
			get insert () {return __get__ (this, function (self) {
				document.querySelector ('output').innerText = self.text;
			});},
			get pressed () {return __get__ (this, function (self) {
				var container = document.getElementById ('textblock');
				var newElm = document.createElement ('p');
				newElm.innerText = self.para;
				container.appendChild (newElm);
			});},
			get rest () {return __get__ (this, function (self, e) {
				self.clicks = self.clicks + 1;
				document.querySelector ('test').innerText = 'testing ' + str (self.clicks);
				document.getElementById ('textblock').innerHTML = ('<p>' + self.textblock) + '</p>';
				return ;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
			__all__.window = window;
		__pragma__ ('</all>')
	}) ();
