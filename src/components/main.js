
$(document).ready(function () {
	const FAQs = {
		toggleItem: function () {
			let tabsItem = $('.FAQs .FAQs-item')
			tabsItem.on('click', function () {
				tabsItem.removeClass('active')
				$(this).addClass('active') // this of tabsItem
			})
		}
	};
	let paginationNav = $('.newspager ul li')
	paginationNav.on('click', function () {
		paginationNav.removeClass('active')
		$(this).toggleClass('active')
	})
	let faqsNav = $('.product .FAQs-nav ul li')
	faqsNav.on('click', function () {
		faqsNav.removeClass('active')
		$(this).toggleClass('active')
	})
	const ProjectPhotoSwiper = new Swiper('.project-detail-photo .swiper-container', {
		slidesPerView: 1,
		speed: 2000,
		loop: true,
		slideToClickedSlide: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.project-detail-photo .mdi-arrow-left',
			nextEl: '.project-detail-photo .mdi-arrow-right'
		}
	})

	const ProjectOtherSwiper = new Swiper('.project-detail-other .swiper-container', {
		slidesPerView: 3,
		speed: 2000,
		loop: true,
		spaceBetween: 30,
		slideToClickedSlide: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 1
			}
		}
	})

	// product-detail
	var productThumbnail = new Swiper('.product-detail .product-image .thumbnail', {
		slidesPerView: 4,
		speed: 1200,
		loop: true,
		slideToClickedSlide: true,
		navigation: {
			prevEl: '.product-detail .mdi-chevron-left',
			nextEl: '.product-detail .mdi-chevron-right'
		}
	})
	productThumbnail.on('click', function () {
		var target = $('.product-image .thumbnail .swiper-slide-active').attr('data-target')
		$('.product-image .big .slide').not('[data-id=' + target + ']').hide()
		$('[data-id=' + target + ']').fadeIn(400)
	})
	productThumbnail.on('transitionStart', function () {
		var target = $('.product-image .thumbnail .swiper-slide-active').attr('data-target')
		$('.product-image .big .slide').not('[data-id=' + target + ']').hide()
		$('[data-id=' + target + ']').fadeIn(400)
	})

	// Product Tab
	$('.product-tab nav a').on('click', function (e) {
		e.preventDefault()
		$(this).addClass('active')
		$('.product-tab nav a').not(this).removeClass('active')
		$('.product-tab .pcontent').not(target).hide()
		var target = $(this).attr('href')
		$(target).fadeIn()
	})

	var lastedNews = new Swiper('.lasted-news .swiper-container', {
		slidesPerView: 3,
		loop: true,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			512: {
				slidesPerView: 1,
			}
		}
	})

	var productOther = new Swiper('.wd-donors .swiper-container', {
		slidesPerView: 6,
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.wd-donors .swiper-next',
			prevEl: '.wd-donors .swiper-prev'
		},
		breakpoints: {
			992: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 2,
			}
		}
	})

	var Banner = new Swiper('.wd-banner .swiper-container', {
		slidesPerView: 1,
		autoplay: {
			delay: 2000
		},
		loop: true,
		pagination: {
			el: '.wd-banner .swiper-pagination',
		},
	})
	FAQs.toggleItem();

	$('.search>.mdi').on('click', function () {
		$('header .search-box').fadeToggle()
	})

	var moveHeaderMainNav = new MappingListener({
		selector: 'header .main-nav',
		mobileWrapper: 'header .logo-mobile',
		mobileMethod: "insertAfter",
		desktopWrapper: 'header .logo-wrapper',
		desktopMethod: "insertAfter",
		breakpoint: 992,
	}).watch()

	$('header .has-sub').on('click', function (e) {
		$(this).find('.menu-sub').slideToggle()
	}).children().on('click', function (e) {
		e.stopPropagation()
	})

	$('header .backdrop').on('click', function () {
		$('header .mobile-header').removeClass('open')
		$('html').removeClass('active')
		$('header .backdrop').removeClass('active')
	})

	$('header .toggle-menu').on('click', function () {
		$('header .mobile-header').toggleClass('open')
		if ($('header .mobile-header').hasClass('open')) {
			$('html').addClass('active')
			$('header .backdrop').addClass('active')
		} else {
			$('html').removeClass('active')
			$('header .backdrop').removeClass('active')

		}
	})
	if ($(window).width() < 992) {
		$('header .main-nav').height($('.mobile-header').innerHeight() - 80 - $('.logo-mobile').innerHeight() - $('.hotline-mobile').innerHeight())

		var projectSlider = new Swiper('.wd-projects .swiper-container', {
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
				delay: 2000
			},
			loop: true,
			navigation: {
				nextEl: '.wd-projects .swiper-prev',
				prevEl: '.wd-projects .swiper-next',
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				}
			}
		})
	}
	if ($(window).width() > 992) {
		$('.wd-projects .projects-list').removeClass('swiper-container')
		$('.wd-projects .projects-list-wrapper').removeClass('swiper-wrapper')
		$('.wd-projects .projects-item').removeClass('swiper-slide')
	}
	
	$('.form-wrapper .apply').on('click', function(){
		$('.form-wrapper').siblings('.form-apply').slideToggle(500)
	})
});


