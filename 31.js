function contar(str) {
    let frecuencia = {};
for (let letra of str.toLowerCase()) {

    if (letra.match(/[a-z]/)) { 

    if (frecuencia[letra]) {

        frecuencia[letra]++; 
    } else {
    frecuencia[letra] = 1; 

    }
}
}

return frecuencia;
}


let resultado = contar("Hola");
console.log(resultado);