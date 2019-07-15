// Брэйкпоинты js
var	breakXl = 1400,
		breakLg = 1150,
		breakMd = 950,
		breakSm = 769,
		breakXs = 500;

$(document).ready(function () {			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	myMenu($('#menu'));

	// Stiky menu // Липкое меню. При прокрутке добавляем класс stiky.
	stikyMenu($('#header'));

	// Аккордеон
	accordeon($('#accordeon'), true);

	// matchHeight // Задание елементам одинаковой высоты
	$('.slider-advantages_content h2').matchHeight();
	$('.sales-hits_content p').matchHeight();
	$('.review').matchHeight();

	// Ограничение выводимых символов в блоке текста
	textLimit($('.first-slider_content p'));
	
});

// Мобильное меню
function myMenu(menu) {
	var menuBtn = menu.find('#menu-btn'),
			over = menu.find('.menu_over'),
			documentWidth = parseInt(document.documentElement.clientWidth),
			windowsWidth = parseInt(window.innerWidth),
			scrollbarWidth = windowsWidth - documentWidth,
			html = $('html'),
			triggerCatalog = $('#item-catalog > a'),
			catalog = $('.catalog'),
			close = $('.menu_close'),
			time = 150,
			itemChild = $('.menu_item--child > a'),
			header = $('#header');
	// Открытие мобильного меню при клике на гамбургер
	menuBtn.click(function () {
		html.toggleClass('lock').css('padding-right',scrollbarWidth);
		menu.toggleClass('open');
		menuBtn.toggleClass('is-active');
		// Закрытие меню при клике на задний слой
		over.click(function() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('is-active');
		});
		// Закрытие меню при клике на крестик
		close.click(function() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('is-active');
		});
	});
	// Открытие каталога при клике на пункт меню с id "#item-catalog"
	function catalogShow() {
		triggerCatalog.click(function() {
			if (catalog.hasClass('open')) {
				catalog.stop().slideUp(time);
				catalog.removeClass('open');
				triggerCatalog.removeClass('active');
				header.removeClass('stiky');
			}else {
				catalog.stop().slideDown(time);
				catalog.addClass('open');
				triggerCatalog.addClass('active');
				header.addClass('stiky');
			}
		})
	};
	// Открытие подменю на мобилке
	function submenuOpen() {
		itemChild.click(function() {
			var ul = $(this).next('ul');
			if ($(window).width() < breakSm) {
				if (ul.hasClass('open')) {
					ul.stop().slideUp(time);
					ul.removeClass('open');
					$(this).removeClass('active');
				}else {
					ul.stop().slideDown(time);
					ul.addClass('open');
					$(this).addClass('active');
				}
			}
		});
	};
	catalogShow();
	submenuOpen();
	// Вызов функций при изменении ширины окна
	var heightResized = false;
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (heightResized == windowWidth) {
			return;
		}
		heightResized = windowWidth;
		if ($(window).width() >= breakSm) {
			itemChild.next('ul').removeAttr('style');
			itemChild.next('ul').removeClass('open');
			itemChild.removeClass('active');
		}
	});
	// Оборачиваем содержимое .catalog классом .row
	catalog.wrapInner('<div class="row"></div>');
	// Оборачиваем содержимое .catalog классом .wrap
	catalog.wrapInner('<div class="wrapper"></div>');
};

// Задаем фоновое изображение .data-img из атибута data
function imgData() {
	var block = $('.data-img');
	block.each(function(index, el) {
		var blockData = $(this).data('img');
		$(this).css({
			'background-image': 'url('+ blockData +')'
		});
	});
};
imgData();

// // Stiky menu // Липкое меню.
function stikyMenu(header) {
	$(window).scroll(function(){
		if( $(window).scrollTop() > 0 ) {
			header.addClass('stiky');
		} else {
			header.removeClass('stiky');
		}
	});
};

