const reseñas =[{
        nombre:"Neymar Junior",
        texto:"Excelente jugador de fútbol, rápido y inteligente. Brasileño.",
        foto:"https://i.pinimg.com/736x/01/f9/bd/01f9bd41014d22521fefa0860ac1b996.jpg",
    },
    {
        nombre:"Lionel Messi",
        texto:"Leyenda de fútbol, habilidoso y inteligente. Argentino.",
        foto:"https://scontent.flim29-1.fna.fbcdn.net/v/t39.30808-6/493733695_711284948087847_6798463019391075207_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE80_YHgBNhyY0zY-QqFl4Z9FWjJXGGKUH0VaMlcYYpQSWNW-vbBl5LJBd0iFJuDpe7y6z9CYvk6q2-Ug53mJAX&_nc_ohc=XyNNDrcTxsQQ7kNvwENhNcM&_nc_oc=AdlkfO5JC10Gjn5gJNRwQdQ0M6x6J2FXkJik35Z3KhJKpggqG7WeUy1SLERIyr-TsyZN6_YgxPUzQC04lztF9Uiw&_nc_zt=23&_nc_ht=scontent.flim29-1.fna&_nc_gid=MIPSXN8LFw8tufRdLp0S8g&oh=00_AfeZrhnpCBMSlaTMv0pQhwXiwQNxOcrOpU_QmXVIygABug&oe=690C430D",
    },
    {
        nombre:"Cristiano Ronaldo",
        texto:"Leyenda del fútbol, rápido y potente. Portugués.",
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBJz106tw9GRlXLMtOw4ArvjPpo3gqqW-Tg&s",
    }
];

//Elementos del DOM
const nombre = document.getElementById('nombre');
const texto = document.getElementById('texto');
const foto = document.getElementById('foto');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let indice = 0 ; 

function mostrarReseña(i){
    const r = reseñas[i];
    nombre.textContent = r.nombre;
    texto.textContent = r.texto;
    foto.src = r.foto;
}

next.addEventListener('click',()=>{
    indice++;
    if(indice >= reseñas.length) indice = 0;
    mostrarReseña(indice);
});

prev.addEventListener('click',()=>{
    indice--;
    if(indice < 0) indice = reseñas.length-1;
    mostrarReseña(indice);
})


mostrarReseña(indice);