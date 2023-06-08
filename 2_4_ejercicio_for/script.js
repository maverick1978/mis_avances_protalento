// Ejercicio 1: Números Impares
function mostrarImpares() {
    let resultado = "";

    for (let i = 1; i <= 50; i += 2) {
        resultado += i + " ";
    }

    document.getElementById("resultado1").textContent = resultado;
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

// Obtener nombre de Pokémon por número
function obtenerNombrePokemon(numero) {
    for (let i = 0; i < pokemonData.length; i++) {
        if (pokemonData[i].number === numero) {
            return pokemonData[i].name;
        }
    }
    return "";
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
const pokemonData = [
    { number: 1, name: "Bulbasaur" },
    { number: 2, name: "Ivysaur" },
    { number: 3, name: "Venusaur" },
    { number: 4, name: "Charmander" },
    { number: 5, name: "Charmeleon" },
    { number: 6, name: "Charizard" },
    { number: 7, name: "Squirtle" },
    { number: 8, name: "Wartortle" },
    { number: 9, name: "Blastoise" },
    { number: 10, name: "Caterpie" },
    // ... más Pokémon
];
