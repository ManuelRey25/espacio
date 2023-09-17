window.addEventListener('load', iniciar, false);

var contador = 0;
var slides = document.querySelectorAll('.slide');

function iniciar() {
    setInterval(cambiarImg, 5000);
    slides[contador].style.display = 'block';
}

function cambiarImg() {
    slides[contador].style.display = 'none';
    contador = (contador + 1) % slides.length;
    slides[contador].style.display = 'block';
}

function cambiarManual(sentido) {
    slides[contador].style.display = 'none';
    if (sentido === 'DER') {
        contador = (contador + 1) % slides.length;
    } else if (sentido === 'IZQ') {
        contador = (contador - 1 + slides.length) % slides.length;
    }
    slides[contador].style.display = 'block';
}
