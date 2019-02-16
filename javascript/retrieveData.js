const getPizzasBtn = document.getElementById('getPizzas');
const pizzasDisplay = document.getElementById('pizzasDisplay');
const imgArray = [
  'https://cdn-images-1.medium.com/max/1600/1*Wlx63hI3q70lKaGtVvH-ZA.jpeg',
  'https: //scontent-lht6-1.cdninstagram.com/vp/1e2f35e87ddcf6cf620644ce875efaba/5CD08642/t51.2885-15/e35/49579484_417943578746850_6056746193828834487_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com',
  'https: //scontent-lht6-1.cdninstagram.com/vp/9155de84cbfbf029358b4632e49d6e47/5CC2A75C/t51.2885-15/e35/47693617_780997805598486_8832491888258135323_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com',
  'https: //scontent-lht6-1.cdninstagram.com/vp/09a30c8034b15469e5feda41b1a66207/5CC76452/t51.2885-15/e35/49933800_278560039502221_3707768412519390180_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com',
  'https: //scontent-lht6-1.cdninstagram.com/vp/06c8a405d4da45722a71a23f06182dd3/5CC6E04B/t51.2885-15/fr/e15/s1080x1080/47692966_344489469473010_5988587681001039587_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com',
]



function getPhotos() {

  imgArray.forEach(url => {
    let newLi = document.createElement('LI');
    let image = new Image()
    image.src = url;
    pizzasDisplay.appendChild(image);
  })

}

getPizzasBtn.addEventListener('click', getPhotos);
