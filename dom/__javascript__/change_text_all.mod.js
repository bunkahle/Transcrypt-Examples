	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.text = 'Hello, DOM!';
				self.text2 = 'Hello, Python!';
				self.text3 = 'Hello, User!';
				self.strs = list ([self.text, self.text2, self.text3]);
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
					para.innerHTML = self.strs [p];
				}
				document.getElementById ('output').innerHTML = text;
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
