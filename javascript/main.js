let mainChart = document.getElementById('mainChart').getContext('2d');


// global options for fonts

Chart.defaults.global.defaultFontFamily = 'Verdana';
Chart.defaults.global.defaultFontSize =  14;
Chart.defaults.global.defaultFontColor =  'grey';


let massPopChart = new Chart(mainChart, {
  type: 'doughnut', //type of chart
  data: {
    // labels:['Peperroni', 'Calzone', 'Hawaian', 'Margherita', 'four cheese', 'napolitan'],
    datasets: [{
      label: 'customers',
      data: [
        217594,
        181045,
        153060,
        106519,
        105162,
        95072
      ],
      // custom colors and hover effect on the chart
      backgroundColor:[

        '#434343',
        '#F7A86C',
        '#43e5f7',
        'pink',
        '#D3D3D3',
        '#FFFACD'
      ],
      borderWidth: 2,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: 'white'
    }]
  },
  options: {

    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      },
    responsive: true,
    maintainAspectRatio: false,
    }
  }
});


// update the input above the doughnut chart
const graphInput = document.getElementById('graphHeader').querySelector('input');


function updateText() {
  let result = document.getElementById('result');
  result.innerHTML = graphInput.value;
}

graphInput.addEventListener('change', updateText);

// test range slider function to update the percentage (tried to DRY it using for loops but didn't work)

const sliderOne = document.getElementById('slider1');
const sliderTwo = document.getElementById('slider2');
const sliderThree = document.getElementById('slider3');
const sliderFour = document.getElementById('slider4');
const sliderFive = document.getElementById('slider5');

const percentageOne = document.getElementById('percentage1');
const percentageTwo = document.getElementById('percentage2');
const percentageThree = document.getElementById('percentage3');
const percentageFour = document.getElementById('percentage4');
const percentageFive = document.getElementById('percentage5');

percentageOne.innerHTML = sliderOne.value + '%';

sliderOne.oninput = function() {
  console.log(this.value);
  percentageOne.innerHTML = this.value + '%';
  this.style.color = 'red';
}

sliderTwo.oninput = function() {
  console.log(this.value);
  percentageTwo.innerHTML = this.value + '%';
  this.style.color = 'green';
}

sliderThree.oninput = function() {
  console.log(this.value);
  percentageThree.innerHTML = this.value + '%';
  this.style.color = 'red';
}

sliderFour.oninput = function() {
  console.log(this.value);
  percentageFour.innerHTML = this.value + '%';
  this.style.color = 'green';
}

sliderFive.oninput = function() {
  console.log(this.value);
  percentageFive.innerHTML = this.value + '%';
  this.style.color = 'red';
}








