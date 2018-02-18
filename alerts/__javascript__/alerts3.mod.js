	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.testMessage = 'TestMessage';
			});},
			get alert_standard () {return __get__ (this, function (self) {
				alert (self.testMessage);
			});},
			get alert_text () {return __get__ (this, function (self, text) {
				alert (text);
			});},
			get prompt_text () {return __get__ (this, function (self) {
				var entry = prompt ('Please enter any text', '');
				alert (entry);
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
