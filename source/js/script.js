import {createCard} from './card.js'
import { createSliderCard } from './slider-card.js';
import {sliderCard} from './mocks.js'
import {card} from './mocks.js';
import {effectMenu} from './menu.js';

import './map.js';



createCard(card);
createSliderCard(sliderCard);
effectMenu();

new Swiper('.swiper', {
  navigation: {
    nextEl:'.container__slider .swiper-button-next',
    prevEl:'.container__slider .swiper-button-prev',
  },
  loop: true,
        autoplay: {
            delay: 15000,
            stopOnLastSlide: false,
        },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  }
});










