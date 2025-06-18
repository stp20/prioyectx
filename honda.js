
// Imágenes de diferentes perfiles del auto
const images = [
    'img/Honda.webp',
    'img/honda2.jpg',
    'img/honda3.jpg'

];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}

