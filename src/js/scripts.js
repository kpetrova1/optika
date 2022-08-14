'use strict';

$(document).ready(function () {
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('active');
    $('.nav').toggleClass('active');
    $('body').toggleClass('locked');
  });

  $('.nav__link').on('click', function () {
    $('.menu-btn').removeClass('active');
    $('.nav').removeClass('active');
    $('body').removeClass('locked');
  });

  new Swiper('.qr-slider__swiper-1', {
    slidesPerView: 1,
    spaceBetween: 17,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination-1',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
  });

  new Swiper('.qr-slider__swiper-2', {
    slidesPerView: 1,
    spaceBetween: 17,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination-2',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  });

  new Swiper('.team__slider', {
    slidesPerView: 1,
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination-team',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
  });

  new Swiper('.tools__slider', {
    slidesPerView: 1,
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination-tools',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next-tools',
      prevEl: '.swiper-button-prev-tools',
    },
  });
});
