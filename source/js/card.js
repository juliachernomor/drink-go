const cardList= document.querySelector('.cards__list');
const template = document.querySelector('#card');

export const createCard = (arr)=> {
    for(let i=0; i < arr.length; i++ )  {
const item=template.content.cloneNode(true);
item.querySelector('.card__webp').srcset=arr[i].srcsetWebp;
item.querySelector('.card__png').src = arr[i].src;
item.querySelector('.card__png').srcset = arr[i].srcsetJpg;
cardList.append(item);
    }
}