// Ограничение выводимых символов в блоке текста
function textLimit(blockText) {
	var size = 47,
			textButton = 'читать',
			arr = new Array();
  blockText.each(function(index){
    var $el = $(this),
    		html = $el.html();
  	if ($(window).width() < breakSm) {
  		arr.push(html);
	  	if( html.length > size) {
	  		$el.html(html.slice(0,size) + '...<a href="#" class="read-more-button" data-index="'+index+'">'+textButton+'</a>');
	  	}
  	}
  });
  $('.read-more-button').click(function() {
  	var index = $(this).data('index');
  	$(this).parent().text(arr[index]);
  });
};

// Вставляет svg в html, позволяет управлять цветом через css 
$('.js-img-svg img').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

// Аккордеон
function accordeon(accordeon, mobile) {
	var trigger = accordeon.find('.accordeon_trigger'),
			content = accordeon.find('.accordeon_content'),
			time = 300;
	if (!mobile) {
		mobile = false;
	};
	function contentDisplayNone() {
		if (mobile == true && $(window).width() < breakMd) {
			content.css({
				display: 'none'
			});
		}
		if (mobile == false) {
			content.css({
				display: 'none'
			});
		}
	};
	contentDisplayNone();
	$(window).resize(function() {
		contentDisplayNone();
	});
	trigger.on('click', function() {
		$this = $(this);
		if (mobile == true && $(window).width() < breakMd) {
			if (!$this.hasClass('active')) {
				trigger.removeClass('active');
				$this.addClass('active');
				content.stop().slideUp(time);
				$this.next('.accordeon_content').stop().slideDown(time).removeClass('hide');
			}else {
				$this.removeClass('active');
				$this.next('.accordeon_content').stop().slideUp(time).addClass('hide');
			}
		}
	});
	$(window).resize(function() {
		if (mobile == true && $(window).width() > breakMd) {
			trigger.removeClass('active');
			content.removeClass('hide')
				.attr('style', '');
		}
		else {
			content.addClass('hide')
		}
	});
};

function slider(slider,sliderFor,sliderPagination) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: '#first-slider-mobile,#first-slider-pagination', // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
    vertical: false, // Вертикальный слайдер
    rtl: false, // Слайды листаются справа налево
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
  });
  
  sliderFor.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
    asNavFor: '#first-slider', // Связь со слайдерами
    infinite: true, // Зацикленное пролистывание
    responsive: [ // Адаптация
      {
      breakpoint: breakSm,
        settings: {
          dots: true
        }
      }
    ]
  });

  sliderPagination.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
    asNavFor: '#first-slider', // Связь со слайдерами
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '20px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    infinite: true, // Зацикленное пролистывание
    focusOnSelect: true
  });

  // Кастомные кнопки "вперед" "назад"
  $('#first-slider-prev').click(function() {
    slider.slick('slickPrev');
  });
  $('#first-slider-next').click(function() {
    slider.slick('slickNext');
  });
};

// Добавляем кастомную пагинацию в слайдер
function addDotsInPagination(sliderB, sliderPagination) {
  var sliderCount = sliderB.find('.js-slider-slide');
  for (var i = 1; i < sliderCount.length + 1; i++) {
    var dot = $('<div class="slider-pagination_dot"></div>');
    dot.text(i);
    sliderPagination.append(dot);
  };
  // Вызываем слайдер
  slider($('#first-slider'),$('#first-slider-mobile'),$('#first-slider-pagination'));
};
addDotsInPagination($('#first-slider'),$('#first-slider-pagination'));

function sliderAdvantages(slider,sliderPagination) {
  slider.slick({
    slidesToShow: 3, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderPagination, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    appendDots: '.slider-advantages_dots', // Свой контейнер для пагинации
    infinite: true, // Зацикленное пролистывание
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    responsive: [ // Адаптация
      {
      breakpoint: breakSm,
        settings: {
          slidesToShow: 1, // Сколько слайдов показывать на экране
          dots: true
        }
      }
    ]
  });

  sliderPagination.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    asNavFor: slider, // Связь со слайдерами
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '20px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    infinite: true, // Зацикленное пролистывание
    focusOnSelect: true
  });

  // Кастомные кнопки "вперед" "назад"
  $('#slider-advantages-prev').click(function() {
    slider.slick('slickPrev');
  });
  $('#slider-advantages-next').click(function() {
    slider.slick('slickNext');
  });
};

