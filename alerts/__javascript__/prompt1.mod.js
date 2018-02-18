	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.testMessage = 'TestMessage';
			});},
			get prompt_text () {return __get__ (this, function (self) {
				var entry = prompt ('Please enter any text', '');
				if (entry == '') {
					alert ('Nothing has been entered');
				}
				if (entry === null) {
					alert ('None - Cancel has been pressed');
				}
				alert ('Entry was:' + entry);
				return entry;
			});},
			get prompt_test () {return __get__ (this, function (self) {
				var ret = self.prompt_text ();
				document.getElementById ('result').innerHTML = 'Result of entry:' + ret;
			});},
			get greet_name () {return __get__ (this, function (self) {
				var py_name = prompt ('What is your name?', 'Transcrypt-User');
				alert ('Hallo, ' + py_name);
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
