const boton = document.querySelector("#miBoton");
const parrafo = document.querySelector("#miParrafo");

boton.onclick = function() {
parrafo.textContent = "El texto ha sido cambiado."; 
}