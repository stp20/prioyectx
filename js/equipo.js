// Validación del formulario "Trabaja con Nosotros"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trabajaForm');
    const alertDiv = document.getElementById('trabajaAlert');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        // Nombre
        const nombre = form.nombre;
        if (!nombre.value.trim()) {
            nombre.classList.add('is-invalid');
            valid = false;
        } else {
            nombre.classList.remove('is-invalid');
        }
        // Correo
        const correo = form.correo;
        if (!correo.value.trim() || !correo.checkValidity()) {
            correo.classList.add('is-invalid');
            valid = false;
        } else {
            correo.classList.remove('is-invalid');
        }
        // Número
        const numero = form.numero;
        if (!numero.value.trim() || !numero.checkValidity()) {
            numero.classList.add('is-invalid');
            valid = false;
        } else {
            numero.classList.remove('is-invalid');
        }
        // CV
        const cv = form.cv;
        const file = cv.files[0];
        if (!file || file.type !== "application/pdf" || file.size > 2 * 1024 * 1024) {
            cv.classList.add('is-invalid');
            valid = false;
        } else {
            cv.classList.remove('is-invalid');
        }
        // Notificación
        if (valid) {
            alertDiv.className = "alert alert-success mt-3";
            alertDiv.textContent = "¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.";
            alertDiv.classList.remove('d-none');
            form.reset();
        } else {
            alertDiv.className = "alert alert-danger mt-3";
            alertDiv.textContent = "Por favor completa todos los campos correctamente.";
            alertDiv.classList.remove('d-none');
        }
    });
});
