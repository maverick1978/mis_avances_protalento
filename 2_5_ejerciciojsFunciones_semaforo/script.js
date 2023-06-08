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

    // Encender la luz verde
    luzVerde.style.backgroundColor = 'green';

    // Esperar 2 segundos
    setTimeout(() => {
        // Apagar la luz verde y encender la luz amarilla
        luzVerde.style.backgroundColor = 'black';
        luzAmarilla.style.backgroundColor = 'yellow';

        // Esperar 1 segundo
        setTimeout(() => {
            // Apagar la luz amarilla y encender la luz roja
            luzAmarilla.style.backgroundColor = 'black';
            luzRoja.style.backgroundColor = 'red';
        }, 1000);
    }, 2000);
}

// Llamar a la función para iniciar el ciclo de cambio de luces
cambiarLuces();

// Configurar el cambio automático de luces utilizando setInterval
setInterval(cambiarLuces, 4000);
