{
  const
      HEADER = document.querySelector('.header'),
      BTN_UP = document.querySelector('.button-up'),
      $BODY = $('body'),
      $HEADER = $('.header'),
      $MENU_LIST_MOB = $('.menu__list--mobile'),
      $HEADER_MENU = $('.header__menu'),
      $BTN_MENU = $('.button-menu'),
      $REQ_FORM = $('.request__form'),
      $REQ_MESSAGE = $('.request__message'),
      REQ_ACTIVE = '.request--active';

  const
      TRANSITION_DEFAULT = 300,
      MIN_POS = 100,
      MIN_ROT = 1,
      MAX_ROT = 721,
      FULL_ROT = 360,
      MIN_TRANSITION = 30000,
      MAX_TRANSITION = 60000,
      BREAKPOINT = 720,
      ESC = 27;

  const symbols = [                               // size, count
    [68, 1], [70, 2], [68, 3], [86, 4], [76, 5],
    [68, 6], [68, 7], [68, 8], [86, 9], [76, 10]
  ];

  // Set .title height

  $('.title').css('--header-height', `${$HEADER.outerHeight(false)}px`);


  // Swiper

  const mySwiper = new Swiper ('.sites__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 400,
    simulateTouch: false,
    breakpoints: {
      721: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      1153: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    loop: true,
    slideClass: 'sites__item',
    wrapperClass: 'sites__list',
    containerModifierClass: 'sites__slider--',
    slideActiveClass: 'sites__item--active',
    slideDuplicateActiveClass: 'sites__item--active--duplicate',
    slideVisibleClass: 'sites__item--visible',
    slideDuplicateClass: 'sites__item--duplicate',
    slideNextClass: 'sites__item--next',
    slideDuplicateNextClass: 'sites__item--next--duplicate',
    slidePrevClass: 'sites__item--prev',
    slideDuplicatePrevClass: 'sites__item--prev--duplicate',
    navigation: {
      nextEl: '.sites__arrow--right',
      prevEl: '.sites__arrow--left'
    },
    pagination: {
      el: '.sites__pagination',
      type: 'bullets',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--active',
      modifierClass: 'pagination--',
      clickableClass: 'pagination--clickable',
      clickable: true
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
      firstSlideMessage: 'Первый пример',
      lastSlideMessage: 'Последний пример',
      paginationBulletMessage: 'Пример №{{index}}',
      notificationClass: 'sites__notification'
    }
  });


  // Observer

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
  
  const callback = (entries) => {
    entries[0].isIntersecting
      ? BTN_UP.classList.remove('button-up--visible')
      : BTN_UP.classList.add('button-up--visible');
  }

  const target = HEADER;
  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);


  // Menu

  const toggleMenu = () => {
    const mw = $MENU_LIST_MOB.outerWidth(false);

    if ($HEADER_MENU.hasClass('active')) {
      $BTN_MENU.removeClass('button-menu--active');

      $MENU_LIST_MOB.animate({
        left: `-${mw}px`
      }, TRANSITION_DEFAULT, () => {
        $HEADER_MENU.removeClass('active');
        $BODY.removeClass('scroll-off');
        $BTN_MENU.css('z-index', '1');
      });

    } else {
      $BTN_MENU.css('z-index', '4');
      $HEADER_MENU.addClass('active');
      $BTN_MENU.addClass('button-menu--active');
      $BODY.addClass('scroll-off');

      $MENU_LIST_MOB.animate({
        left: '0px'
      }, TRANSITION_DEFAULT);
    }
  }

  $BTN_MENU.click(toggleMenu);

  $HEADER_MENU.mousedown(function (ev) {
    if (ev.target === this) toggleMenu();
  });

  $HEADER_MENU.find('.menu__link').click(() => {
    if ($HEADER_MENU.hasClass('active')) toggleMenu();
  });


  // Requests

  const openRequest = n => {
    $(n).addClass('request--active');

    $(REQ_ACTIVE).hide().fadeIn(TRANSITION_DEFAULT, () => $('.request__input--focused').focus());

    $BODY.addClass('scroll-off');
  }

  const closeRequest = () => {
    $REQ_FORM.trigger('reset');

    $(REQ_ACTIVE).fadeOut(TRANSITION_DEFAULT, () => {
      $REQ_MESSAGE.removeClass('message--active');
      $(REQ_ACTIVE).removeClass('request--active');
      $BODY.removeClass('scroll-off');
    });
  }

  const submitRequest = () => {
    $REQ_MESSAGE.addClass('message--active');
    $('.message--active').hide().fadeIn(TRANSITION_DEFAULT, () => setTimeout(closeRequest, 2000));
  }

  $('.request__input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});

  $.validator.addMethod('minLengthPhone', (value) => value.replace(/\D+/g, '').length > 10,
  "Введите 10 цифр номера");

  $REQ_FORM.each(() => {
    $REQ_FORM.validate({
      rules: {
        Имя: {
          required: true,
        },
        Телефон: {
          required: true,
          minLengthPhone: 10,
        },
        Почта: {
          required: true,
          email: true,
        },
      },
      messages: {
        Имя: {
          required: "Введите имя",
        },
        Телефон: {
          required: "Введите телефон",
        },
        Почта: {
          required: "Введите e-mail",
          email: "Введите корректный e-mail",
        },
      },

      submitHandler() {
        $.ajax().done(() => {
          submitRequest();
        });

        return false;
      },
    });
  });

  $('.button--request--call').click(() => openRequest('.request--call'));
  $('.button--request--mail').click(() => openRequest('.request--mail'));
  $('.request__button-cancel').click(closeRequest);

  $('.request').mousedown(function (ev) {
    if(ev.target === this) closeRequest();
  });

  $(document).keydown((key) => {
    if (key.keyCode === ESC) {
      if ($('.request__container').parent().hasClass('request--active')) closeRequest();
    }
  });

  // Symbols

  const getWidth = n => $(n).parent().parent().outerWidth(false);
  const getHeight = n => $(n).parent().parent().outerHeight(false);
  const getLeft = w => Math.round(Math.random() * (w - (MIN_POS - 1)) + MIN_POS);
  const getTop = h => Math.round(Math.random() * (h - (MIN_POS - 1)) + MIN_POS);
  const getRot = () => Math.round(Math.random() * (MAX_ROT - MIN_ROT) + MIN_ROT);
  const getTransition = () => Math.round(Math.random() * (MAX_TRANSITION - MIN_TRANSITION) + MIN_TRANSITION);
  const getCoeff = w => (w <= BREAKPOINT) ? 30 : 0;

  const setCoords = (x, y, n) => $(n).css({'left': `${x}px`, 'top': `${y}px`});

  const getVariables = (s, n) => {
    const
        w = getWidth(n),
        h = getHeight(n),
        sq = getCoeff(w),
        x = getLeft(w) - s - sq,
        y = getTop(h) - s - sq;

    setCoords(x, y, n);
    symActive(x, y, s, n);
  }

  const symActive = (x, y, s, n) => {
    const
        transition = getTransition(),
        w = getWidth(n),
        h = getHeight(n),
        sq = getCoeff(w);

    const
        xPos = getLeft(w) - s - sq,
        yPos = getTop(h) - s - sq,
        rot = getRot() - FULL_ROT;

    let moveX, moveY;

    $(n).css('transition', `transform ${transition}ms`);

    moveX = (x >= xPos) ? (x - xPos) * -1 : xPos - x;
    moveY = (y >= yPos) ? (y - yPos) * -1 : yPos - y;

    $(n).css({'--move-x': `${moveX}px`, '--move-y': `${moveY}px`, '--rotate': `${rot}deg`});

    x = xPos - moveX;
    y = yPos - moveY;

    setTimeout(symActive, transition, x, y, s, n);
  }

  const createSymbols = () => {
    class Sym {
      constructor(s, n) {
        getVariables(s, `.symbols__sym--${n}`);
      }
    }

    for (let i in symbols) {
      const sym = new Sym(...symbols[i]);
    }

    $('.symbols').toggleClass('symbols--active');
  }

  createSymbols();
}