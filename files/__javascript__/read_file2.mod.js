	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get read_file () {return __get__ (this, function (self) {
				$ ('#demo').load ('https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md');
			});},
			get read_file_var () {return __get__ (this, function (self) {
				$.get ('https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md', self.get_filecontent);
			});},
			get get_filecontent () {return __get__ (this, function (self, response) {
				self.file_content = response;
				alert (self.file_content);
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
