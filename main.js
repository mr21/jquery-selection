$(function() {

	$('#moreAt')[top.location === self.location ? 'show' : 'remove']();

	function getColor(el) {
		var style = el.getAttribute('style');
		return style.substr(style.indexOf('#'));
	}

	var
		jq_list = $('.list ol'),
		selection = $.plugin_selection($('.colors')),
		elemsSelected = selection.getArraySelection();

	selection
		// .lockCtrlKey()
		// .disableShiftKey()
		.onElementsAdded(function(jq_elems) {
			var str = '.onElementsAdded() <----';
			$.each(jq_elems, function() {
				str += ' ' + getColor(this);
			});
			console.log(str);
		})
		.onElementsRemoved(function(jq_elems) {
			var str = '.onElementsRemoved() <--';
			$.each(jq_elems, function() {
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
