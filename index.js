let nombre = "";
let monto = 1;
let todosLosGastos = [];
//variables

var inputNombre = document.getElementById("pedirNombre");
var inputGasto = document.getElementById("pedirMonto");
var listaNombreYmonto = document.querySelector("#nombreYmonto");
var submitButton = document.getElementById("submit");
var totalParaMostrar = document.getElementById("total");
//nuevas variables para manejar lo que venga del input

inputNombre.addEventListener("change", (evt) => catchName(evt));
inputGasto.addEventListener("change", (evt) => catchCost(evt));

const catchName = (evt) => (nombre = evt.target.value);
const catchCost = (evt) => (monto = evt.target.value);
//hace que nombre y  monto tenga los valores que les dan?

function mostrarNombreYmonto(_nombre, _monto) {
  listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
}
//añade el nombre y el gasto al html

function check() {
  return inputGasto.validity.rangeUnderflow
}
//checkea si el monto está por debajo de 1

// function calcTotal(array){
//   let suma = 0
//   for (let elemento of array){
//       suma += elemento;
//   }
//   return suma;
// }

// function calcPromedioTotal(array){
//   let promedio = 0
//   promedio = calcTotal(array)/array.length
//   return promedio
// }

// function mostrarTotal() {
//   totalParaMostrar.innerHTML += `<p>$${calcTotal(todosLosGastos)}</p>`;
// }

function enviar(){
  if (check()){
     alert("Ingrese un monto válido");
     //alerta cuando debajo de 1
  } else {
    mostrarNombreYmonto(nombre, monto);
    //poner los nombres y montos en pantalla
    inputNombre.value = "";
    inputGasto.value = 0;
    monto = 0
  }
}