const colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
const paleta = document.getElementById('paleta');
const colorSeleccionado = document.getElementById('colorSeleccionado');

//Crear la "aleta" de colores

colores.forEach(color => {

    const div = document.createElement('div');
    div.classList.add('color');
    div.style.backgroundColor = color;

    div.addEventListener('click',() =>{
        colorSeleccionado.textContent = color;
        colorSeleccionado.style.color = color;
    });

    paleta.appendChild(div);
});