let mainChart = document.getElementById('mainChart').getContext('2d');


// global options for fonts

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize =  14;
Chart.defaults.global.defaultFontColor =  'grey';


let massPopChart = new Chart(mainChart, {
  type: 'doughnut', //type of chart
  data: {
    labels:['Peperroni', 'Calzone', 'Hawaian', 'Margherita', 'four cheese', 'naoplitan'],
    datasets: [{
      label: 'Population',
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
    title:{
      display:true,
      text: 'Best pizzas in town',
      fontSize: 25
    },

    layout:{
      padding:{
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      },

    }
  }
});
