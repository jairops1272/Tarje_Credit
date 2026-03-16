document.addEventListener('DOMContentLoaded', function() {
    
    // Variables generales
    const formLogin = document.getElementById('form-login');
    const seccionLogin = document.getElementById('seccion-login');
    const seccionTarjeta = document.getElementById('seccion-tarjeta');
    const tarjetaVisual = document.getElementById('tarjeta-visual');

    // 1. Transición suave del Login a la Tarjeta
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se actualice al dar clic en Entrar
        
        seccionLogin.classList.remove('d-flex');
        seccionLogin.classList.add('d-none');
        
        seccionTarjeta.classList.remove('d-none');
        seccionTarjeta.classList.add('d-flex', 'fade-in'); 
    });

    // Elementos de los inputs y textos a mostrar
    const inputNombre = document.getElementById('input-nombre');
    const mostrarNombre = document.getElementById('mostrar-nombre');
    
    const inputNumero = document.getElementById('input-numero');
    const mostrarNumero = document.getElementById('mostrar-numero');
    
    const inputVencimiento = document.getElementById('input-vencimiento');
    const mostrarVencimiento = document.getElementById('mostrar-vencimiento');
    
    const inputCvv = document.getElementById('input-cvv');
    const mostrarCvv = document.getElementById('mostrar-cvv');

    // 2. Lógica para reflejar datos y VALIDAR NÚMEROS
    
    // Nombre (Solo acepta letras, espacios y puntos)
    inputNombre.addEventListener('input', (e) => {
        // Borra cualquier cosa que NO sea letra, acento, ñ, espacio o punto
        let valor = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.]/g, '');
        e.target.value = valor;
        
        mostrarNombre.textContent = valor.toUpperCase() || 'LEON S. KENNEDY';
    });

    // Número de Tarjeta (Solo números y pone espacios automáticos)
    inputNumero.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, ''); // Borra letras
        valor = valor.replace(/(\d{4})/g, '$1 ').trim(); // Agrega espacio cada 4 dígitos
        
        e.target.value = valor;
        mostrarNumero.textContent = valor || '**** **** **** ****';
    });

    // Vencimiento (Solo números y pone la diagonal / )
    inputVencimiento.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, ''); // Borra letras
        
        if (valor.length >= 2) {
            valor = valor.substring(0, 2) + '/' + valor.substring(2, 4);
        }
        
        e.target.value = valor;
        mostrarVencimiento.textContent = valor || 'MM/AA';
    });

    // CVV (Solo números y muestra asteriscos en la tarjeta)
    inputCvv.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, ''); // Borra letras
        e.target.value = valor;
        mostrarCvv.textContent = '*'.repeat(valor.length) || '***'; 
    });

    // 3. Lógica para GIRAR la tarjeta 3D
    // Mostrar el frente
    inputNombre.addEventListener('focus', () => {
        tarjetaVisual.classList.remove('girada');
    });

    // Mostrar el reverso
    [inputNumero, inputVencimiento, inputCvv].forEach(input => {
        input.addEventListener('focus', () => {
            tarjetaVisual.classList.add('girada');
        });
    });
});