/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

// Подключение файлов. При использовании gulp поменять "// @prepros-append" на "//="
// libs-settings/fancybox_settings.js
// libs-settings/mmenu_settings.js
// @prepros-append libs-settings/slick_settings.js
// libs-settings/wow_js_settings.js
// libs-settings/fullpage_settings.js
// libs-settings/tinyscrollbar-settings.js
// libs-settings/tooltipster-settings.js
// libs-settings/yandex-map-settings.js
// libs-settings/google-map-settings.js
// mailto-ajax.js

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

	// Блок с высотой окна браузера
	// screenHeight($('#full-height'));

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
	// menuScroll($('#menu'));

	// Stiky menu // Липкое меню. При прокрутке добавляем класс stiky.
	stikyMenu($('#header'));

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Табы
	// tabs($('#tabs'));

	// Аккордеон
	// accordeon($('#accordeon'));

	// matchHeight // Задание елементам одинаковой высоты
	// $('.match-height').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));
	
	// Модальное окно
	// Задать кнопке, по которой открывается окно класс ".modal-trigger" и атрибут "data-modal", с id окна.
	// Пример <button>(class="modal-trigger" data-modal="#modal-1")</button>
	// modal();

	// Открыть модальное окно
	// modalShow($('#modal-1'));

	// Закрыть модальное окно
	// modalHide($('#modal-1'));

	// Текст печатная машинка
	// textPrint($('#text-print'));

	// Анимация увеличения значения числа
	// countNumber($(".count-number"));

	// Делает активным пункт меню при скролле до блока
	// menuItemActive($("#menu_list"));

	// Изменение textarea при получении фокуса
	// focusTextarea($('textarea'));

	// Изменение поля ввода при клике по его контейнеру
	// focusInput($('.block_input'));

	// Запуск и остановка видео html5
	// videoControll($('.video'));

	// Инициализация fancybox
	// fancybox($('.fancy'));

	// Программное включение fancybox по клику
	// fancyboxProgramm($('#fancy'));

	// Инициализация fullpage
	// fullpage($('#fullpage'));

	// Инициализация mmenu
	// mmenu($('#mmenu'));

	// Инициализация slick слайдера
	// slider($('.slider'),$('.slider-for'));

	// Инициализация tinyscrollbar
	// tinyscrollbar($('#scrollbar1'));

	// Инициализация tooltipster
	// tooltipster($('.tooltip'));

	// Инициализация Яндекс карты
	// ymaps.ready(initYandexMap);

	// Инициализация Google карты
	// initGoogleMap();

	// Инициализация стилизуемого скроллбара
	// $('#scrollbar').scrollbar();

	// 3d эффект вращения элемента при наведении
	// rotate($('.card3d'));

	// Показать еще новости
	// limitBlock($('#news'));

	// Паралакс относительно курсора мыши
	// направление - data-direction="x или y или xy"
	// интенсивность - data-intensity="3"
	// скорость в мс - data-speed="100"
	// parallaxMove($('.parallax-move'));

	// Отслеживание скролла окна браузера
	// $(window).scroll(function() {
	// 	// countNumber($(".count-number")); // Анимация увеличния значения числа
	// });

	// Ограничение выводимых символов в блоке текста
	textLimit($('.first-slider_content p'));

	// Отслеживание изменения ширины окна браузера
// 	var heightResized = false;
// 	$(window).resize(function() {
// 		var windowWidth = $(window).width();
// 		if (heightResized == windowWidth) {
// 			return;
// 		}
// 		heightResized = windowWidth;
// 		// fontResize(); // Резиновый сайт
// 		// screenHeight(); // Блок с высотой окна браузера
// 		// tooltipDisable(); // Отключение всплывающей подсказки
// 		// sliderReinstall(); // Реинициализация слайдеров
// 	});
	
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

// // Блок с высотой окна браузера
// function screenHeight(fullHeight) {
//   fullHeight.css({
//       minHeight: $(window).height() + 'px'
//   });
// };

// // Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
// function menuScroll(menuItem) {
// 	menuItem.find('a[href^="#"]').click( function(){
// 		var scroll_el = $(this).attr('href'),
// 				time = 500;
// 		if ($(scroll_el).length != 0) {
// 		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, time);
// 			$(this).addClass('active');
// 		}
// 		return false;
// 	});
// };

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
    arr.push(html);
  	if( html.length > size) {
  		$el.html(html.slice(0,size) + '...<a href="#" class="read-more-button" data-index="'+index+'">'+textButton+'</a>');
  	}
  });
  $('.read-more-button').click(function() {
  	var index = $(this).data('index');
  	$(this).parent().text(arr[index]);
  });
};

// // Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в em)
// function fontResize() {
// 	var windowWidth = $(window).width();
// 		if (windowWidth >= breakSm) {
// 			var fontSize = windowWidth/19.05;
// 		} else if (windowWidth < breakSm) {
// 			// Без резины на мобилке
// 			var fontSize = 60;
// 			// С резиной на мобилке
// 			var fontSize = windowWidth/4.8;
// 	}
// 	$('body').css('fontSize', fontSize + '%');
// };

// // Табы
// function tabs(tabs) {
// 	var trigger = tabs.find('#tabs_triggers').children(),
// 			content = tabs.find('#tabs_content').children(),
// 			time = 300;
// 	content.filter('.hide').css({
// 		display: 'none'});
// 	trigger.click(function() {
// 		var $this = $(this),
// 				index = $this.index();
// 		if (!$this.hasClass('active')) {
// 			trigger.removeClass('active');
// 			$this.addClass('active');
// 			content.hide();
// 			content.eq(index).fadeIn(time);
// 		}
// 	});
// };

// Аккордеон
// function accordeon(accordeon, mobile) {
// 	var trigger = accordeon.find('.accordeon_trigger'),
// 			content = accordeon.find('.accordeon_content'),
// 			time = 300;
// 	content.css({
// 		display: 'none'});
// 	trigger.on('click', function() {
// 		$this = $(this);
// 		if (!$this.hasClass('active')) {
// 			trigger.removeClass('active');
// 			$this.addClass('active');
// 			content.stop().slideUp(time);
// 			$this.next('.accordeon_content').stop().slideDown(time).removeClass('hide');
// 		}
// 		else {
// 			$this.removeClass('active');
// 			$this.next('.accordeon_content').stop().slideUp(time).addClass('hide');
// 		}
// 	});
// 	if (mobile == true) {
// 		$(window).resize(function() {
// 			if ($(window).width() > breakSm) {
// 				trigger.removeClass('active');
// 				content.removeClass('hide')
// 					.attr('style', '');
// 			}
// 			else {
// 				content.addClass('hide')
// 			}
// 		});
// 	}
// };

// // Модальное окно
// function modal(modal) {
// 	$('.modal-trigger').on('click', function() {
// 		var $this = $(this),
// 				data = $this.data('modal'),
// 				thisModal = $(data);
// 		modalShow(thisModal);
// 	});
// };
// // Открытие модального окна
// function modalShow(thisModal) {
// 	var html = $('html'),
// 			modalClose = thisModal.find($('.modal_close')),
// 			documentWidth = parseInt(document.documentElement.clientWidth),
// 			windowsWidth = parseInt(window.innerWidth),
// 			scrollbarWidth = windowsWidth - documentWidth;
// 	thisModal.show(0, function() {
// 		setTimeout(thisModal.addClass('open'),500);
// 	});
// 	html.addClass('lock').css('padding-right',scrollbarWidth);
// 	modalClose.on('click', function() {
// 		modalHide(thisModal);
// 	});
// 	thisModal.on('click', function(e) {
// 		if (thisModal.has(e.target).length === 0) {
// 			modalHide(thisModal);
// 		}
// 	});
// };
// // Закрытие модального окна
// function modalHide(thisModal) {
// 	var html = $('html');
// 	thisModal.removeClass('open');
// 	thisModal.hide();
// 	html.removeClass('lock').css('padding-right',0);
// };

// Текст печатная машинка
// function textPrint(block) {
// 	var textPrint = block,
// 		a = textPrint.text(),
// 		j = 0,
// 		c = a.length,
// 		time = 50;
// 	textPrint.text('');
// 	setInterval(function () {
// 		if (j<c) {
// 			textPrint.text(textPrint.text() + a[j]);
// 			j++;
// 		}
// 	},time);
// };

