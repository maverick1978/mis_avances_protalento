// Ejercicio 1: Números Impares
function mostrarImpares() {
    let resultado = "";

    for (let i = 1; i <= 50; i += 2) {
        resultado += i + " ";
    }


    document.getElementById("resultado1").textContent = resultado;
    console.log(resultado);
}

// Ejercicio 2: Nombres de Pokémons
function mostrarNombres() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        if (i % 5 === 0) {
            resultado += obtenerNombrePokemon(i) + " ";
        }
    }

    document.getElementById("resultado2").textContent = resultado;
}

// Función para obtener el nombre de un Pokémon por su número
function obtenerNombrePokemon(numero) {
    return pokemons[numero - 1];
}
    
    // Ejercicio 3: Elementos Numéricos en un Arreglo
function mostrarNumeros() {
    let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
    let resultado = "";

    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === "number") {
            resultado += arreglo[i] + " ";
        }
    }

    document.getElementById("resultado3").textContent = resultado;
}

// Arreglo de Pokémons
const pokemons = [
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
    'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow',
    'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m',
    'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish',
    'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
    'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop',
    'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem',
    'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer',
    'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb'
];
