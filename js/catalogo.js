
// Datos de los autos para agregar al carrito
const cars = [
    { id: 1, name: "Ford Mustang GT", price: 35000000 },
    { id: 2, name: "Chevrolet Camaro SS", price: 40000000 },
    { id: 3, name: "BMW M4 Competition", price: 55000000 },
    { id: 4, name: "Audi R8 V10", price: 70000000 },
    { id: 5, name: "Porsche 911 Carrera", price: 100000000 },
    { id: 6, name: "Nissan GT-R", price: 115000000 },
    { id: 7, name: "Mercedes AMG GT", price: 120000000 },
    { id: 8, name: "Lamborghini Huracán", price: 210000000 },
    { id: 9, name: "Ferrari 488 GTB", price: 250000000 },
    { id: 10, name: "Toyota Supra GR", price: 55000000 },
    { id: 11, name: "Mazda MX-5", price: 35000000 },
    { id: 12, name: "Tesla Model S Plaid", price: 130000000 }
];

// Mostrar un mensaje de alerta de Bootstrap
function showAlert(message, type = "warning") {
    const oldAlert = document.getElementById('custom-alert');
    if (oldAlert) oldAlert.remove();

    const alertDiv = document.createElement('div');
    alertDiv.id = 'custom-alert';
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3 shadow`;
    alertDiv.style.zIndex = 2000;
    alertDiv.style.minWidth = '300px';
    alertDiv.innerHTML = `
            <strong><i class="bi bi-exclamation-triangle me-2"></i></strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        `;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        if (alertDiv) alertDiv.classList.remove('show');
    }, 2500);
}

// Cargar el carrito desde localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Función para agregar al carrito (solo uno por producto)
function addToCart(carId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const car = cars.find(c => c.id === carId);
    const exists = cart.find(item => item.id === carId);
    if (exists) {
        showAlert('¡Ya agregaste este vehículo al carrito! Solo puedes añadir uno de cada modelo.', 'info');
        return;
    }
    cart.push({ id: car.id, name: car.name, price: car.price, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    showAlert('Vehículo agregado al carrito exitosamente.', 'success');
}

// Inicializar el carrito al cargar la página
// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    // Agregar botones a cada tarjeta de auto
    // Busca todos los .car-card y agrega el botón
    document.querySelectorAll('.car-card').forEach((card, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-success w-100 mt-2 add-to-cart-btn';
        btn.innerHTML = '<i class="bi bi-cart-plus"></i> Agregar al carrito';
        btn.onclick = () => addToCart(i + 1);
        card.appendChild(btn);
    });
});
