/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 jquery.mb.components
 
 file: jquery.mb.simpleSlider.js
 last modified: 11/18/17 7:19 PM
 Version:  {{ version }}
 Build:  {{ buildnum }}
 
 Open Lab s.r.l., Florence - Italy 
 email:  matteo@open-lab.com
 blog: 	http://pupunzi.open-lab.com
 site: 	http://pupunzi.com
 	http://open-lab.com 
 
 Licences: MIT, GPL
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 
 Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

var nAgt=navigator.userAgent;function isTouchSupported(){var r=nAgt.msMaxTouchPoints,e="ontouchstart"in document.createElement("div");return!(!r&&!e)}jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var nameOffset,verOffset,ix,getOS=function(){var r={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(r.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(r.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(r.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(r.version=/Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],r.version=r.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(r.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(r.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(r.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(r.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(r.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(r.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(r.version="Unknown.Unknown"),r.name=r.name.toLowerCase(),r.major_version="Unknown",r.minor_version="Unknown","Unknown.Unknown"!=r.version&&(r.major_version=parseFloat(r.version.split(".")[0]),r.minor_version=parseFloat(r.version.split(".")[1])),r};if(jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10),-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(r,e){if("stringstring"!=typeof r+typeof e)return!1;for(var s=r.split("."),n=e.split("."),o=0,t=Math.max(s.length,n.length);o<t;o++){if(s[o]&&!n[o]&&0<parseInt(s[o])||parseInt(s[o])>parseInt(n[o]))return 1;if(n[o]&&!s[o]&&0<parseInt(n[o])||parseInt(s[o])<parseInt(n[o]))return-1}return 0};

(function (jQuery) {

	jQuery.simpleSlider = {
		defaults: {
			initialval : 0,
			maxVal     : 100,
			orientation: "h",
			readonly   : false,
			callback   : false
		},

		events: {
			start: jQuery.browser.mobile ? "touchstart" : "mousedown",
			end  : jQuery.browser.mobile ? "touchend" : "mouseup",
			move : jQuery.browser.mobile ? "touchmove" : "mousemove"
		},

		init: function (opt) {

			return this.each(function () {
				var el = this;
				var $el = jQuery(el);

				$el.addClass("simpleSlider");

				el.opt = {};

				jQuery.extend(el.opt, jQuery.simpleSlider.defaults, opt);
				jQuery.extend(el.opt, $el.data());

				var levelClass = el.opt.orientation == "h" ? "horizontal" : "vertical";
				var level = jQuery("<div/>").addClass("level").addClass(levelClass);

				$el.prepend(level);
				el.level = level;

				$el.css({cursor: "default"});

				if (el.opt.maxVal == "auto")
					el.opt.maxVal = jQuery(el).outerWidth();

				$el.updateSliderVal();

				if (!el.opt.readonly) {

					$el.on(jQuery.simpleSlider.events.start, function (e) {

						if (jQuery.browser.mobile)
							e = e.changedTouches[0];

						el.canSlide = true;
						$el.updateSliderVal(e);

						if (el.opt.orientation == "h")
							$el.css({cursor: "col-resize"});
						else
							$el.css({cursor: "row-resize"});

						if (!jQuery.browser.mobile) {
							e.preventDefault();
							e.stopPropagation();
						}

					});

					jQuery(document).on(jQuery.simpleSlider.events.move, function (e) {

						if (jQuery.browser.mobile)
							e = e.changedTouches[0];


						if (!el.canSlide)
							return;

						jQuery(document).css({cursor: "default"});
						$el.updateSliderVal(e);

						if (!jQuery.browser.mobile) {
							e.preventDefault();
							e.stopPropagation();
						}

					}).on(jQuery.simpleSlider.events.end, function () {
						jQuery(document).css({cursor: "auto"});
						el.canSlide = false;

						$el.css({cursor: "auto"})

					});

				}
			})
		},

		updateSliderVal: function (e) {

			var $el = this;
			var el = $el.get(0);

			if (!el.opt)
				return;

			el.opt.initialval = typeof el.opt.initialval == "number" ? el.opt.initialval : el.opt.initialval(el);

			var elWidth = jQuery(el).outerWidth();
			var elHeight = jQuery(el).outerHeight();

			el.x = typeof e == "object" ? (e.clientX + document.body.scrollLeft) - $el.offset().left : typeof e == "number" ? (e * elWidth) / el.opt.maxVal : (el.opt.initialval * elWidth) / el.opt.maxVal;
			el.y = typeof e == "object" ? (e.clientY + document.body.scrollTop) - $el.offset().top : typeof e == "number" ? ((el.opt.maxVal - el.opt.initialval - e) * elHeight) / el.opt.maxVal : (el.opt.initialval * elHeight) / el.opt.maxVal;
			el.y = $el.outerHeight() - el.y;

			el.scaleX = (el.x * el.opt.maxVal) / elWidth;
			el.scaleY = (el.y * el.opt.maxVal) / elHeight;

			el.outOfRangeX = el.scaleX > el.opt.maxVal ? (el.scaleX - el.opt.maxVal) : el.scaleX < 0 ? el.scaleX : 0;
			el.outOfRangeY = el.scaleY > el.opt.maxVal ? (el.scaleY - el.opt.maxVal) : el.scaleY < 0 ? el.scaleY : 0;
			el.outOfRange = el.opt.orientation == "h" ? el.outOfRangeX : el.outOfRangeY;

			if (typeof e != "undefined")
				el.value = el.opt.orientation == "h" ? (el.x >= $el.outerWidth() ? el.opt.maxVal : el.x <= 0 ? 0 : el.scaleX) : (el.y >= $el.outerHeight() ? el.opt.maxVal : el.y <= 0 ? 0 : el.scaleY);
			else
				el.value = el.opt.orientation == "h" ? el.scaleX : el.scaleY;

			if (el.opt.orientation == "h")
				el.level.width(getPercent(el.x, elWidth) + "%");
			else {
				el.level.height(getPercent(el.y, elHeight));
			}

			function getPercent(val, tot) {
				return Math.floor((val * 100) / tot);
			}

			if ((el.opt.orientation === "h" && (el.x >= $el.outerWidth() || el.x <= 0)) || (el.opt.orientation !== "h" && (el.y >= $el.outerHeight() || el.y <= 0)))
				return;

			if (typeof el.opt.callback === "function")
				el.opt.callback(el);
		}
	};

	jQuery.fn.simpleSlider = jQuery.simpleSlider.init;
	jQuery.fn.updateSliderVal = jQuery.simpleSlider.updateSliderVal;

})(jQuery);