// Анимация увеличения значения числа
// var	countNumberStatus = true;
// function countNumber (block) {
// 	var scrollEvent = ($(window).scrollTop() > (block.position().top - 400)),
// 			valUp = block.data('val-up'),
// 			valTo = block.data('val-to'),
// 			valDuration = block.data('duration');
// 	if(scrollEvent && countNumberStatus) {
// 		$({numberValue: valUp}).animate({numberValue: valTo}, {
// 			duration: valDuration,
// 			easing: "swing",
// 			step: function(val) {
// 				block.html(Math.ceil(val));
// 			}
// 		});
// 		countNumberStatus = false;
// 	}
// };

// // Делает активным пункт меню при скролле до блока
// function menuItemActive(menu) {
// 	var lastId,
//   topMenu = menu,
//   topMenuHeight = topMenu.outerHeight(),
//   menuItems = topMenu.find("a"),
//   scrollItems = menuItems.map(function(){
//     var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//   });
// 	menuItems.click(function(e){
// 	  var href = $(this).attr("href"),
// 	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
// 	  $('html, body').stop().animate({ 
// 	      scrollTop: offsetTop
// 	  }, 300);
// 	  e.preventDefault();
// 	});
// 	$(window).scroll(function(){
// 	  var fromTop = $(this).scrollTop()+topMenuHeight;
// 	  var cur = scrollItems.map(function(){
// 	    if ($(this).offset().top < fromTop)
// 	      return this;
// 	  });
// 	  cur = cur[cur.length-1];
// 	  var id = cur && cur.length ? cur[0].id : "";
// 	  if (lastId !== id) {
// 	      lastId = id;
// 	      menuItems
// 	        .parent().removeClass("active")
// 	        .end().filter("[href='#"+id+"']").parent().addClass("active");
// 	  }                   
// 	});
// };

// // Изменение textarea при получении фокуса
// function focusTextarea(texarea) {
// 	texarea
// 	.focus(function() {
// 		$(this).addClass('class_name');
// 	})
// 	.blur(function() {
// 		if ($(this)[0].value == '') {
// 			$(this).removeClass('active');
// 		}
// 	});
// };

// // Изменение поля ввода при клике по его контейнеру
// function focusInput(conteinerInput) {
// 	conteinerInput.click(function() {
// 		input = conteinerInput.find('input');
// 		div.addClass('active');
// 		$(document).mouseup(function (e){
// 			if (!conteinerInput.is(e.target)
// 			    && conteinerInput.has(e.target).length === 0 && input.val() == '') {
// 				conteinerInput.removeClass('active');
// 			}
// 		});
// 	});
// };

// // Запуск и остановка видео html5
// var playing = false;
// function videoControll(videoConteiner) {
// 	videoConteiner.click(function() {
// 		var video = videoConteiner.find('video'),
// 				img = videoConteiner.find('img');
// 		img.css({
// 			display: 'none'});
// 		if (playing == false) {
// 			video.trigger('play');
// 			playing = true;
// 		}
// 		else {
// 			video.trigger('pause');
// 			playing = false;
// 		}
// 	});
// };

// 3d эффект вращения элемента при наведении
// function rotate(element) {
// 	var card = element,
// 			cardItem = card.find('.card3d_item');
// 	card.css({
// 		perspective: '1000px',
// 		'transform-style': 'preserve-3d'
// 	});
// 	cardItem.mousemove(function(event) {
// 		var $this = $(this),
// 				coordinateX = event.offsetX,
// 				coordinateY = event.offsetY,
// 				halfHeight = ($this.outerHeight()/2),
// 				halfWidth = $this.outerWidth()/2;
// 				console.log(halfWidth);
// 		$this.css({
// 			transition: '0.2s',
// 			transform: 'rotateX('+((coordinateY-halfHeight)/10)*-1+'deg) rotateY('+(coordinateX-halfWidth)/10+'deg)'
// 		});
// 	});
// 	cardItem.mouseout(function() {
// 		cardItem.css({
// 			transform: 'rotate(0)'});
// 	});
// };

