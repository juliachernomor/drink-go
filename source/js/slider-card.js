
const cardSliderList= document.querySelector('.banner-slider__wrapper');
const template = document.querySelector('#slider-card');

export const createSliderCard = (arr)=> {
    for(let i=0; i < arr.length; i++ )  {
const item=template.content.cloneNode(true);
item.querySelector('.product-picture__png').src = arr[i].src;
item.querySelector('.product-picture__png').srcset=arr[i].srcset;
item.querySelector('.product-picture__png768px').srcset=arr[i].srcsetPng768;
item.querySelector('.product-picture__png1440px').srcset=arr[i].srcsetPng1440;
item.querySelector('.product-picture__webp').srcset=arr[i].srcsetWebp;
item.querySelector('.product-picture__webp768px').srcset=arr[i].srcsetWebp768;
item.querySelector('.product-picture__webp768px').srcset=arr[i].srcsetWebp1440;
item.querySelector('.product-description__title').textContent=arr[i].title;
item.querySelector('.product-description__description').textContent=arr[i].description;
item.querySelector('.product-description__old-price').textContent=arr[i].oldPrice;
item.querySelector('.product-description__fresh-price').textContent=arr[i].price;
cardSliderList.append(item);
    }
}
