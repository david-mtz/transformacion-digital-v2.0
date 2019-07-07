const searchObject = (arr, searchKey) => {
    return arr.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
            return obj[key].includes(searchKey);
        })
    });
}


const dataTwitter = (datos) => {

    let autodisciplina = 0.0;
    let inmodederacion = 0.0;
    let depresion = 0.0;
    let propenso_preocuparse = 0.0;
    let irresponsable = 0.0;
    let confianza = 0.0;
    let estabilidad = 0.0;
    let probabilidad_tarjeta = 0.0;
    let probabilidad_negocio = 0.0;

    return {
        labels: ['Autodisciplina', 'Inmoderación', 'Depresión', 'Preocupación', 'Irresponsable', 'Confianza', 'Estabilidad', 'Prob. tjd. de crédito', 'Prob. negocio'],
        datasets: [{
            data: [autodisciplina, inmodederacion, depresion, propenso_preocuparse, irresponsable, confianza, estabilidad, probabilidad_tarjeta, probabilidad_negocio]
        }]
    };

}