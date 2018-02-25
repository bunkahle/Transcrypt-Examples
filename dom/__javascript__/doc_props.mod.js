	(function () {
		var __name__ = '__main__';
		var display_document_properties = function (self) {
			var text = ('document.baseURI:' + document.baseURI) + '<br>\n';
			var text = ((text + 'document.doctype: ') + document.doctype) + '<br>\n';
			var text = ((text + 'document.documentURI: ') + document.documentURI) + '<br>\n';
			var text = ((text + 'document.domain: ') + document.domain) + '<br>\n';
			var text = ((text + 'document.inputEncoding: ') + document.inputEncoding) + '<br>\n';
			var text = ((text + 'document.lastModified: ') + document.lastModified) + '<br>\n';
			var text = ((text + 'document.title: ') + document.title) + '<br>\n';
			var text = ((text + 'document.URL: ') + document.URL) + '<br>\n';
			document.getElementById ('info').innerHTML = text;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.display_document_properties = display_document_properties;
		__pragma__ ('</all>')
	}) ();
