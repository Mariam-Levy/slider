const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');

// Configura la posición horizontal de cada slide usando porcentajes basados en su índice.
slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

// Inicializa un contador para rastrear la posición actual del slide.
let counter = 0;

// Agrega un listener al botón de siguiente para avanzar al siguiente slide.
nextBtn.addEventListener('click', function() {
    counter++; // Incrementa el contador para avanzar al siguiente slide.
    carousel(); // Llama a la función carousel para actualizar la visualización.
});

// Agrega un listener al botón de anterior para retroceder al slide anterior.
prevBtn.addEventListener('click', function() {
    counter--; // decrementa el contador para retrocer al anterior slide.
    carousel(); // Llama a la función carousel para actualizar la visualización.
});

// Función que controla el carrusel de slides.
function carousel() {
    // Verifica si el contador está en una posición donde se debe mostrar el botón de siguiente.
    if(counter < slides.length - 1) {
        nextBtn.style.display = 'block'; // Muestra el botón de siguiente.
    } else {
        nextBtn.style.display = 'none'; // Oculta el botón de siguiente al llegar al final.
    }

    // Verifica si el contador está en una posición donde se debe mostrar el botón de anterior.
    if(counter > 0){
        prevBtn.style.display = 'block'; // Muestra el botón de anterior.
    } else {
        prevBtn.style.display = 'none'; // Oculta el botón de anterior al llegar al inicio.
    }

    // Actualiza la posición de los slides en función del valor del contador.
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

// Al inicio, se establece que el botón de anterior esté oculto.
prevBtn.style.display = 'none';
