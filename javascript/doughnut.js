window.onload = function () {

        var chart = new CanvasJS.Chart("doughnutContainer", {
            width: 600,
            height: 600,
            animationEnabled: true,
            title: {
                text: "Email Categories",
                horizontalAlign: "left"
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                innerRadius: 30,
                indexLabelFontSize: 17,
                toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                dataPoints: [{
                        y: 67,
                    },
                    {
                        y: 28,
                    },
                    {
                        y: 10,
                    },
                    {
                        y: 7,
                    },
                    {
                        y: 15,
                    },
                    {
                        y: 6,
                    }
                ]
            }]
        });
        chart.render();
}