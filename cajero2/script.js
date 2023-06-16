// Datos de las cuentas
var cuentas = [
    { nombre: "Persona 1", saldo: 200 },
    { nombre: "Persona 2", saldo: 290 },
    { nombre: "Persona 3", saldo: 67 }
];

// Variables globales
var selectedAccount = null;

// Función para validar el password y mostrar opciones si es correcto
function login() {
    var password = document.getElementById("password-input").value;
    // Validar el password (puedes implementar tu propia lógica de validación aquí)
    if (password === "1234") {
        showOptions();
    } else {
        alert("Contraseña incorrecta. Intenta nuevamente.");
    }
}

// Función para mostrar las opciones disponibles
function showOptions() {
    var accountSelect = document.getElementById("account-select");
    selectedAccount = accountSelect.options[accountSelect.selectedIndex].value;
    document.getElementById("account-name").textContent = cuentas[selectedAccount].nombre;
    document.getElementById("balance-amount").textContent = cuentas[selectedAccount].saldo;
    document.getElementById("login").style.display = "none";
    document.getElementById("transactions").style.display = "block";

    // Limpiar los campos de entrada
    document.getElementById("deposit-input").value = "";
    document.getElementById("withdraw-input").value = "";
    document.getElementById("transfer-input").value = "";
}

// Función para depositar dinero
function deposit() {
    var depositAmount = parseFloat(document.getElementById("deposit-input").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Ingrese un monto válido para depositar.");
        return;
    }
    cuentas[selectedAccount].saldo += depositAmount;
    document.getElementById("balance-amount").textContent = cuentas[selectedAccount].saldo;
    alert("Se ha depositado correctamente el monto de $" + depositAmount);

    // Limpiar el campo de entrada
    document.getElementById("deposit-input").value = "";
}

// Función para retirar dinero
function withdraw() {
    var withdrawAmount = parseFloat(document.getElementById("withdraw-input").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Ingrese un monto válido para retirar.");
        return;
    }
    if (withdrawAmount > cuentas[selectedAccount].saldo) {
        alert("Saldo insuficiente para retirar el monto solicitado.");
        return;
    }
    cuentas[selectedAccount].saldo -= withdrawAmount;
    document.getElementById("balance-amount").textContent = cuentas[selectedAccount].saldo;
    alert("Se ha retirado correctamente el monto de $" + withdrawAmount);

    // Limpiar el campo de entrada
    document.getElementById("withdraw-input").value = "";
}

// Función para transferir saldo entre cuentas
function transfer() {
    var transferAmount = parseFloat(document.getElementById("transfer-input").value);
    var recipientAccount = document.getElementById("recipient-account-select").value;
    if (isNaN(transferAmount) || transferAmount <= 0) {
        alert("Ingrese un monto válido para transferir.");
        return;
    }
    if (transferAmount > cuentas[selectedAccount].saldo) {
        alert("Saldo insuficiente para transferir el monto solicitado.");
        return;
    }
    cuentas[selectedAccount].saldo -= transferAmount;
    cuentas[recipientAccount].saldo += transferAmount;
    document.getElementById("balance-amount").textContent = cuentas[selectedAccount].saldo;
    alert("Se ha transferido correctamente el monto de $" + transferAmount + " a la cuenta de " + cuentas[recipientAccount].nombre);

    // Limpiar los campos de entrada
    document.getElementById("transfer-input").value = "";

    // Restablecer el valor del select de cuenta destinataria
    document.getElementById("recipient-account-select").selectedIndex = 0;
}

// Función para cerrar sesión y regresar al inicio de sesión
function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("transactions").style.display = "none";
    selectedAccount = null;
    document.getElementById("password-input").value = "";

    // Limpiar los campos de entrada
    document.getElementById("deposit-input").value = "";
    document.getElementById("withdraw-input").value = "";
    document.getElementById("transfer-input").value = "";

    // Restablecer el valor del select de cuenta destinataria
    document.getElementById("recipient-account-select").selectedIndex = 0;
}

// Event Listeners
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("deposit-btn").addEventListener("click", deposit);
document.getElementById("withdraw-btn").addEventListener("click", withdraw);
document.getElementById("transfer-btn").addEventListener("click", transfer);
document.getElementById("logout-btn").addEventListener("click", logout);
