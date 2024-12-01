function mayusculas(arr) {
    return arr.map(function(elemento) {
        return elemento.toUpperCase();  
    });
}

let arreglo = ["hola", "juan", "david","palechor"];
console.log(mayusculas(arreglo));