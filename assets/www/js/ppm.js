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
			top: $("#scroller").scrollTop() - 5 + 'px'
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
                         '2012-12-18': "1111"
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
		var data = {"code":0,"message":"","sql":"CALL query_page_load('2012-8-21', '2012-9-20', 'DAY', null,NULL, 100101, 'NULL', 'Company')","type":"DAY","date":"2012-09-20T00:58:49.888Z","data":[{"NULL":"3138.1657","Date":1345478400000,"Company":"T"},{"NULL":"3470.7489","Date":1345478400000,"Company":"U"},{"NULL":"4213.7169","Date":1345478400000,"Company":""},{"NULL":"5530.1651","Date":1345478400000,"Company":"M"},{"NULL":"3071.1677","Date":1345564800000,"Company":"T"},{"NULL":"3472.6176","Date":1345564800000,"Company":"U"},{"NULL":"4246.7434","Date":1345564800000,"Company":""},{"NULL":"5500.5333","Date":1345564800000,"Company":"M"},{"NULL":"3870.1367","Date":1345651200000,"Company":"U"},{"NULL":"4815.4212","Date":1345651200000,"Company":""},{"NULL":"5767.8297","Date":1345651200000,"Company":"M"},{"NULL":"3340.6169","Date":1345651200000,"Company":"T"},{"NULL":"3644.4134","Date":1345737600000,"Company":"U"},{"NULL":"4264.5787","Date":1345737600000,"Company":""},{"NULL":"5647.5830","Date":1345737600000,"Company":"M"},{"NULL":"3143.3344","Date":1345737600000,"Company":"T"},{"NULL":"4187.4051","Date":1345824000000,"Company":""},{"NULL":"5672.2549","Date":1345824000000,"Company":"M"},{"NULL":"3048.2362","Date":1345824000000,"Company":"T"},{"NULL":"3440.0354","Date":1345824000000,"Company":"U"},{"NULL":"4141.5764","Date":1345910400000,"Company":""},{"NULL":"5925.9120","Date":1345910400000,"Company":"M"},{"NULL":"3095.8140","Date":1345910400000,"Company":"T"},{"NULL":"3459.9446","Date":1345910400000,"Company":"U"},{"NULL":"4408.6938","Date":1345996800000,"Company":""},{"NULL":"5591.1852","Date":1345996800000,"Company":"M"},{"NULL":"3200.7424","Date":1345996800000,"Company":"T"},{"NULL":"3611.6949","Date":1345996800000,"Company":"U"},{"NULL":"5529.4340","Date":1346083200000,"Company":"M"},{"NULL":"3216.6607","Date":1346083200000,"Company":"T"},{"NULL":"3575.3969","Date":1346083200000,"Company":"U"},{"NULL":"4421.1813","Date":1346083200000,"Company":""},{"NULL":"3200.6688","Date":1346169600000,"Company":"T"},{"NULL":"3562.7908","Date":1346169600000,"Company":"U"},{"NULL":"4316.6307","Date":1346169600000,"Company":""},{"NULL":"5617.1408","Date":1346169600000,"Company":"M"},{"NULL":"3587.8584","Date":1346256000000,"Company":"T"},{"NULL":"3723.6229","Date":1346256000000,"Company":"U"},{"NULL":"4644.8132","Date":1346256000000,"Company":""},{"NULL":"5678.4254","Date":1346256000000,"Company":"M"},{"NULL":"3674.5180","Date":1346342400000,"Company":"T"},{"NULL":"3763.3207","Date":1346342400000,"Company":"U"},{"NULL":"4632.8220","Date":1346342400000,"Company":""},{"NULL":"5840.3590","Date":1346342400000,"Company":"C"},{"NULL":"6590.9248","Date":1346342400000,"Company":"M"},{"NULL":"3105.7439","Date":1346428800000,"Company":"T"},{"NULL":"3566.6696","Date":1346428800000,"Company":"U"},{"NULL":"4328.8833","Date":1346428800000,"Company":""},{"NULL":"6003.2770","Date":1346428800000,"Company":"M"},{"NULL":"3520.0595","Date":1346515200000,"Company":"U"},{"NULL":"4193.7729","Date":1346515200000,"Company":""},{"NULL":"6230.4400","Date":1346515200000,"Company":"M"},{"NULL":"3055.3590","Date":1346515200000,"Company":"T"},{"NULL":"3876.8692","Date":1346601600000,"Company":"U"},{"NULL":"4780.0411","Date":1346601600000,"Company":""},{"NULL":"5768.0980","Date":1346601600000,"Company":"M"},{"NULL":"3959.5647","Date":1346601600000,"Company":"T"},{"NULL":"4668.8112","Date":1346688000000,"Company":""},{"NULL":"5535.0488","Date":1346688000000,"Company":"M"},{"NULL":"3854.2859","Date":1346688000000,"Company":"T"},{"NULL":"3798.3683","Date":1346688000000,"Company":"U"},{"NULL":"4398.9119","Date":1346774400000,"Company":""},{"NULL":"5401.5807","Date":1346774400000,"Company":"M"},{"NULL":"3521.5158","Date":1346774400000,"Company":"T"},{"NULL":"3575.5079","Date":1346774400000,"Company":"U"},{"NULL":"5271.0416","Date":1346860800000,"Company":"M"},{"NULL":"3150.8701","Date":1346860800000,"Company":"T"},{"NULL":"3497.5515","Date":1346860800000,"Company":"U"},{"NULL":"4258.6734","Date":1346860800000,"Company":""},{"NULL":"5739.7419","Date":1346947200000,"Company":"M"},{"NULL":"3194.8460","Date":1346947200000,"Company":"T"},{"NULL":"3660.9301","Date":1346947200000,"Company":"U"},{"NULL":"4296.4693","Date":1346947200000,"Company":""},{"NULL":"3168.0512","Date":1347033600000,"Company":"T"},{"NULL":"3670.8405","Date":1347033600000,"Company":"U"},{"NULL":"4229.5626","Date":1347033600000,"Company":""},{"NULL":"6247.8864","Date":1347033600000,"Company":"M"},{"NULL":"3129.5862","Date":1347120000000,"Company":"T"},{"NULL":"3599.1729","Date":1347120000000,"Company":"U"},{"NULL":"4204.7176","Date":1347120000000,"Company":""},{"NULL":"6257.3566","Date":1347120000000,"Company":"M"},{"NULL":"3656.2655","Date":1347206400000,"Company":"U"},{"NULL":"4381.5037","Date":1347206400000,"Company":""},{"NULL":"5891.2548","Date":1347206400000,"Company":"M"},{"NULL":"3380.4550","Date":1347206400000,"Company":"T"},{"NULL":"3606.9685","Date":1347292800000,"Company":"U"},{"NULL":"4311.9030","Date":1347292800000,"Company":""},{"NULL":"6036.7910","Date":1347292800000,"Company":"M"},{"NULL":"3386.9831","Date":1347292800000,"Company":"T"},{"NULL":"4386.9727","Date":1347379200000,"Company":""},{"NULL":"5679.2049","Date":1347379200000,"Company":"M"},{"NULL":"3358.1952","Date":1347379200000,"Company":"T"},{"NULL":"3678.0662","Date":1347379200000,"Company":"U"},{"NULL":"4228.9393","Date":1347465600000,"Company":""},{"NULL":"5665.6500","Date":1347465600000,"Company":"M"},{"NULL":"3136.4311","Date":1347465600000,"Company":"T"},{"NULL":"3538.0862","Date":1347465600000,"Company":"U"},{"NULL":"5517.0315","Date":1347552000000,"Company":"M"},{"NULL":"3035.9277","Date":1347552000000,"Company":"T"},{"NULL":"3440.8076","Date":1347552000000,"Company":"U"},{"NULL":"4107.5908","Date":1347552000000,"Company":""},{"NULL":"5906.6392","Date":1347638400000,"Company":"M"},{"NULL":"3003.8391","Date":1347638400000,"Company":"T"},{"NULL":"3415.0316","Date":1347638400000,"Company":"U"},{"NULL":"4061.5127","Date":1347638400000,"Company":""},{"NULL":"2966.8061","Date":1347724800000,"Company":"T"},{"NULL":"3461.6470","Date":1347724800000,"Company":"U"},{"NULL":"4074.4212","Date":1347724800000,"Company":""},{"NULL":"6386.5003","Date":1347724800000,"Company":"M"},{"NULL":"3065.7638","Date":1347811200000,"Company":"T"},{"NULL":"3508.6545","Date":1347811200000,"Company":"U"},{"NULL":"4191.0955","Date":1347811200000,"Company":""},{"NULL":"5665.1373","Date":1347811200000,"Company":"M"},{"NULL":"3501.5380","Date":1347897600000,"Company":"U"},{"NULL":"4094.9890","Date":1347897600000,"Company":""},{"NULL":"5106.8091","Date":1347897600000,"Company":"M"},{"NULL":"3088.9568","Date":1347897600000,"Company":"T"},{"NULL":"3458.1797","Date":1347984000000,"Company":"U"},{"NULL":"4023.9002","Date":1347984000000,"Company":""},{"NULL":"5346.9111","Date":1347984000000,"Company":"M"},{"NULL":"3142.3660","Date":1347984000000,"Company":"T"}]};
		
		// $('#scroller')[0].style.marginLeft = "-"+$(window).width()+ "px";
		// $('#bb1').show();
	}