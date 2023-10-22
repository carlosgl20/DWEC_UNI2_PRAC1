var texto = prompt("Escribe una frase");
texto = separaPalabras(texto);
console.log(giraPalabras(texto));

function separaPalabras(texto) {
    texto = texto.split(" ");
    return texto;
}

function giraPalabras(texto) {

    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let splitear = texto[i].split(" ");
        let girar = splitear.reverse();
        let juntar = girar.join();
        resultado += juntar + " ";
    }
    return resultado;
}

while (texto = ! "ESC") {
    var texto = prompt("Introduce una frase");
    if (texto == "ESC");
    else {
        texto = separaPalabras(texto);
        console.log(giraPalabras(texto));
    }


}

