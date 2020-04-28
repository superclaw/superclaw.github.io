$(function()
{


  // Set .title height

  var header = $('.header').outerHeight(false);
  document.querySelector('.title').style.setProperty('--header-height', header + 'px');


  // Swiper

  var mySwiper = new Swiper ('.sites__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 400,
    simulateTouch: false,
    breakpoints: {
      721: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1153: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
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
      prevEl: '.sites__arrow--left',
    },
    pagination: {
      el: '.sites__pagination',
      type: 'bullets',
      bulletClass: 'pagination__item',
      bulletActiveClass: 'pagination__item--active',
      modifierClass: 'pagination--',
      clickableClass: 'pagination--clickable',
      clickable: true,
    },
    a11y: {
      prevSlideMessage: 'Назад',
      nextSlideMessage: 'Вперёд',
      paginationBulletMessage: 'Пример №{{index}}',
      notificationClass: 'sites__notification',
    },
  });


  // Observer

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

  var button = document.querySelector('.button-up');
  
  var callback = function(entries)
  { 
    entries[0].isIntersecting
      ? button.classList.remove('button-up--visible')
      : button.classList.add('button-up--visible')
  }

  var target = document.querySelector('.header');
  var observer = new IntersectionObserver(callback, options);

  observer.observe(target);


  // Menu

  function togglemenu()
  {
    $('.header__menu').toggleClass('active');
    $('.button-menu').toggleClass('button-menu--active');
    $('body').toggleClass('scroll-off');
  }

  $('.button-menu').click(togglemenu);
  $('.header__menu').click(function(event)
    {
      if(event.target == this)
        togglemenu();
    });

  $('.header__menu').find('.menu__link').click(function()
  {
    if($('.header__menu').hasClass('active'))
      togglemenu();
  });


  // Requests

  function openrequest(n)
  {
    $(n).addClass('request--active');
    $('body').addClass('scroll-off');
    $('.request__input--focused').focus();
  }
  function closerequest()
  {
    $('.request__form').trigger('reset');
    $('.request__message').removeClass('active--request');
    $('.request--active').removeClass('request--active');
    $('body').removeClass('scroll-off');
  }
  function submitrequest()
  {
    $('.request__message').toggleClass('request--active');
    setTimeout(closerequest, 2000);
  }

  $('.button--request--call').click(function() {openrequest('.request--call');});
  $('.button--request--mail').click(function() {openrequest('.request--mail');});
  $('.request__button-cancel').click(closerequest);
  $('.request').click(function(event)
    {
      if(event.target == this)
        closerequest();
    });
  $('.request__form').submit(submitrequest);


  // Symbols

  function getwidth(n)
  {
    var w = $(n).parent().parent().outerWidth(false);
    return w;
  }
  function getheight(n)
  {
    var h = $(n).parent().parent().outerHeight(false);
    return h;
  }
  function getleft(w)
  {
    var x = Math.round(Math.random() * (w - 99) + 100);
    return x;
  }
  function gettop(h)
  {
    var y = Math.round(Math.random() * (h - 99) + 100);
    return y;
  };
  function getrot()
  {
    var r = Math.round(Math.random() * (721 - 1) + 1);
    return r;
  }
  function gettransition()
  {
    transition = Math.round(Math.random() * (60000 - 30000) + 30000);
    return transition;
  };
  function getcoeff(w)
  {
    var sq;
    if(w <= 720)
      sq = 30;
    else
      sq = 0;
    return sq;
  }
  function setcoords(x,y,n)
  {
    document.querySelector(n).style.setProperty('left', x + 'px');
    document.querySelector(n).style.setProperty('top', y + 'px');
  }
  function getvariables(s,n)
  {
    var w = getwidth(n);
    var h = getheight(n);
    var sq = getcoeff(w);
    var x = getleft(w) - s - sq;
    var y = gettop(h) - s - sq;
    setcoords(x,y,n);
    symactive(x,y,s,n);
  }

  function symactive(x,y,s,n)
  {
    var movex;
    var movey;
    var transition = gettransition();
    var w = getwidth(n);
    var h = getheight(n);
    var sq = getcoeff(w);
    var xpos = getleft(w) - s - sq;
    var ypos = gettop(h) - s - sq;
    var rot = getrot() - 360;
    document.querySelector(n).style.setProperty('transition', 'transform ' + transition + 'ms');
    if(x >= xpos)
      movex = (x - xpos) * -1;
    else
      movex = xpos - x;
    if(y >= ypos)
      movey = (y - ypos) * -1;
    else
      movey = ypos - y;
    document.querySelector(n).style.setProperty('--move-x', movex + 'px');
    document.querySelector(n).style.setProperty('--move-y', movey + 'px');
    document.querySelector(n).style.setProperty('--rotate', rot + 'deg');
    x = xpos - movex;
    y = ypos - movey;
    setTimeout(symactive, transition, x,y,s,n);
  }

  function sym1() {var n = '.symbols__sym--1'; var s = 68; getvariables(s,n);}
  function sym2() {var n = '.symbols__sym--2'; var s = 70; getvariables(s,n);}
  function sym3() {var n = '.symbols__sym--3'; var s = 68; getvariables(s,n);}
  function sym4() {var n = '.symbols__sym--4'; var s = 86; getvariables(s,n);}
  function sym5() {var n = '.symbols__sym--5'; var s = 76; getvariables(s,n);}
  function sym6() {var n = '.symbols__sym--6'; var s = 68; getvariables(s,n);}
  function sym7() {var n = '.symbols__sym--7'; var s = 68; getvariables(s,n);}
  function sym8() {var n = '.symbols__sym--8'; var s = 68; getvariables(s,n);}
  function sym9() {var n = '.symbols__sym--9'; var s = 86; getvariables(s,n);}
  function sym10() {var n = '.symbols__sym--10'; var s = 76; getvariables(s,n);}

  function symbols()
  {
    sym1(); sym2(); sym3(); sym4(); sym5();
    sym6(); sym7(); sym8(); sym9(); sym10();
  }

  setTimeout(symbols, 10);
  $('.symbols').toggleClass('symbols--active');

});