// URL de la API de Pokémon
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Obtener los elementos del DOM
const nameElement = document.getElementById('pokemon-name');
const heightElement = document.getElementById('pokemon-height');
const weightElement = document.getElementById('pokemon-weight');
const abilitiesElement = document.getElementById('pokemon-abilities');
const imageElement = document.getElementById('pokemon-image');
const searchButton = document.getElementById('search-btn');
const pokemonIdInput = document.getElementById('pokemon-id');

// Función para obtener información de un Pokémon por su ID
async function getPokemonById(id) {
  try {
    // Realizar una solicitud GET a la API de Pokémon
    const response = await fetch(apiUrl + id);
    const pokemonData = await response.json();

    // Mostrar los datos del Pokémon en los elementos del DOM
    nameElement.textContent = pokemonData.name;
    heightElement.textContent = 'Altura: ' + pokemonData.height;
    weightElement.textContent = 'Peso: ' + pokemonData.weight;
    abilitiesElement.textContent = 'Habilidades: ' + pokemonData.abilities.map(ability => ability.ability.name).join(', ');

// Agregar clases personalizadas a los elementos del DOM
nameElement.classList.add('pokemon-name-style');
heightElement.classList.add('pokemon-height-style');
weightElement.classList.add('pokemon-weight-style');
abilitiesElement.classList.add('pokemon-abilities-style');


    // Obtener la URL de la imagen del Pokémon
    const imageUrl = pokemonData.sprites.front_default;

    // Mostrar la imagen del Pokémon
    imageElement.src = imageUrl;
    imageElement.alt = pokemonData.name;

// Mostrar los datos del Pokémon en los elementos del DOM
  } catch (error) {
    console.error('Error al obtener información del Pokémon:', error.message);
  }
}

// Manejar el evento de clic del botón de búsqueda
searchButton.addEventListener('click', function() {
  const pokemonId = pokemonIdInput.value;
  getPokemonById(pokemonId);
});

// Obtener todos los elementos de imagen del Pokémon
const pokemonImages = document.querySelectorAll('.pokemon-image');

// Función para marcar la imagen del Pokémon seleccionado
function selectPokemonImage() {
  // Quitar la clase 'selected' de todas las imágenes del Pokémon
  pokemonImages.forEach(image => {
    image.classList.remove('selected');
  });

  // Agregar la clase 'selected' a la imagen del Pokémon actual
  const selectedPokemonImage = document.getElementById('pokemon-image');
  selectedPokemonImage.classList.add('selected');
}

// Manejar el evento de clic del botón de búsqueda
searchButton.addEventListener('click', function() {
  const pokemonId = pokemonIdInput.value;
  getPokemonById(pokemonId);
  selectPokemonImage(); // Llamar a la función para marcar la imagen del Pokémon seleccionado
});
