$(function() {

	$(document).ready(function() {
		
		// var $defaultMenu = $('.desktop-menu').clone(),
		// 		attrValues = {
		// 			class: '',
		// 			id: 'my-menu'
		// 		};
				
		// $defaultMenu.attr(attrValues);
		// $defaultMenu.find('ul.header__menu').attr('class', 'header__menu');
		// console.log($defaultMenu.find('ul.header__menu').attr('class'));
		// $('.header__menu-container').append($defaultMenu);

		
		$('ul.sf-menu').superfish();

		var $menu = $("#my-menu").mmenu({
			extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
			navbar: {
				title: "Меню"
			},

			offCanvas: {
				position: "left"
			}
		});

		var $icon = $(".toggle-mnu"),
		api = $menu.data( "mmenu" );

		api.bind("open:start", function($panel){
			$icon.addClass('on');
			$('.header__menu').removeClass('hidden');
		});
		api.bind('close:finish', function() {
			$icon.removeClass('on');
			$('.header__menu').addClass('hidden');
		});

		$('.popup-with-form').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
			removalDelay: 200,
			 mainClass: 'mfp-no-margins mfp-with-zoom',
			 
			// callbacks: {
			// 	beforeOpen: function() {
			// 		this.st.mainClass = this.st.el.attr('data-effect');
			// 	}
			// },


			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});

		$('.gallery-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		
	});

	$('#partners-car').owlCarousel({
		items: 4,
		nav: true,
		navText: [],
		responsive:{
	  	0:{
	  		items:1,
	  		nav:true
	  	},
	  	768:{
	  		items: 3
	  	},
	  	922:{
	  		items:4,
	  		nav:true
	  	},
	  	1000:{
	  		items:3,
	  		nav:true,
	  		
	  	}
	  }
	});

	var objectsCar = $('#objects-car').owlCarousel({
		items: 3,
		nav: true,
		navText: [],
		onInitialized: callback,
	  onDragged: dragged,
	  onDrag: drag,
	  onTranslated: translated,
	  responsiveClass: true,
	  responsive:{
	  	0:{
	  		items:1,
	  		nav:false
	  	},
	  	922:{
	  		items:1,
	  		nav:true
	  	},
	  	1000:{
	  		items:3,
	  		nav:true,

	  	}
	  }
	});

	function translated() {
		scaleItem();
	}
	function callback(){
		scaleItem();
	}
	function dragged(){
		scaleItem();
	}
	function drag(){
		scaleItem();
	}
	function scaleItem(){
		var items = $('#objects-car .owl-item.active'),
				width = document.body.clientWidth;
				console.log(width);
			
			$stageOuter = $('#objects-car .owl-stage-outer');
			
			if(width > 920){

						console.log('сработал if');
				items.each(function(i, elem){
					var item = $(this);
					
					
						if(i == 1){
							item.find('.objects__item').addClass('objects__item--active');
							item.siblings().find('.objects__item')
							.removeClass('objects__item--active');

							$stageOuter.height(item.height() + 30);
						}
					
					
				});
			}else{
						console.log('сработал else');
				items.each(function(i, elem){
					var item = $(this);
					item.find('.objects__item').addClass('objects__item--active');
					$stageOuter.height(item.height() + 30);
			});
		}
	}

	var aboutCar = $('#about-car').owlCarousel({
		items: 6,
		loop: true,
		margin: 20,
		nav: true,
		navText: [],
		responsiveClass: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			480:{
				items:2,
				nav:true
			},
			768:{
				items:4,
				nav:true,

			},
			992:{
				items:6,
				nav:true,

			}
		}
		});

		var fotorama = $('.fotorama').fotorama({
			thumbborderwidth: 0
		}).data('fotorama');

		var fotoramaCar = $('#fotorama-car').owlCarousel({
			nav:true,
			navText: [],
			margin: 25,
			responsiveClass: true,
		responsive:{
			0:{
				items:2,
				nav:true
			},
			480:{
				items:3,
				nav:true
			},
			768:{
				items:3,
				nav:true,

			},
			992: {
				items: 3
			}
		}
		});

		$('.fotorama-thumb').click(function(e) {
			e.preventDefault();
			//alert('putin');
			fotorama.show($(this).closest('.owl-item').index());
			console.log($(this).closest('.owl-item').index());
		});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
