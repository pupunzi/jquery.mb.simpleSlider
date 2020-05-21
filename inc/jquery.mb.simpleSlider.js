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
