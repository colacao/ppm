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
	document.documentElement.onmousedown = function(e) {
		if (e.target.tagName != "INPUT") {
			setTimeout(function() {
				$('#searchinput1').trigger('blur');
			}, 100);
		}
	}
	
	
	
	
	$('#searchinput1').bind('focus', function() {
		var h  = $(this.parentNode).outerHeight()+1;
		if ($(this).css('position') == "absolute") {
			return false;
		}
		
		$(this.parentNode).css('height',h+'px');
	
		this.pel = this.parentNode;
		
		$(this).appendTo($('#ff1')).css({
			position: "absolute",
			left: 0,
			"z-index": 996,
			top: $("#scroller").scrollTop() - 5 + 'px',
			width: $("#scroller").width() - 25 + 'px'
		});

		this.focus();
	});
	$('#searchinput1').bind('blur', function(e) {

		var self = this;
		
		var pel = $(this).appendTo(this.pel);
		
		$(self).removeAttr('style', '');
			
		
	});

});
$(function(){
		
		
		
		setTimeout(function(){
			$('#scroller')[0].style.webkitTransition="all 0.2s ease";
		},200);
		$('#ff1').css("width",$(window).width()-25+'px');
		$('#one').css("width",$(window).width()+'px');
		$('#scroller').css("width",$(window).width()*2+25+'px');
		$('#bb1').hide();
		$("#calendars").css("width",$(window).width()*3+'px');
		$("#calendars>div").css("width",$(window).width()+'px');
		$('#searchinput1').PageSelector({
			configs: configs,
			onChange: function(data) {
			}
		});
		 $("#selectmenu24").CalendarManage({
                 options: {
                     showWeek: false,
                     nextEl: "#t3",
                     todayClass: "rrrrrrrrrrrr",
                        today:"2012-09-18",
                     step: 1,
                     items: [{
                         target: "calendar0",
						 id:"#calendar0",
                         type: 'left',
                         autoRender: false,
                         showPrev: false,
                         showNext: false
                     },{
                         target: "calendar1",
						 id:"#calendar1",
                         type: '',
                         autoRender: false,
                         showPrev: false,
                         showNext: false
                     },{
                         target: "calendar2",
						 id:"#calendar2",
                         type: 'right',
                         autoRender: false,
                         showPrev: false,
                         showNext: false
                     }],
                     closeDate: {
                         '2012-12-18': "说明一下为什么不可用",
                         '2012-10-20': "你好世界",
                         '2012-09-29': "你好世界"
                     }
                 },
                 listeners: {
                     onShow: function () {
                        
                     },
                     onChange: function (input, value, isClick) {
							setDateValue(value);
						
                     }
                 }
             });
	});
	function setDateValue(v){
		var el = $('#selectmenu24');
		var begin  = el.data('begin');
		var end = el.data('end');
		if(!begin){
			el.data('begin',v);
		}
		if(begin && !end){
			el.data('end',v);
			CalendarManage.hide();
		}
		el.prev().find('span').eq(0).html([el.data('begin'),el.data('end')].join('/'));
	}
	function back11(){
		$('#scroller')[0].style.marginLeft =  "0px";
		$('#bb1').hide();
	}
	function abc(){
		
		$('#scroller')[0].style.marginLeft = "-"+$(window).width()+ "px";
		$('#bb1').show();
	}