// Imágenes de diferentes perfiles del auto
const images = [
    'img/mustang2.webp',
    'img/mustang3.webp',
    'img/mustang4.webp',
    'img/mustang5.webp'
];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}