// Добавляем кастомную пагинацию в слайдер
function addDotsInPaginationAdvantages(sliderB, sliderPagination) {
  var sliderCount = sliderB.find('.js-slider-slide');
  for (var i = 1; i < sliderCount.length + 1; i++) {
    var dot = $('<div class="slider-pagination_dot"></div>');
    dot.text(i);
    sliderPagination.append(dot);
  };
  // Вызываем слайдер
  sliderAdvantages($('#slider-advantages'),$('#slider-advantages_pagination'));
};
addDotsInPaginationAdvantages($('#slider-advantages'),$('#slider-advantages_pagination'));

function sliderCatalogSection(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    infinite: false, // Зацикленное пролистывание
  });

  // Кастомные кнопки "вперед" "назад"
  $('#catalog-section_slider-prev').click(function() {
    slider.slick('slickPrev');
  });
  $('#catalog-section_slider-next').click(function() {
    slider.slick('slickNext');
  });
};
sliderCatalogSection($('#catalog-section_slider'));

function sliderHits(slider) {
  slider.slick({
    slidesToShow: 4, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: false, // Зацикленное пролистывание
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    responsive: [ // Адаптация
      {
      breakpoint: breakSm,
        settings: {
          slidesToShow: 3, // Сколько слайдов показывать на экране
          infinite: true, // Зацикленное пролистывание
        }
      }
    ]
  });

  // Кастомные кнопки "вперед" "назад"
  $('#sales-hits_slider-prev').click(function() {
    slider.slick('slickPrev');
  });
  $('#sales-hits_slider-next').click(function() {
    slider.slick('slickNext');
  });
};
sliderHits($('#sales-hits_slider'));

function subsliderHits(slider) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    infinite: true, // Зацикленное пролистывание
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
    draggable: false, // Перелистывание мышью
    infinite: false, // Зацикленное пролистывание
    swipe: false // Перелистывание пальцем
  });

  // Кастомные кнопки "вперед" "назад"
  $('.sales-hits_slider-prev').click(function() {
    $(this).siblings(slider).slick('slickPrev');
  });
  $('.sales-hits_slider-next').click(function() {
    $(this).siblings(slider).slick('slickNext');
  });
};
subsliderHits($('.sales-hits_subslider'));

function sliderReviews(slider, sliderPagination) {
  slider.slick({
    slidesToShow: 2, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    asNavFor: sliderPagination, // Связь со слайдерами
    infinite: true, // Зацикленное пролистывание
    adaptiveHeight: false, // Подгоняет высоту слайдера под элемент слайда
  });

  sliderPagination.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
    asNavFor: slider, // Связь со слайдерами
    centerMode: true, // Задает класс .slick-center слайду в центре
    centerPadding: '20px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    infinite: true, // Зацикленное пролистывание
    focusOnSelect: true // Делает слайд активным щелчком по нему
  });

  // Кастомные кнопки "вперед" "назад"
  $('#reviews_slider-prev').click(function() {
    slider.slick('slickPrev');
  });
  $('#reviews_slider-next').click(function() {
    slider.slick('slickNext');
  });
};
// Добавляем кастомную пагинацию в слайдер
function addDotsInPaginationReviews(sliderB, sliderPagination) {
  var sliderCount = sliderB.find('.js-slider-slide');
  for (var i = 1; i < sliderCount.length + 1; i++) {
    var dot = $('<div class="slider-pagination_dot"></div>');
    dot.text(i);
    sliderPagination.append(dot);
  };
  // Вызываем слайдер
  sliderReviews($('#reviews_slider'),$('#reviews_slider_pagination'));
};
addDotsInPaginationReviews($('#reviews_slider'),$('#reviews_slider_pagination'));

//# sourceMappingURL=script.js.map