// Паралакс относительно курсора мыши
// function parallaxMove(parallax) {
// 	var $window = $(window),
// 			direction = parallax.data('direction'),
// 			intensity = parallax.data('intensity'),
// 			speed = parallax.data('speed');
// 	if (!direction) {
// 		direction = 'xy';
// 	}
// 	if (!intensity) {
// 		intensity = 3;
// 	}
// 	if (!speed) {
// 		speed = 100;
// 	}
// 	parallax.css({transition: (speed/1000)+'s'});
// 	$window.mousemove(function(event) {
// 		var left = event.clientX,
// 				top = event.clientY,
// 				windowWidth = $window.width(),
// 				windowHeight = $window.height(),
// 				moveX = ((left-windowWidth/2)*intensity/100).toFixed(),
// 				moveY = ((top-windowHeight/2)*intensity/100).toFixed();
// 		inVisible(parallax);
// 		function inVisible(element) {
// 			var topScroll = $(document).scrollTop(),
// 					screenHeight = $(window).height(),
// 					bottomScroll = topScroll + screenHeight,
// 					elementHeight = element.height(),
// 					elementTop = element.offset().top,
// 					elementBottom = elementTop + elementHeight;
// 			if (elementTop < bottomScroll && elementBottom > topScroll) {
// 				if (direction == 'xy') {
// 					parallax.css({transform: 'translateX('+moveX+'px) translateY('+moveY+'px)'});
// 				}
// 				else if (direction == 'x') {
// 					parallax.css({transform: 'translateX('+moveX+'px)'});
// 				}
// 				else if (direction == 'y') {
// 					parallax.css({transform: 'translateY('+moveY+'px)'});
// 				}
// 			}
// 		};
// 	});
// };

// Показать еще новости
// function limitBlock(wrap, newsNum) {
// 	if (!newsNum) {
// 		newsNum = 3
// 	}
// 	var news = wrap.find('.limit-block'),
// 			parent = news.parent(),
// 			newsLimit = news.slice(0, newsNum),
// 			btn = wrap.find('.show-btn'),
// 			btnShow = btn.text(),
// 			btnHide = 'Скрыть',
// 			heightResized = false;
// 	width();
// 	$(window).resize(function() {
// 		var windowWidth = $(window).width();
// 		if (heightResized == windowWidth) {
// 			return;
// 		}
// 		heightResized = windowWidth;
// 		width();
// 	});
// 	function width() {
// 		if ($(window).width() <= breakSm) {
// 			news.remove();
// 			parent.append(newsLimit);
// 			btn.text(btnShow)
// 				.removeClass('active');
// 		}else {
// 			parent.append(news);
// 			btn.text(btnHide)
// 				.addClass('active');
// 		}
// 	};
// 	btn.click(function() {
// 		if (!btn.hasClass('active')) {
// 			parent.append(news);
// 			btn.text(btnHide)
// 				.addClass('active');
// 		}else {
// 			news.remove();
// 			parent.append(newsLimit);
// 			btn.text(btnShow)
// 				.removeClass('active');
// 		}
// 	});
// };
function slider(slider,sliderFor,sliderPagination) {
  slider.slick({
    slidesToShow: 1, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: '#first-slider-mobile,#first-slider-pagination', // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    vertical: false, // Вертикальный слайдер
    rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: breakSm,
    //     settings: {
    //       dots: true
    //     }
    //   }
    // ]
    // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
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

// Инициализация слайдеров на десктопе и мобилке
// function sliderReinstall() {
//   if (window.matchMedia("(max-width: 769px)").matches) {
//     $('.slick-initialized').slick('unslick');
//   }
//   else {
//     $('.slick-initialized').slick('unslick');
//     sliderInit($('.slider'), $('.slider-for'));
//   }
// }

// $('.your-slider').slick('unslick'); // Уничтожить слайдер

function sliderAdvantages(slider,sliderPagination) {
  slider.slick({
    slidesToShow: 3, // Сколько слайдов показывать на экране
    slidesToScroll: 1, // Сколько слайдов пролистывать за раз
    asNavFor: sliderPagination, // Связь со слайдерами
    dots: false, // Пагинация
    arrows: false, // Стрелки
    // speed: 500, // Скорость перехода слайдов
    // autoplay: false, // Автопрокрутка
    // autoplaySpeed: 2000, // Скорость автопрокрутки
    // centerMode: false, // Задает класс .slick-center слайду в центре
    // focusOnSelect: true, // Выбрать слайд кликом
    infinite: true, // Зацикленное пролистывание
    vertical: false, // Вертикальный слайдер
    rtl: false, // Слайды листаются справа налево
    // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
    adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
    // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
    // responsive: [ // Адаптация
    //   {
    //   breakpoint: breakSm,
    //     settings: {
    //       dots: true
    //     }
    //   }
    // ]
    // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
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

//# sourceMappingURL=script.js.map