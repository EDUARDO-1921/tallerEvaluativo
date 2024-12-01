function mayores(array, num) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
        resultado.push(array[i]);
    }
    }
    return resultado;
}

console.log(mayores([1, 5, 8, 12, 3], 6)); 