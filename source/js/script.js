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
  spaceBetween: 65,
  navigation: {
    nextEl:'.my-swiper-prev',
    prevEl:'.my-swiper-next',
  },
  loop: true,
        autoplay: {
            delay: 15000,
            stopOnLastSlide: false,
        },
  pagination: {
    el: '.my-swiper-pagination',
    clickable:true,
  },
});









