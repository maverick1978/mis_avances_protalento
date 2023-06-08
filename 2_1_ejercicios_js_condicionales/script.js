// Ejercicio 1
function preguntaBellisimo() {
    const respuesta = prompt('¿Eres bellisimo/a? / Responde S o s');

    if (respuesta.toLowerCase() === 's') {
        alert('Ciertamente');
    } else {
        alert('No te creo');
    }
}

// Ejercicio 2
function divisibleEntreDos() {
    const numero = prompt('Ingresa un número');

    if (numero % 2 === 0) {
        alert(numero + ' es divisible entre 2');
    } else {
        alert(numero + ' no es divisible entre 2');
    }
}

// Ejercicio 3
function esPar() {
    const numero = prompt('Ingresa un número');

    if (numero % 2 === 0) {
        alert(numero + ' es par');
    } else {
        alert(numero + ' no es par');
    }
}

// Ejercicio 4
function numeroCliente() {
    const numero = prompt('Ingresa un número de cliente');

    if (numero === '1000') {
        alert('Ganaste un premio');
    } else {
        alert('Lo sentimos, sigue participando. Tu número de cliente es ' + numero);
    }
}

// Ejercicio 5
function menorNumero() {
    const numero1 = prompt('Ingresa el primer número');
    const numero2 = prompt('Ingresa el segundo número');

    if (numero1 < numero2) {
        alert(numero1 + ' es menor que ' + numero2);
    } else {
        alert(numero2 + ' es menor que ' + numero1);
    }
}

// Ejercicio 6
function mayorNumero() {
    const numero1 = prompt('Ingresa el primer número');
    const numero2 = prompt('Ingresa el segundo número');
    const numero3 = prompt('Ingresa el tercer número');

    if (numero1 >= numero2 && numero1 >= numero3) {
        alert(numero1 + ' es el número mayor');
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        alert(numero2 + ' es el número mayor');
    } else {
        alert(numero3 + ' es el número mayor');
    }
}

// Ejercicio 7
function diaSemana() {
    const dia = prompt('Ingresa un día de la semana');

    if (dia.toLowerCase() === 'lunes') {
        alert('Es lunes');
    } else if (dia.toLowerCase() === 'viernes') {
        alert('Es viernes');
    } else if (dia.toLowerCase() === 'sábado' || dia.toLowerCase() === 'domingo') {
        alert('Es fin de semana');
    } else {
        alert('No es ni lunes, ni viernes, ni fin de semana');
    }
}

// Ejercicio 8
function calificacion() {
    const calificacion = prompt('Ingresa una calificación (entre 1 y 10)');

    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert('Reprobado');
        } else if (calificacion < 9) {
            alert('Regular');
        } else if (calificacion == 9) {
            alert('Bien');
        } else {
            alert('Excelente');
        }
    } else {
        alert('La calificación ingresada no es válida');
    }
}

// Ejercicio 9
function helado() {
    const topping = prompt('Elige un topping: Oreo, KitKat o Brownie');

    let precio = 50;

    switch (topping.toLowerCase()) {
        case 'oreo':
            precio += 10;
            break;
        case 'kitkat':
            precio += 15;
            break;
        case 'brownie':
            precio += 20;
            break;
        default:
            alert('No tenemos ese topping, lo sentimos.');
            break;
    }

    alert('El precio del helado es ' + precio + ' MXN');
}

// Ejercicio 10
function curso() {
    const nivel = prompt('Elige un nivel: Course, Carrera o Master');
    const precioCourse = 4999;
    const precioCarrera = 3999;
    const precioMaster = 2999;
    let precio;

    switch (nivel.toLowerCase()) {
        case 'course':
            precio = precioCourse;
            break;
        case 'carrera':
            precio = precioCarrera;
            break;
        case 'master':
            precio = precioMaster;
            break;
        default:
            alert('El nivel ingresado no es válido');
            return;
    }

    const beca = prompt('¿Cuentas con alguna beca? (Facebook, Google, Jesua)');

    switch (beca.toLowerCase()) {
        case 'facebook':
            precio -= precio * 0.2;
            break;
        case 'google':
            precio -= precio * 0.15;
            break;
        case 'jesua':
            precio -= precio * 0.5;
            break;
        default:
            alert('No tienes beca');
            break;
    }

    alert('El precio mensual con descuento es ' + precio + ' MXN');
}

// Ejercicio 11
function cursoDuracion() {
    const nivel = prompt('Elige un nivel: Course, Carrera o Master');
    const precioCourse = 4999;
    const precioCarrera = 3999;
    const precioMaster = 2999;
    let precio;
    let duracion;

    switch (nivel.toLowerCase()) {
        case 'course':
            precio = precioCourse;
            duracion = 2;
            break;
        case 'carrera':
            precio = precioCarrera;
            duracion = 6;
            break;
        case 'master':
            precio = precioMaster;
            duracion = 12;
            break;
        default:
            alert('El nivel ingresado no es válido');
            return;
    }

    const beca = prompt('¿Cuentas con alguna beca? (Facebook, Google, Jesua)');

    switch (beca.toLowerCase()) {
        case 'facebook':
            precio -= precio * 0.2;
            break;
        case 'google':
            precio -= precio * 0.15;
            break;
        case 'jesua':
            precio -= precio * 0.5;
            break;
        default:
            alert('No tienes beca');
            break;
    }

    const total = precio * duracion;

    alert('El precio mensual con descuento es ' + precio + ' MXN');
    alert('El total a pagar por el curso es ' + total + ' MXN');
}

// Ejercicio 12
function calcularTotal() {
    const tipoVehiculo = prompt('Ingresa el tipo de vehículo (coche, moto, autobús)');
    const kmsRecorridos = prompt('Ingresa los kilómetros recorridos');
    const litrosConsumidos = prompt('Ingresa los litros consumidos');
    let precioKm;
    let costoTotal;

    switch (tipoVehiculo.toLowerCase()) {
        case 'coche':
            precioKm = 0.20;
            break;
        case 'moto':
            precioKm = 0.10;
            break;
        case 'autobús':
            precioKm = 0.5;
            break;
        default:
            alert('El tipo de vehículo ingresado no es válido');
            return;
    }

    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
        costoTotal = precioKm * kmsRecorridos + 5;
    } else if (litrosConsumidos > 100) {
        costoTotal = precioKm * kmsRecorridos + 10;
    } else {
        alert('La cantidad de litros consumidos ingresada no es válida');
        return;
    }

    alert('El total a pagar es ' + costoTotal);
}
