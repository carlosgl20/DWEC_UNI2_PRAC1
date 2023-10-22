const MAX = 999999;
const MIN = 0;

var numeroDecimos = parseInt(prompt("Introduce el número de décimos"));
while (numeroDecimos <= 0 || isNaN.numeroDecimos || numeroDecimos != parseInt(numeroDecimos)) {
    numeroDecimos = parseInt(prompt("Error! Introduce un número que sea entero y positivo"))
}

function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max – min + 1) + min);
}

function generaNAleatorios(cantidad, min, max) {
    let resultado = []
    for (let i = 0; i < cantidad; i++) {
        resultado[i] = generaAleatorio(min, max);
    }
    console.log(resultado);
    return resultado;

}

const INTENTOS = 999999;

var encontrado = false;
var contador = 0;
var ganador;

var decimos = generaNAleatorios(numeroDecimos, min, max);


while (!encontrado && contador < INTENTOS) {
    for (let i = 0; i < decimos.length; i++) {
        let numero = generaAleatorio(MIN, MAX)
        if (decimos[i] == numero) {
            encontrado = true;
            ganador = decimos[i];       
            console.log("Hay ganador");
        }
    }
    contador++;
}



