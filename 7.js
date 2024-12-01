function arena(palabra) {
    let palabraReversa = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
    palabraReversa += palabra[i];
    }
    
    if (palabra === palabraReversa) {
    return true;
    } else {
    return false;
    }
}
console.log(arena("arenera"));
console.log(arena("hola")); 