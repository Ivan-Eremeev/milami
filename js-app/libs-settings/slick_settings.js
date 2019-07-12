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