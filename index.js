let nombre = "";
let monto = 1;
let todosLosGastos = [];
let ids = 0;

let inputNombre = document.getElementById("pedirNombre");
let inputGasto = document.getElementById("pedirMonto");
let listaNombreYmonto = document.querySelector("#nombreYmonto");
let submitButton = document.getElementById("submit");
let totalParaMostrar = document.getElementById("total");
let promedioParaMostrar = document.getElementById("promedio");

inputNombre.addEventListener("change", (evt) => catchName(evt));
inputGasto.addEventListener("change", (evt) => catchCost(evt));

let catchName = (evt) => (nombre = evt.target.value);
let catchCost = (evt) => (monto = evt.target.value, todosLosGastos.push(parseInt(monto)));

function mostrarNombreYmonto(_nombre, _monto) {
  listaNombreYmonto.innerHTML += `<li class="list-group-item" id=${ids} onclick=eliminar(${ids})>${_nombre}: $${_monto}</li>`;
  ids += 1;
}

function eliminar(ids){
  let index = ids
  let eliminado = document.getElementById(`${ids}`);
  todosLosGastos.splice(index, 1);
  eliminado.remove();
  mostrarTotal();
  mostrarPromedio();
}

function check() {
  return inputGasto.validity.rangeUnderflow
}

function calcTotal(array){
  let suma = 0
  for (let elemento of array){
      suma += elemento;
  }
  return suma;
}

function mostrarTotal(){
  totalParaMostrar.innerHTML = `Total: $${calcTotal(todosLosGastos)}`;
}

function calcPromedio(array){
  let promedio = 0
  promedio = calcTotal(array)/array.length
  return promedio
}

function mostrarPromedio(){
  promedioParaMostrar.innerHTML = `A cada uno le corresponde pagar: $${calcPromedio(todosLosGastos)}`;
}

function enviar(){
  if (check()){
     alert("Ingrese un monto válido");
  } else {
    mostrarNombreYmonto(nombre, monto);
    mostrarTotal();
    mostrarPromedio();
    inputNombre.value = "";
    inputGasto.value = 0;
    monto = 0
  }
}