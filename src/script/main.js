document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo; // para sortar um numero
        numeroAleatorio = Math.floor(numeroAleatorio + 1); // para rendondar o número
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block';
    })
})