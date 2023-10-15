async function obtenerPokemon(nombrePokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener el Pokémon');
      }
      const data = await response.json();
      const tipos = data.types.map(type => type.type.name);
      console.log(`Tipos del Pokémon ${nombrePokemon}:`, tipos);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async function peticionLibro(titulo) {
    try {
      const response = await fetch(`http://openlibrary.org/search.json?q=${titulo}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener información del libro');
      }
      const data = await response.json();
      const primerLibro = data.docs[0];
      if (primerLibro && primerLibro.author_name) {
        console.log('Autores del primer libro:', primerLibro.author_name);
      } else {
        console.log('No se encontraron autores para el libro');
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  