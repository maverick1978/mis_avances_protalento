// Elementos del DOM
const contenedorPreguntas = document.getElementById('contenedor-preguntas');
const nuevaTriviaBtn = document.getElementById('nueva-trivia-btn');
const dificultadSelect = document.getElementById('dificultad');
const tipoRespuestaSelect = document.getElementById('tipo-respuesta');
const categoriaSelect = document.getElementById('categoria');
const puntajeFinal = document.getElementById('puntaje-final');

// Variables para la configuración de la trivia
const cantidadPreguntas = 10; // Cantidad de preguntas

// Función para obtener preguntas desde la API
async function obtenerPreguntasTrivia() {
  const dificultad = dificultadSelect.value;
  const tipoRespuesta = tipoRespuestaSelect.value;
  const categoria = categoriaSelect.value;

  try {
    const respuesta = await fetch(`https://opentdb.com/api.php?amount=${cantidadPreguntas}&category=${categoria}&difficulty=${dificultad}&type=${tipoRespuesta}&lang=es`);
    const data = await respuesta.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Función para mostrar las preguntas y respuestas en el DOM
function mostrarPreguntas(preguntas) {
  contenedorPreguntas.innerHTML = '';
  contenedorPreguntas.style.display = 'block';

  preguntas.forEach((pregunta, indice) => {
    const elementoPregunta = document.createElement('div');
    elementoPregunta.classList.add('pregunta');
    elementoPregunta.innerHTML = `<p>${indice + 1}. ${pregunta.question}</p>`;

    const elementoRespuesta = document.createElement('div');
    elementoRespuesta.classList.add('respuesta');
    if (pregunta.type === 'multiple') {
      pregunta.incorrect_answers.forEach(respuesta => {
        const elementoOpcion = document.createElement('p');
        elementoOpcion.innerHTML = `<input type="radio" name="preg¡Mis disculpas nuevamente! Cometí un error al repetir las instrucciones. Aquí tienes el código corregido:
