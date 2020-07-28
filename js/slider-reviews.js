$('.reviews__slider').slick({
	slidesToShow: 3,
	dots: true,
	arrows: true,
	lazyLoad: 'ondemand',
	responsive: [
		{
			breakpoint: 1260,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});