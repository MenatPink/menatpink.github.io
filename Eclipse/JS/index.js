$(document).ready(function () {
	$(window).scroll(function () {
		var wScroll = $(this).scrollTop();
		var pScroll;

		$('.section1EndButton').click(function () {
			$('html, body').stop(true, false);
			$('html,body').animate(
				{
					scrollTop: $('.section2').offset().top
				},
				1500,
			);
		});
		$('.downarrow1').click(function () {
      $('html, body').stop(true, false);
			$('html,body').animate({ scrollTop: $('.section3').offset().top }, 1000);
		});
		$('.downarrow2').click(function () {
      $('html, body').stop(true, false);
			$('html,body').animate({ scrollTop: $('.section4').offset().top }, 1000);
		});
		// $(window).bind('mousewheel', function () {
		// 	$('html, body').stop();
		// });
		// Parallax Macbook
		if (wScroll > $('.section5').offset().top) {
			var pScroll = $(window).scrollTop() - $('.section5').scrollTop() - 3182;
			$('.Macbook').css({
				transform: 'translate(0px, ' + pScroll / 40 + '%)',
			});
		}

		// Lazy Loading Feature Wrap
		if (wScroll > $('.section3').offset().top - $(window).height() / 5) {
			$('.featureWrapper').each(function (i) {
				setTimeout(function () {
					$('.featureWrapper').eq(i).addClass('isShowing');
				}, 150 * (i + 1));
			});
		}
	});
});
