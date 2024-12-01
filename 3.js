function Mayor(arreglo) {

    
    if (arreglo.length === 0) {
        return null; 
    }

    let numero = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numero) {
            numero = arreglo[i];
        }

    }

    return numero;
}

console.log(Mayor([2,5,3,7]));
console.log(Mayor([10,20,30]));