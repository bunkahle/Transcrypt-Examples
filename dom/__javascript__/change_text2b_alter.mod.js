	(function () {
		var __name__ = '__main__';
		var tf =  __init__ (__world__.TranscryptFrame);
		var insert = function () {
			var myElement = tf.doc_id ('intro');
			tf.doc_id ('demo').innerHTML = 'The text from the intro paragraph is ' + myElement.innerHTML;
		};
		__pragma__ ('<use>' +
			'TranscryptFrame' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.insert = insert;
		__pragma__ ('</all>')
	}) ();
