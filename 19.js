function Palabras(array, palabra) {
    return array.filter(elemento => elemento === palabra).length;
}

let palabras = ["hola", "jjs", "xdxd", "xdxd", "hola"];
console.log(Palabras(palabras, "hola")); 