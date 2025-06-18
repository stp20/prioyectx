

// Obtener carrito desde localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
// // Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Renderizar el carrito
function renderCart() {
    const cart = getCart();
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    cartBody.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${item.name}</td>
                    <td>$${item.price.toLocaleString()}</td>
                    <td>
                        <input type="number" min="1" value="${item.quantity}" class="form-control form-control-sm quantity-input" data-idx="${idx}">
                    </td>
                    <td>$${subtotal.toLocaleString()}</td>
                    <td>
                        <button class="btn btn-danger btn-sm remove-btn" data-idx="${idx}">&times;</button>
                    </td>
                `;
        cartBody.appendChild(row);
    });
    cartTotal.textContent = total.toLocaleString();
}

// Actualizar cantidad
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('quantity-input')) {
        const idx = e.target.getAttribute('data-idx');
        let cart = getCart();
        cart[idx].quantity = Math.max(1, parseInt(e.target.value));
        saveCart(cart);
        renderCart();
    }
});

// Eliminar producto
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const idx = e.target.getAttribute('data-idx');
        let cart = getCart();
        cart.splice(idx, 1);
        saveCart(cart);
        renderCart();
    }
});

// Inicializar carrito
document.addEventListener('DOMContentLoaded', renderCart);


function renderCartSummary() {
    const cart = getCart();
    let count = 0;
    let subtotal = 0;
    cart.forEach(item => {
        count += item.quantity;
        subtotal += item.price * item.quantity;
    });
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-subtotal').textContent = subtotal.toLocaleString();
}

// Llama también al render del resumen cuando se actualiza el carrito
function renderCart() {
    const cart = getCart();
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    cartBody.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
                        <td>${item.name}</td>
                        <td>$${item.price.toLocaleString()}</td>
                        <td>
                            <input type="number" min="1" value="${item.quantity}" class="form-control form-control-sm quantity-input" data-idx="${idx}">
                        </td>
                        <td>$${subtotal.toLocaleString()}</td>
                        <td>
                            <button class="btn btn-danger btn-sm remove-btn" data-idx="${idx}">&times;</button>
                        </td>
                    `;
        cartBody.appendChild(row);
    });
    cartTotal.textContent = total.toLocaleString();
    renderCartSummary();
}
// Inicializar resumen al cargar
document.addEventListener('DOMContentLoaded', renderCartSummary);



    // Oculta la alerta al inicio
    document.getElementById('cart-alert').classList.remove('show');
document.querySelectorAll('.pay-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cart.length) {
            e.preventDefault();
            const alertDiv = document.getElementById('cart-alert');
            alertDiv.classList.add('show');
            // Oculta automáticamente después de 4 segundos
            setTimeout(() => {
                alertDiv.classList.remove('show');
            }, 4000);
        }
    });
});


// Función para mostrar alertas
function showAlert(id) {
    const alertDiv = document.getElementById(id);
    alertDiv.classList.add('show');
    setTimeout(() => {
        alertDiv.classList.remove('show');
    }, 4000);
}

// Validación al intentar pagar
document.querySelectorAll('.pay-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cart.length) {
            e.preventDefault();
            showAlert('cart-alert');
            return;
        }
        // Verifica si algún producto tiene cantidad inválida (vacía, 0 o menor a 1)
        let invalidQty = cart.some(item => !item.quantity || isNaN(item.quantity) || item.quantity < 1);
        if (invalidQty) {
            e.preventDefault();
            showAlert('cart-qty-alert');
            return;
        }
    });
});



// Limitar la cantidad máxima a 10 en los inputs del carrito
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('quantity-input')) {
        let value = parseInt(e.target.value);
        if (value > 10) {
            e.target.value = 10;
            value = 10;
        }
        const idx = e.target.getAttribute('data-idx');
        let cart = getCart();
        cart[idx].quantity = Math.max(1, value);
        saveCart(cart);
        renderCart();
    }
});

// Al renderizar el carrito, asegúrate de que el input tenga max=10
function renderCart() {
    const cart = getCart();
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    cartBody.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toLocaleString()}</td>
                <td>
                    <input type="number" min="1" max="10" value="${item.quantity}" class="form-control form-control-sm quantity-input" data-idx="${idx}">
                </td>
                <td>$${subtotal.toLocaleString()}</td>
                <td>
                    <button class="btn btn-danger btn-sm remove-btn" data-idx="${idx}">&times;</button>
                </td>
            `;
        cartBody.appendChild(row);
    });
    cartTotal.textContent = total.toLocaleString();
    if (typeof renderCartSummary === 'function') renderCartSummary();
}

// Vaciar carrito
document.getElementById('clear-cart').addEventListener('click', function () {
    localStorage.removeItem('cart');
    if (typeof renderCart === 'function') renderCart();
});