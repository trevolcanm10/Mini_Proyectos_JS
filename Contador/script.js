const numero = document.getElementById('numero');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const reset = document.getElementById('reset');

//Inicializamos el contador
let contador = 0;

//Funciones
sumar.addEventListener('click',()=>{
    contador++;
    numero.textContent = contador;
});

restar.addEventListener('click',()=>{
    contador--;
    numero.textContent = contador;
});

reset.addEventListener('click',()=>{
    contador = 0;
    numero.textContent = contador;
});