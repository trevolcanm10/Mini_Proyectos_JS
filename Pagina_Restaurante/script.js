//Lista de platos
const menu = [
    {
        nombre : "Ensalada César",
        categoria : "entradas",
        precio: 18.50,
        descripcion:"Lechuga fresca,pollo,crutones y aderezo César.",
        imagen: "https://images.aws.nestle.recipes/resized/69e14ff7a1b1fea5d3976defa9d4903a_CPK_cesar_a-hero_1200_628.jpg"
    },

    {
        nombre : "Lomo Saltado",
        categoria : "platos",
        precio: 28.90,
        descripcion:"Clásico plato peruano con carne, papas fritas y arroz",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lomo-saltado-perudelights.jpg/500px-Lomo-saltado-perudelights.jpg"
    },

    {
        nombre : "Ceviche Mixto",
        categoria : "platos",
        precio: 26.90,
        descripcion:"Pescado y mariscos marinados en jugo de limón",
        imagen: "https://micevichedehoy.com/assets/images/ceviche-de-mariscos_800x534.webp"
    },

    {
        nombre : "Tiramisú",
        categoria : "postres",
        precio: 14.00,
        descripcion:"Postre italiano con capas de bizcocho y mascarpone.",
        imagen: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2023-03/Tiramisu_1426.jpg?itok=mNFPXgYI"
    },

    {
        nombre : "Jugo de Maracuyá",
        categoria : "bebidas",
        precio: 8.50,
        descripcion:"Refrescante jugo natural de maracuyá",
        imagen: "https://comedera.com/wp-content/uploads/sites/9/2022/08/Jugo-de-maracuya-con-avenashutterstock_1976561654.jpg?fit=1316,990&crop=0px,125px,1316px,740px"
    }

];

const menuContainer = document.getElementById("menu");
const botonesFiltro = document.querySelectorAll(".filtro");

//Funcion para mostrar los platos
function mostrarPlatos(lista){
    menuContainer.innerHTML="";
    lista.forEach(item =>{
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <span class="precio">S/ ${item.precio.toFixed(2)}</span>
        `;

        menuContainer.appendChild(div);

    });
}

mostrarPlatos(menu);

//Filtros por categoría
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;
        if(categoria==="todos"){
            mostrarPlatos(menu);
        }else{
            const filtrados = menu.filter(item => item.categoria === categoria);
            mostrarPlatos(filtrados);
        }
    });
});
