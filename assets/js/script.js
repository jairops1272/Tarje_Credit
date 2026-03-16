document.addEventListener('DOMContentLoaded', function() {
    
    const formLogin = document.getElementById('form-login');
    const seccionLogin = document.getElementById('seccion-login');
    const seccionTarjeta = document.getElementById('seccion-tarjeta');

    // 1. Simular el Login
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se actualice
        
        // Ocultamos el login
        seccionLogin.classList.remove('d-flex');
        seccionLogin.classList.add('d-none');
        
        // Mostramos la tarjeta
        seccionTarjeta.classList.remove('d-none');
        seccionTarjeta.classList.add('d-flex');
    });

    // 2. Reflejar datos en la tarjeta en tiempo real
    const inputNombre = document.getElementById('input-nombre');
    const mostrarNombre = document.getElementById('mostrar-nombre');
    
    inputNombre.addEventListener('input', (e) => {
        mostrarNombre.textContent = e.target.value.toUpperCase() || 'JOHN DOE';
    });

    const inputNumero = document.getElementById('input-numero');
    const mostrarNumero = document.getElementById('mostrar-numero');
    
    inputNumero.addEventListener('input', (e) => {
        mostrarNumero.textContent = e.target.value || '**** **** **** ****';
    });

    const inputVencimiento = document.getElementById('input-vencimiento');
    const mostrarVencimiento = document.getElementById('mostrar-vencimiento');
    
    inputVencimiento.addEventListener('input', (e) => {
        mostrarVencimiento.textContent = e.target.value || 'MM/AA';
    });

    const inputCvv = document.getElementById('input-cvv');
    const mostrarCvv = document.getElementById('mostrar-cvv');
    
    inputCvv.addEventListener('input', (e) => {
        mostrarCvv.textContent = e.target.value || '***';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    const formLogin = document.getElementById('form-login');
    const seccionLogin = document.getElementById('seccion-login');
    const seccionTarjeta = document.getElementById('seccion-tarjeta');
    const tarjetaVisual = document.getElementById('tarjeta-visual');

    // 1. Transición suave del Login a la Tarjeta
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        seccionLogin.classList.remove('d-flex');
        seccionLogin.classList.add('d-none');
        
        seccionTarjeta.classList.remove('d-none');
        seccionTarjeta.classList.add('d-flex', 'fade-in'); // Agregamos fade-in aquí
    });

    // 2. Elementos del formulario y la tarjeta
    const inputNombre = document.getElementById('input-nombre');
    const mostrarNombre = document.getElementById('mostrar-nombre');
    
    const inputNumero = document.getElementById('input-numero');
    const mostrarNumero = document.getElementById('mostrar-numero');
    
    const inputVencimiento = document.getElementById('input-vencimiento');
    const mostrarVencimiento = document.getElementById('mostrar-vencimiento');
    
    const inputCvv = document.getElementById('input-cvv');
    const mostrarCvv = document.getElementById('mostrar-cvv');

    // 3. Lógica para reflejar datos
    inputNombre.addEventListener('input', (e) => mostrarNombre.textContent = e.target.value.toUpperCase() || 'JOHN DOE');
    inputNumero.addEventListener('input', (e) => mostrarNumero.textContent = e.target.value || '**** **** **** ****');
    inputVencimiento.addEventListener('input', (e) => mostrarVencimiento.textContent = e.target.value || 'MM/AA');
    inputCvv.addEventListener('input', (e) => mostrarCvv.textContent = e.target.value || '***');

    // 4. Lógica para GIRAR la tarjeta 3D
    // Si hace focus en Nombre, mostramos el frente (quitamos clase girada)
    inputNombre.addEventListener('focus', () => {
        tarjetaVisual.classList.remove('girada');
    });

    // Si hace focus en Número, Vencimiento o CVV, mostramos el reverso (agregamos clase girada)
    [inputNumero, inputVencimiento, inputCvv].forEach(input => {
        input.addEventListener('focus', () => {
            tarjetaVisual.classList.add('girada');
        });
    });
});