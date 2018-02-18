	(function () {
		var __name__ = '__main__';
		var TestSystem = __class__ ('TestSystem', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.askname = 'What is your name, dear?';
				self.askage = 'And what is your age?';
			});},
			get questions () {return __get__ (this, function (self) {
				confirm ('Are you ready?');
				self.ask_name ();
				self.ask_age ();
				try {
					var age = int (self.age);
					if (age < 21) {
						self.message = (('Sorry, ' + self.py_name) + ", you're too young to enter with ") + self.age;
					}
					else {
						self.message = 'Welcome, ' + self.py_name;
					}
				}
				catch (__except0__) {
					self.message = 'You are to silly to enter your age.';
				}
				alert (self.message);
			});},
			get ask_name () {return __get__ (this, function (self) {
				self.py_name = prompt (self.askname, '');
			});},
			get ask_age () {return __get__ (this, function (self) {
				self.age = prompt ((('Hello, ' + self.py_name) + '. ') + self.askage, '');
			});}
		});
		var testSystem = TestSystem ();
		__pragma__ ('<all>')
			__all__.TestSystem = TestSystem;
			__all__.__name__ = __name__;
			__all__.testSystem = testSystem;
		__pragma__ ('</all>')
	}) ();
