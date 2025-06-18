
// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");
    const politica = document.getElementById("politica");
    const alertDiv = document.getElementById("formAlert");
    const successDiv = document.getElementById("formSuccess");

    form.addEventListener("submit", function (e) {
        let valid = true;
        alertDiv.classList.add("d-none");
        successDiv.classList.add("d-none");

        // Nombre
        if (!nombre.value.trim()) {
            nombre.classList.add("is-invalid");
            valid = false;
        } else {
            nombre.classList.remove("is-invalid");
        }
        // Correo
        if (!correo.value.trim() || !correo.checkValidity()) {
            correo.classList.add("is-invalid");
            valid = false;
        } else {
            correo.classList.remove("is-invalid");
        }
        // Teléfono (opcional, pero si hay valor debe ser válido)
        if (telefono.value.trim() && !telefono.checkValidity()) {
            telefono.classList.add("is-invalid");
            valid = false;
        } else {
            telefono.classList.remove("is-invalid");
        }
        // Mensaje
        if (!mensaje.value.trim()) {
            mensaje.classList.add("is-invalid");
            valid = false;
        } else {
            mensaje.classList.remove("is-invalid");
        }
        // Política
        if (!politica.checked) {
            politica.classList.add("is-invalid");
            valid = false;
        } else {
            politica.classList.remove("is-invalid");
        }

        if (!valid) {
            e.preventDefault();
            alertDiv.textContent = "Por favor completa correctamente todos los campos obligatorios.";
            alertDiv.classList.remove("d-none");
        } else {
            e.preventDefault();
            form.reset();
            successDiv.classList.remove("d-none");
        }
    });

    [nombre, correo, telefono, mensaje, politica].forEach(input => {
        input.addEventListener("input", function () {
            if (
                (input.type === "checkbox" && input.checked) ||
                (input.type !== "checkbox" && input.value.trim())
            ) {
                input.classList.remove("is-invalid");
            }
        });
    });
});




// Scroll suave al hacer clic en el enlace de contacto
document.addEventListener("DOMContentLoaded", function () {
    const contactoLink = document.querySelector('a[href="#contacto"]');
    const contactoSection = document.querySelector('.container.my-5.bg-body-secondary');
    if (contactoLink && contactoSection) {
        contactoLink.addEventListener("click", function (e) {
            e.preventDefault();
            contactoSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});


// Actualización del contador del carrito
document.addEventListener("DOMContentLoaded", function () {
    const cartCount = 0;
    const badge = document.getElementById("cart-count");
    if (cartCount > 0) {
        badge.textContent = cartCount;
        badge.style.display = "inline-block";
    }
});


// Funcionalidad de búsqueda en la barra de navegación
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("navbarSearchForm");
    const searchInput = document.getElementById("navbarSearchInput");
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `catalogo.html?buscar=${encodeURIComponent(query)}`;
        }
    });
});

