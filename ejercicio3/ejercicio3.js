const EQUIPOS = ["Real Madrid", "Barcelona", "Atlético de Madrid", "Sevilla", "Espanyol", "Real Sociedad", "Betis", "Deportivo", "Las Palmas", "Valladolid", "Osasuna", "Zaragoza", "Celta", "Valencia", "Athletic", "Burgos", "UD Ibiza", "Villarreal", "Mallorca", "Real Oviedo"];
const SIMBOLO = ["1", "X", "2"];

function generaSimbolo() {
    let i = Math.floor(Math.random() * SIMBOLO.length);
    return SIMBOLO[i];
}

function muestraEquipos(EQUIPOS) {
    console.table(EQUIPOS); //muestra los equipos en una tabla
}

function generaResultados(quiniela) {
    let numEquipos = quiniela.length; 
    for (let i = 0; i < numEquipos; i++) { //recorremos la tabla
        for (let j = 0; j < numEquipos; j++) {
            if (i != j) { //mientras no coincidan los nombres de los equipos nos genera un símbolo (ya que no pueden jugar contra si mismos)
                quiniela[i][j] = generaSimbolo();
            }
        }
    }
}

function quiniela(equipos) {

    generaResultados(quiniela);
    muestraEquipos(EQUIPOS);
    console.table(quiniela);
}