$(function() {

	function getColor(el) {
		var style = el.getAttribute('style');
		return style.substr(style.indexOf('#'));
	}

	var
		jq_list = $('#demo .list ol'),
		selection = $.plugin_selection($('#demo .colors')),
		elemsSelected = selection.getArraySelection(); // here you can access to the dynamique list of the actual selectionned elements.

	selection
		// .lockCtrlKey()
		// .disableShiftKey()
		.onElementsAdded(function() { // in this function the `this` is the a jQuery object.
			var str = '.onElementsAdded() <----';
			$.each(this, function() {
				str += ' ' + getColor(this);
			});
			console.log(str);
		})
		.onElementsRemoved(function() { // in this function the `this` is the a jQuery object.
			var str = '.onElementsRemoved() <--';
			$.each(this, function() {
				str += ' ' + getColor(this);
			});
			console.log(str);
		});

	$(document).click(function() {
		var str = '';
		$.each(elemsSelected, function() {
			var style = getColor(this);
			str += '<li><span style="border-color:'+style+'">'+style+'</span></li>';
		});
		if (str)
			jq_list.html(str);
	});

});
