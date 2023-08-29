// Ejercicio 1
function showMessage(callback) {
  let mensaje = ('¡Mensaje mostrado mediante un callback!') 
  callback(mensaje);
 }
 
 
// Ejercicio 2
function checkDataType(variable, callback) {
  const dataType = typeof variable;
  callback(dataType, variable);
}

// Ejercicio 3
function performOperation(num1, num2, callback) {
  callback(num1, num2);
}

// Ejercicio 4
function changeCase(str, callback) {
  callback(str);
}

// Ejercicio 5
function filterTimes(array, callback) {
  const result = array.filter((time) => time > 120);
  callback(result);
}

// Función para mostrar el resultado en el contenedor de resultados
function displayResult(message) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `<div class="result-title">Resultado:</div>${message}`;
}

// Llamadas a las funciones de los ejercicios
function exercise1() {
  showMessage((message) => displayResult(message));
}

function exercise2() {
  const variable = 42; // Cualquier variable que desees probar aquí
  checkDataType(variable, (dataType, content) => displayResult(`Tipo de dato: ${dataType}<br>Contenido: ${content}`));
}

function exercise3() {
  const num1 = 10;
  const num2 = 5;
  performOperation(num1, num2, (result) => displayResult(`Resultado: ${result}`));
}

function exercise4() {
  const str = "PejeLagarto";
  changeCase(str, (result) => displayResult(`Resultado: ${result}`));
}

function exercise5() {
  const timesArray = [120, 80, 200, 100];
  filterTimes(timesArray, (result) => displayResult(`Resultado: ${result.join(', ')}`));
}
