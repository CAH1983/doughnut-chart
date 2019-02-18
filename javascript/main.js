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


// rangle sliders

const slider = document.getElementById('cursorsContainer').querySelectorAll("input");
var output = document.getElementsByClassName('percentage');

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + '%';
}
