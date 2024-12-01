function Map(array, hh) {
let nuevoArray = []; 

    
for (let i = 0; i < array.length; i++) {

    nuevoArray.push(hh(array[i], i, array));
}

return nuevoArray; 
}





let numeros = [1, 2, 3, 4, 5];


let resultado = Map(numeros, function(numero) {
return numero * 2; 

});

console.log(resultado);