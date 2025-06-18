
// Catalogo de autos con ofertas
// Array de autos con id, nombre y precio
const cars = [
    { id: 1, name: "Toyota Corolla 2023", price: 22000000 },
    { id: 2, name: "Audi R8", price: 50800000 },
    { id: 3, name: "Ford Mustang 2019", price: 25900000 },
    { id: 4, name: "Chevrolet camaro", price: 15500000 },
    { id: 5, name: "Mercedes-Benz Clase C", price: 17500000 },
    { id: 6, name: "Porsche 911", price: 79900000 },
    { id: 7, name: "Honda CR-V 2022", price: 28500000 }
];

// funcion para mostrar alertas
// Muestra una alerta personalizada en la parte superior de la página
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

// cargar el carrito al inicio
// Carga el número de artículos en el carrito desde localStorage
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

// Cargar el carrito al inicio y agregar botones a cada tarjeta de auto
// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    // agregar botones de "Agregar al carrito" a cada tarjeta de auto
    // Selecciona todas las tarjetas de auto y agrega un botón a cada una
    document.querySelectorAll('.catalogo .auto').forEach((card, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-success w-100 mt-2 add-to-cart-btn';
        btn.innerHTML = '<i class="bi bi-cart-plus"></i> Agregar al carrito';
        btn.onclick = () => addToCart(i + 1);
        card.appendChild(btn);
    });
});
