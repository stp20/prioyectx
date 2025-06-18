
// Imágenes de diferentes perfiles del auto
const images = [
    'img/toyota.webp',
    'img/toyota3.webp',
    'img/toyota4.webp',
    'img/toyota5.webp'
];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}