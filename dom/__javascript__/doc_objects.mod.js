	(function () {
		var __name__ = '__main__';
		var display_document_objects = function (self) {
			var text = ('Number of anchors are: ' + document.anchors.length) + '<br>\n';
			var text = ((text + 'document.body.innerHTML.length:') + document.body.innerHTML.length) + '<br>\n';
			var text = ((text + 'Number of embeds: ') + document.embeds.length) + '<br>\n';
			var text = ((text + 'Number of forms: ') + document.forms.length) + '<br>\n';
			var text = ((text + 'Number of images: ') + document.images.length) + '<br>\n';
			var text = ((text + 'Number of links: ') + document.links.length) + '<br>\n';
			var text = ((text + 'Number of scripts: ') + document.scripts.length) + '<br>\n';
			var text = ((text + 'The title of this document is: ') + document.title) + '<br>\n';
			document.getElementById ('info').innerHTML = text;
		};
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.display_document_objects = display_document_objects;
		__pragma__ ('</all>')
	}) ();
