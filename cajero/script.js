// Arreglo de cuentas
var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

// Variables globales
var cuentaSeleccionada;
var passwordCorrecto = false;

// Función para iniciar sesión
function iniciarSesion() {
    var cuenta = document.getElementById("cuenta").value;
    var password = document.getElementById("password").value;

    // Validar el password
    if (password === "1234") {
        cuentaSeleccionada = parseInt(cuenta);
        passwordCorrecto = true;
        document.getElementById("opciones").style.display = "block";
        document.getElementById("resultado").innerHTML = "";
    } else {
        alert("Password incorrecto. Intenta nuevamente.");
    }
}

// Función para consultar el saldo
function consultarSaldo() {
    if (passwordCorrecto) {
        var saldo = cuentas[cuentaSeleccionada].saldo;
        document.getElementById("resultado").innerHTML = "Saldo actual: $" + saldo;
    } else {
        alert("Debes iniciar sesión primero.");
    }
}

// Función para ingresar un monto
function ingresarMonto() {
    if (passwordCorrecto) {
        var monto = prompt("Ingrese el monto a ingresar:");
        monto = parseFloat(monto);

        if (isNaN(monto)) {
            alert("Monto inválido. Intenta nuevamente.");
            return;
        }

        var saldoActual = cuentas[cuentaSeleccionada].saldo;
        var nuevoSaldo = saldoActual + monto;

        if (nuevoSaldo > 990) {
            alert("No puedes tener más de $990 en tu cuenta.");
            return;
        }

        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("resultado").innerHTML = "Monto ingresado: $" + monto + "<br>Nuevo saldo: $" + nuevoSaldo;
    } else {
        alert("Debes iniciar sesión primero.");
    }
}

// Función para retirar un monto
function retirarMonto() {
    if (passwordCorrecto) {
        var monto = prompt("Ingrese el monto a retirar:");
        monto = parseFloat(monto);

        if (isNaN(monto)) {
            alert("Monto inválido. Intenta nuevamente.");
            return;
        }

        var saldoActual = cuentas[cuentaSeleccionada].saldo;
        var nuevoSaldo = saldoActual - monto;

        if (nuevoSaldo < 10) {
            alert("No puedes tener menos de $10 en tu cuenta.");
            return;
        }

        cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
        document.getElementById("resultado").innerHTML = "Monto retirado: $" + monto + "<br>Nuevo saldo: $" + nuevoSaldo;
    } else {
        alert("Debes iniciar sesión primero.");
    }
}
