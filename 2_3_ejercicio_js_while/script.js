// Ejercicio 1: Múltiplos de 5
function mostrarMultiplos() {
    let numero = parseInt(document.getElementById("numero1").value);
    let resultado = "";

    let i = 1;
    while (i <= numero) {
        if (i % 5 === 0) {
            resultado += i + " ";
        }
        i++;
    }

    document.getElementById("resultado1").textContent = resultado;
}

// Ejercicio 2: Lotería
function mostrarLoteria() {
    let num1 = parseInt(document.getElementById("numero2").value);
    let num2 = parseInt(document.getElementById("numero3").value);
    let resultado = "";

    for (let i = 1; i <= 50; i++) {
        if (i === num1 || i === num2) {
            resultado += i + " ¡Lotería! ";
        } else {
            resultado += i + " ";
        }
    }

    document.getElementById("resultado2").textContent = resultado;
}

// Ejercicio 3: Arreglo de Números
let numeros = [];
function capturarNumeros() {
    let numero = parseInt(document.getElementById("numero4").value);

    if (numero === 0) {
        mostrarNumerosCapturados();
    } else {
        numeros.push(numero);
        document.getElementById("numero4").value = "";
    }
}

function mostrarNumerosCapturados() {
    let resultado = "Números capturados: " + numeros.join(", ");
    document.getElementById("resultado3").textContent = resultado;
}

// Ejercicio 4: Concatenación de Palabras
let palabras = [];
function capturarPalabras() {
    let palabra = document.getElementById("palabra").value.trim();

    if (palabra === "") {
        mostrarPalabrasCapturadas();
    } else {
        palabras.push(palabra);
        document.getElementById("palabra").value = "";
    }
}

function mostrarPalabrasCapturadas() {
    let resultado = "Palabras capturadas: " + palabras.join(" ");
    document.getElementById("resultado4").textContent = resultado;
}

// Ejercicio 5: Día de la Semana
function mostrarMensajePersonalizado() {
    let diaSemana = document.getElementById("diaSemana").value.toLowerCase();
    let mensaje = "";

    switch (diaSemana) {
        case "lunes":
            mensaje = "¡Feliz inicio de semana!";
            break;
        case "martes":
        case "miércoles":
        case "miercoles":
            mensaje = "¡Ánimo, ya es mitad de semana!";
            break;
        case "jueves":
            mensaje = "¡Casi llegamos al viernes!";
            break;
        case "viernes":
            mensaje = "¡Viernes, por fin!";
            break;
        case "sábado":
        case "sabado":
            mensaje = "¡Disfruta tu fin de semana!";
            break;
        case "domingo":
            mensaje = "Ve a descansar";
            break;
        default:
            mensaje = "No es un día válido";
            break;
    }

    document.getElementById("resultado5").textContent = mensaje;
}
