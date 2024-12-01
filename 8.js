function numero(arr) {
    
    let mayores = [];  
    
    
    let num = 0;  

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) { 
            mayores[num] = arr[i]; 
            num++;  
    
        }   
    }

    return mayores;  
}
let arreglo = [ 15, 20, 7,5,70,45,3];
console.log(numero(arreglo));