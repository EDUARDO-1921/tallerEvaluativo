function crear(claves, valores) {
    let objeto = {};
    
    for (let i = 0; i < claves.length; i++) {
    objeto[claves[i]] = valores[i];
    }
    
    return objeto;
}


let claves = ["nombre", "edad", "ciudad"];
let valores = ["Carlos", 25, "Bogotá"];

let objeto = crear(claves, valores);
console.log(objeto);
