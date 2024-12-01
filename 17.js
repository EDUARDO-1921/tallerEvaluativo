let Duplicados = (arreglo) => {
    return [new Set(arreglo)]
}

let numeros = [1, 2, 3, 1, 2, 4, 5];
console.log(Duplicados(numeros));


let numeros1 = [10,10,20,20,30,30];
console.log(Duplicados(numeros1));