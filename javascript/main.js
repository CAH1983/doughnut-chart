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
        617594,
        181045,
        153060,
        106519,
        105162,
        95072
      ],
      // custom colors and hover effect on the chart
      backgroundColor:[

        'yellow',
        'orange',
        'blue',
        'pink',
        'brown',
        'violet'
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


// range sliders function to update the percentage value

// const slider = document.getElementById('cursorsContainer').querySelectorAll('input');
// let output = document.getElementsByClassName('percentage');

// output.innerHTML = slider.value;

// slider.oninput = function () {
//   console.log(slider.value);
//   output.innerHTML = slider.value;
// }

// update the input above the doughnut chart
const graphInput = document.getElementById('graphHeader').querySelector('input');


function updateText() {
  let result = document.getElementById('result');
  result.innerHTML = graphInput.value;
}

graphInput.addEventListener('change', updateText);

// test

const sliderOne = document.getElementById('sliderOne').querySelector('input');
const percentageOne = document.getElementById('percentageOne');

percentageOne.innerHTML = sliderOne.value;

sliderOne.oninput = function() {
  console.log(this.value);
  percentageOne.innerHTML = sliderOne.value + '%';
  this.style.color = 'red';
}






