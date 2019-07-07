$( window ).on("load", function() {

    var ctx = document.getElementById('charttwitter').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: ['Autodisciplina', 'Inmoderación', 'Depresión', 'Preocupación', 'Irresponsable', 'Confianza', 'Estabilidad', 'Prob. tjd. de crédito', 'Prob. negocio'],
            datasets: [{
                label: 'Análisis Twitter',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }]
        },

        // Configuration options go here
        options: {}
    });


    var ctx2 = document.getElementById('charttexto').getContext('2d');
    var chart = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: ['Autodisciplina', 'Inmoderación', 'Depresión', 'Preocupación', 'Irresponsable', 'Confianza', 'Estabilidad', 'Prob. tjd. de crédito', 'Prob. negocio'],
            datasets: [{
                label: 'Análisis de Texto',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }]
        },

        // Configuration options go here
        options: {}
    });
});