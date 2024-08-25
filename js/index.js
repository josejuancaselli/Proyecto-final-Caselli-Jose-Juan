const arrayProductos = [
    { id: 1, nombre: "Vans", precio: 15000, tipo: "Remera" },
    { id: 2, nombre: "Adidas", precio: 18000, tipo: "Remera" },
    { id: 3, nombre: "Nike", precio: 11000, tipo: "Remera" },
    { id: 4, nombre: "Underarmor", precio: 16000, tipo: "Remera" },
    { id: 5, nombre: "Levis", precio: 150000, tipo: "Jean" },
    { id: 6, nombre: "Bolivia", precio: 180000, tipo: "Jean" },
    { id: 7, nombre: "Wrangler", precio: 150000, tipo: "Jean" },
    { id: 8, nombre: "Manga corta", precio: 70000, tipo: "Camisa" },
    { id: 9, nombre: "Manga larga", precio: 70000, tipo: "Camisa" },
    { id: 10, nombre: "Hawaiana", precio: 80000, tipo: "Camisa" },
    { id: 11, nombre: "de vestir", precio: 95000, tipo: "Camisa" },
    { id: 12, nombre: "Vans", precio: 50000, tipo: "Zapatillas" },
    { id: 13, nombre: "Adidas", precio: 90000, tipo: "Zapatillas" },
    { id: 14, nombre: "Nike", precio: 60000, tipo: "Zapatillas" },
    { id: 15, nombre: "Topper", precio: 20000, tipo: "Zapatillas" }
]

let cart = []
function addtoCart(Productoid) {
    let product = arrayProductos.find(p => p.id === Productoid);
    cart.push({
        nombre: product.nombre,
        precio: product.precio,
    })
    localStorage.setItem('cart', JSON.stringify(cart))
}
document.addEventListener('DOMContentLoaded', () => {
    const divProductos = document.createElement('div');
    //divProductos.id = ("prodWrapper")
    const productosRow = document.createElement('div');
    productosRow.id = 'productosRow';
    const main = document.getElementById("main")
    main.appendChild(divProductos);
    
    divProductos.appendChild(productosRow);

    arrayProductos.forEach(producto => {
        const columna = document.createElement('div');

        // Crear la tarjeta
        const card = document.createElement('div');

        // Crear la imagen

        // Crear cuerpo de la tarjeta
        //const cardBody = document.createElement('div');

        // Crear el nombre del producto
        const nombre = document.createElement('h3');
        nombre.innerText = `${producto.tipo} ${producto.nombre}`;

        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.innerText = `$${producto.precio.toLocaleString('es-ES')}`;
        // Creat boton
        const botonAdd = document.createElement('button');
        botonAdd.innerText = 'Agregar al Carrito';
        //botonAdd.id = 'botonAdd';


        botonAdd.addEventListener('click', () => {
            addtoCart(producto.id)
        })

        productosRow.appendChild(columna);
        columna.appendChild(card);
        //card.appendChild(cardBody);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(botonAdd);
        
    });
})