function mostrarMultiplos() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    // Validar que se ingrese un valor numérico
    if (!esNumeroValido(numero)) {
        resultado.innerHTML = "<p>Por favor, ingrese un número válido.</p>";
        return;
    }

    var contador = 1;
    var multiplos = [];

    while (contador <= numero) {
        if (contador % 5 === 0) {
            multiplos.push(contador);
        }
        contador++;
    }

    if (multiplos.length > 0) {
        resultado.innerHTML = "<p>Los múltiplos de 5 hasta el número " + numero + " son:</p>";
        resultado.innerHTML += "<ul>";
        multiplos.forEach(function (multiplo) {
            resultado.innerHTML += "<li>" + multiplo + "</li>";
        });
        resultado.innerHTML += "</ul>";
    } else {
        resultado.innerHTML = "<p>No hay múltiplos de 5 hasta el número " + numero + ".</p>";
    }
}

function esNumeroValido(numero) {
    return !isNaN(numero) && numero !== "" && numero !== null;
}
