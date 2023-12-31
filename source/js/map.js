const iconOptions={
  iconUrl:'img/icons/stack.svg#map-pin',
  iconSize:[38,50]
}
let map =L.map('map').setView([59.96830, 30.31756],18);
  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);


let customIcon = L.icon(iconOptions);
const markerOptions={
  icon:customIcon,
  draggable:true,
  title:'Мы находимся здесь!'
}

var marker = L.marker([59.96842, 30.31756], markerOptions).addTo(map).bindPopup('Прекрасного дня!');