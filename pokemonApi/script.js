document.addEventListener('DOMContentLoaded', () => {
    const exerciseSelect = document.getElementById('exerciseSelect');
    const executeButton = document.getElementById('executeButton');
    const exerciseOutput = document.getElementById('exerciseOutput');
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    executeButton.addEventListener('click', async () => {
      const selectedExercise = exerciseSelect.value;
      exerciseOutput.innerHTML = 'Cargando...';
  
      try {
        let output = '';
  
        switch (selectedExercise) {
          case '1':
            output = await executeExercise1();
            break;
          case '2':
            output = await executeExercise2();
            break;
          case '3':
            output = await executeExercise3();
            break;
          case '4':
            output = await executeExercise4();
            break;
          case '5':
            output = await executeExercise5();
            break;
          case '6':
            output = await executeExercise6();
            break;
          default:
            output = 'Selecciona un ejercicio válido.';
        }
  
        exerciseOutput.innerHTML = output;
      } catch (error) {
        exerciseOutput.innerHTML = `Error: ${error.message}`;
      }
    });
  
    async function executeExercise1() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      const data = await response.json();
      const types = data.types.map(type => type.type.name);
      return `Tipos de Pikachu: ${types.join(', ')}`;
    }
  
    async function executeExercise2() {
      const response = await fetch('http://openlibrary.org/search.json?q=i+robot');
      const data = await response.json();
      const authors = data.docs[0].author_name.join(', ');
      return `Autores de "I, Robot": ${authors}`;
    }
  
    async function executeExercise3() {
      const response = await fetch('http://openlibrary.org/search.json?author=asimov');
      const data = await response.json();
      const books = data.docs.map(book => book.title).join(', ');
      return `Libros de Asimov: ${books}`;
    }
  
    async function executeExercise4() {
      const response = await fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay');
      const data = await response.json();
      const genre = data.artists[0].strGenre;
      return `Género de Coldplay: ${genre}`;
    }
  
    async function executeExercise5() {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const data = await response.json();
      const films = await Promise.all(data.films.map(async (filmUrl) => {
        const filmResponse = await fetch(filmUrl);
        const filmData = await filmResponse.json();
        return filmData.title;
      }));
      return `Información de Luke Skywalker:<br>Altura: ${data.height}<br>Peso: ${data.mass}<br>Películas en las que aparece: ${films.join(', ')}`;
    }
  
    async function executeExercise6() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
      const data = await response.json();
      
      const pokemonInfoArray = await Promise.all(data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
  
        return {
          name: pokemonData.name,
          moves: pokemonData.moves.map(move => move.move.name),
          types: pokemonData.types.map(type => type.type.name),
          height: pokemonData.height,
          weight: pokemonData.weight
        };
      }));
  
      return JSON.stringify(pokemonInfoArray);
    }
  });
  