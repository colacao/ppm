$(function() {
	var isAndroid = (/android/gi).test(navigator.appVersion),
		isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
		isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
		hasTouch = 'ontouchstart' in window && !isTouchPad,
		START_EV = hasTouch ? 'touchstart' : 'mousedown',
		MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
		END_EV = hasTouch ? 'touchend' : 'mouseup',
		CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup'
	$('#selectmenu24').bind("change", function(e) {
		var el = $('#selectmenu24');
		 el.data('begin',"");
		  el.data('end',"");
		if (this.options[this.options.selectedIndex].value == 3) {
			CalendarManage.show($('#selectmenu24')[0]);
		} else {
			CalendarManage.hide();
		}
	});
	// document.documentElement.onmousedown = function(e) {
		// if (e.target.tagName != "INPUT") {
			// setTimeout(function() {
				// $('#searchinput1').trigger('blur');
			// }, 100);
		// }
	// }
	
	
	
	
	$('#searchinput1').bind('focus', function() {
		if ($(this).css('position') == "absolute") {
			return false;
		}
		var cel = $(this).clone();
		cel.attr('id', '');
		cel.appendTo(this.parentNode);

		this.cel = cel;
		this.pel = this.parentNode;
		cel.css({
			visibility: "hidden"
		});
		$(this).appendTo($('#ff1')).css({
			position: "absolute",
			left: 0,
			"z-index": 996,
			top: $("#scrolle").scrollTop() - 5 + 'px',
			width: $("#scrolle").width() - 25 + 'px'
		});

		this.focus();
	});
	$('#searchinput1').bind('blur', function(e) {

		var self = this;
		var xy = $(this.cel).offset();
		var pel = $(this).appendTo(this.pel);
		if (xy) {
			pel.css({
				position: "absolute",
				left: xy.left + 'px',
				top: xy.top + 'px'
			});
			$(self).removeAttr('style', '');
			self.cel.remove();
			$('#cce').hide();
		}
	});

})