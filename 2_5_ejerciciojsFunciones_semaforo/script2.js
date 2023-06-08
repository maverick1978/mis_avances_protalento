// Obtener referencias a los elementos del semáforo
const semaforo = document.getElementById('semaforo');
const luzVerde = document.getElementById('luz-verde');
const luzAmarilla = document.getElementById('luz-amarilla');
const luzRoja = document.getElementById('luz-roja');

// Definir una función para cambiar las luces del semáforo
function cambiarLuces() {
    // Apagar todas las luces
    luzVerde.style.backgroundColor = 'black';
    luzAmarilla.style.backgroundColor = 'black';
    luzRoja.style.backgroundColor = 'black';

    // Esperar 1 segundo
    setTimeout(() => {
        // Encender la luz verde
        luzVerde.style.backgroundColor = 'green';

        // Esperar 2 segundos
        setTimeout(() => {
            // Encender la luz amarilla
            luzVerde.style.backgroundColor = 'black';
            luzAmarilla.style.backgroundColor = 'yellow';

            // Esperar 1 segundo
            setTimeout(() => {
                // Encender la luz roja
                luzAmarilla.style.backgroundColor = 'black';
                luzRoja.style.backgroundColor = 'red';

                // Esperar 2 segundos y llamar de nuevo a la función para reiniciar el ciclo
                setTimeout(cambiarLuces, 2000);
            }, 1000);
        }, 2000);
    }, 1000);
}

// Llamar a la función para iniciar el ciclo de cambio de luces
cambiarLuces();
