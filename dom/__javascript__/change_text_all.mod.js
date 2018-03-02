	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.text1 = 'Hello, DOM!';
				self.text2 = 'Hello, Python!';
				self.text3 = 'Hello, User!';
				self.text4 = 'Hello, Transcrypt!';
				self.text5 = 'Hello, Javascript!';
				self.text6 = 'Hello, Guido!';
				self.text7 = 'Testing DOM';
				self.text8 = '2nd line';
				self.text9 = '3rd line';
				self.strs = list ([self.text1, self.text2, self.text3, self.text4, self.text5, self.text6, self.text7, self.text8, self.text9]);
				self.pointer = 0;
			});},
			get change () {return __get__ (this, function (self) {
				var classes_p = document.querySelectorAll ('p.intro');
				var text = '';
				var __iterable0__ = enumerate (classes_p);
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var p = __left0__ [0];
					var para = __left0__ [1];
					var text = (text + para.innerHTML) + '<br>';
					para.innerHTML = self.strs [p + self.pointer];
				}
				self.pointer = __mod__ (self.pointer + 3, 9);
				document.getElementById ('output').innerHTML = 'Taken from changed column:<br>' + text;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
