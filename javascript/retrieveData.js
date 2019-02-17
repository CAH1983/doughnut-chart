const getPizzasBtn = document.getElementById('getPizzas');
const pizzasDisplay = document.getElementById('pizzasDisplay');
const imgArray = [
  'https://cdn-images-1.medium.com/max/1600/1*Wlx63hI3q70lKaGtVvH-ZA.jpeg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg',
  'https://www.tasteofhome.com/wp-content/uploads/2018/04/Whole-Wheat-Veggie-Pizza_EXPS_HCKA19_12558_C10_13_5b-696x696.jpg',
  'https://www.healthymummy.com/wp-content/uploads/2016/08/Cauliflower-Pizza-Crust.jpg',
  'http://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/f6b9deb0bca458c301eb1825a264364acba975a2/pizza-margherita.jpg',
  'https://img.sunset02.com/sites/default/files/image/recipes/su/10/02/pizzetta-margherita-pizza-su-x.jpg',
  'https://cdn-images-1.medium.com/max/1600/1*Wlx63hI3q70lKaGtVvH-ZA.jpeg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg',
  'https://www.tasteofhome.com/wp-content/uploads/2018/04/Whole-Wheat-Veggie-Pizza_EXPS_HCKA19_12558_C10_13_5b-696x696.jpg',
  'https://www.healthymummy.com/wp-content/uploads/2016/08/Cauliflower-Pizza-Crust.jpg',
  'http://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/f6b9deb0bca458c301eb1825a264364acba975a2/pizza-margherita.jpg',
  'https://img.sunset02.com/sites/default/files/image/recipes/su/10/02/pizzetta-margherita-pizza-su-x.jpg',
  'https://cdn-images-1.medium.com/max/1600/1*Wlx63hI3q70lKaGtVvH-ZA.jpeg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg',
  'https://www.tasteofhome.com/wp-content/uploads/2018/04/Whole-Wheat-Veggie-Pizza_EXPS_HCKA19_12558_C10_13_5b-696x696.jpg',
  'https://www.healthymummy.com/wp-content/uploads/2016/08/Cauliflower-Pizza-Crust.jpg',
  'http://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/f6b9deb0bca458c301eb1825a264364acba975a2/pizza-margherita.jpg',
  'https://img.sunset02.com/sites/default/files/image/recipes/su/10/02/pizzetta-margherita-pizza-su-x.jpg',

]

  imgArray.forEach(url => {
    let newIMG = document.createElement('DIV');
    let image = new Image()
    image.src = url;
    pizzasDisplay.appendChild(image);
  })


