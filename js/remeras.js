let botones = document.querySelectorAll(".boton")
const cuerpo = document.body



const ropa = [
    { id: 1, nombre: "remera azul", precio: 50000 },
    { id: 2, nombre: "remera roja", precio: 55000 },
    { id: 3, nombre: "buzo", precio: 93000 },
]

let carrito = []
function addToCart(productoNombre, productoPrecio) {
    console.log(productoNombre, productoPrecio)
}

function renderizarProductos() {
    const productList = document.getElementById("remeras");
    productList.innerHTML = '';
    ropa.forEach((producto) => {
        const productoDiv = document.createElement("div")
        productoDiv.innerHTML = `
        <p>Nombre: ${producto.nombre} - Precio ${producto.precio}</p>
        <button onclick="addToCart('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        `
        productList.appendChild(productoDiv)
    })
}
renderizarProductos()
