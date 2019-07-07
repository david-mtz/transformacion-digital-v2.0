var chart;
var chart2;

$(document).ready(function() {

    var ctx = document.getElementById('charttwitter').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: ['Autodisciplina', 'Inmoderación', 'Depresión', 'Preocupación', 'Irresponsable', 'Confianza', 'Estabilidad', 'Prob. tjd. de crédito', 'Prob. negocio'],
            datasets: [{
                label: 'Análisis Twitter',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }]
        },

        // Configuration options go here
        options: {}
    });


    var ctx2 = document.getElementById('charttexto').getContext('2d');
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: ['Autodisciplina', 'Inmoderación', 'Depresión', 'Preocupación', 'Irresponsable', 'Confianza', 'Estabilidad', 'Prob. tjd. de crédito', 'Prob. negocio'],
            datasets: [{
                backgroundColor: 'rgba(100, 99, 255, 0.5)',
                borderColor: 'rgb(100, 99, 255)',
                label: 'Análisis de Texto',
                data:  [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }]
        },

        // Configuration options go here
        options: {}
    });

    $('.login-form').submit(function(e) {
        e.preventDefault();
        dataset1 =  [Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)) ];
        chart.data.datasets.forEach((dataset) => {
            dataset.data = dataset1;
        });
        chart.update();

        dataset2 =  [Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)),Math.floor((Math.random() * 2)) ];
        chart2.data.datasets.forEach((dataset) => {
            dataset.data = dataset2;
        });
        chart2.update();
    });

});


