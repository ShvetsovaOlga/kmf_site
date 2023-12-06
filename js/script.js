$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger, .mleft-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Scroll top functiion -- Start
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {                 
			$('#scrollUp').fadeIn();
		} else {   
			$('#scrollUp').fadeOut();
		}
	});

	$('#scrollUp').click(function() {		
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// Scroll top functiion -- End

	$('.header-slider').slick({
		//autoplay: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrow: true,
		responsive: [{
            breakpoint: 768,
            settings: {				
                arrows: false,
            }
        }]	
	});

	$('.case-slider').slick({
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,  		
		infinite: true,
		appendArrows: $('.case-slider__arrows'),
		responsive: [{
            breakpoint: 576,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 1,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        },
		{
            breakpoint: 768,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 2,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        },
		{
            breakpoint: 992,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 3,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        }]	
	});

	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,  		
		infinite: true,
		responsive: [{
            breakpoint: 768,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 1,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        },
		{
            breakpoint: 992,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 2,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        }]	
	});

	/* var width = window.innerWidth || document.body.clientWidth;

    var $slick = $('.feedback-carusel');

    if (width > 540) {
        $slick.slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        });
    } else {
        $slick.slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: false,
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            cssEase: 'ease-out',
            
        });
    }
*/


	$('.partners-slider').slick({
		speed: 300,
		autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 1,  		
		infinite: true,
		arrow: false,
		cssEase: 'ease',
		responsive: [{
            breakpoint: 576,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 2,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        },
		{
            breakpoint: 768,
            settings: {
				speed: 300,
				autoplay: false,
                slidesToShow: 3,
                arrows: false,
				slidesToScroll: 1,
				cssEase: 'ease',
            }
        }
	]		
	});

	(function ($) {
		const second = 1000,
			  minute = second * 60,
			  hour = minute * 60,
			  day = hour * 24;
	  
		//I'm adding this section so I don't have to keep updating this pen every year :-)
		//remove this if you don't need it
		let today = new Date(),
			dd = String(today.getDate()).padStart(2, "0"),
			mm = String(today.getMonth() + 1).padStart(2, "0"),
			yyyy = today.getFullYear(),
			nextYear = yyyy + 1,
			dayMonth = "09/30/",
			birthday = dayMonth + yyyy;
		
		today = mm + "/" + dd + "/" + yyyy;
		if (today > birthday) {
		  birthday = dayMonth + nextYear;
		}
		//end
		
		const countDown = new Date(birthday).getTime(),
			x = setInterval(function() {    
	  
			const now = new Date().getTime(),
			distance = countDown - now;	  
			document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
	  
			  //do something later when date is reached
			  if (distance < 0) {
				document.getElementById("headline").innerText = "It's my birthday!";
				document.getElementById("countdown").style.display = "none";				
				clearInterval(x);
			  }
			  //seconds
			}, 0)
		}());


		(function ($) {
			$.fn.countTo = function (options) {
				options = options || {};
				
				return $(this).each(function () {
					// set options for current element
					var settings = $.extend({}, $.fn.countTo.defaults, {
						from:            $(this).data('from'),
						to:              $(this).data('to'),
						speed:           $(this).data('speed'),
						refreshInterval: $(this).data('refresh-interval'),
						decimals:        $(this).data('decimals')
					}, options);
					
					// how many times to update the value, and how much to increment the value on each update
					var loops = Math.ceil(settings.speed / settings.refreshInterval),
						increment = (settings.to - settings.from) / loops;
					
					// references & variables that will change with each update
					var self = this,
						$self = $(this),
						loopCount = 0,
						value = settings.from,
						data = $self.data('countTo') || {};
					
					$self.data('countTo', data);
					
					// if an existing interval can be found, clear it first
					if (data.interval) {
						clearInterval(data.interval);
					}
					data.interval = setInterval(updateTimer, settings.refreshInterval);
					
					// initialize the element with the starting value
					render(value);
					
					function updateTimer() {
						value += increment;
						loopCount++;
						
						render(value);
						
						if (typeof(settings.onUpdate) == 'function') {
							settings.onUpdate.call(self, value);
						}
						
						if (loopCount >= loops) {
							// remove the interval
							$self.removeData('countTo');
							clearInterval(data.interval);
							value = settings.to;
							
							if (typeof(settings.onComplete) == 'function') {
								settings.onComplete.call(self, value);
							}
						}
					}
					
					function render(value) {
						var formattedValue = settings.formatter.call(self, value, settings);
						$self.html(formattedValue);
					}
				});
			};
			
			$.fn.countTo.defaults = {
				from: 0,               // the number the element should start at
				to: 0,                 // the number the element should end at
				speed: 1000,           // how long it should take to count between the target numbers
				refreshInterval: 100,  // how often the element should be updated
				decimals: 0,           // the number of decimal places to show
				formatter: formatter,  // handler for formatting the value before rendering
				onUpdate: null,        // callback method for every time the element is updated
				onComplete: null       // callback method for when the element finishes updating
			};
			
			function formatter(value, settings) {
				return value.toFixed(settings.decimals);
			}
		}(jQuery));
		
		jQuery(function ($) {
		  // custom formatting example
		  $('.count-number').data('countToOptions', {
			formatter: function (value, options) {
			  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
			}
		  });
		  
		  // start all the timers
		  $('.timer').each(count);  
		  
		  function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		  }
		});
});