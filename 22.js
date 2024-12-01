
let input = document.getElementById("miInput");
let mostrarTexto = document.getElementById("mostrarTexto");

input.addEventListener("input", function() {
mostrarTexto.textContent = input.value; 
});