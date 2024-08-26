const arrayProductos = [
    { id: 1, nombre: "Vans", precio: 15000, tipo: "Remera" },
    { id: 2, nombre: "Adidas", precio: 18000, tipo: "Remera" },
    { id: 3, nombre: "Nike", precio: 11000, tipo: "Remera" },
    { id: 4, nombre: "Underarmor", precio: 16000, tipo: "Remera" },

    { id: 5, nombre: "Levis", precio: 150000, tipo: "Pantalon" },
    { id: 6, nombre: "Bolivia", precio: 180000, tipo: "Pantalon" },
    { id: 7, nombre: "Wrangler", precio: 150000, tipo: "Pantalon" },

    { id: 8, nombre: "Manga corta", precio: 70000, tipo: "Camisa" },
    { id: 9, nombre: "Manga larga", precio: 70000, tipo: "Camisa" },
    { id: 10, nombre: "Hawaiana", precio: 80000, tipo: "Camisa" },
    { id: 11, nombre: "Escocesa", precio: 95000, tipo: "Camisa" },

    { id: 12, nombre: "Vans", precio: 50000, tipo: "Zapatillas" },
    { id: 13, nombre: "Adidas", precio: 90000, tipo: "Zapatillas" },
    { id: 14, nombre: "Nike", precio: 60000, tipo: "Zapatillas" },
    { id: 15, nombre: "Topper", precio: 20000, tipo: "Zapatillas" }
]

//arrays de cada ropa
const remeras = arrayProductos.filter((el) => el.tipo === 'Remera')
const pantalones = arrayProductos.filter((el) => el.tipo === 'Pantalon')
const camisas = arrayProductos.filter((el) => el.tipo === 'Camisa')
const zapatillas = arrayProductos.filter((el) => el.tipo === 'Zapatillas')
let carrito = JSON.parse(localStorage.getItem("Cart")) || []
//////////................

// FUNCIONES


function crearProducto(producto, dom) {
    const tituloProducto = document.createElement("h3") //creo el subtitulo
    tituloProducto.innerText = `${producto.nombre}` // le doy texto al subtitulo
    dom.appendChild(tituloProducto) //imprimo el titulo en la web

    const precioProducto = document.createElement("p") // creo el parrafo del precio
    precioProducto.innerText = `$${producto.precio.toLocaleString('es-ES')}` //le doy texto al parrafo de precio
    dom.appendChild(precioProducto)// imprimo el parrafo en la web

    let botonCarrito = document.createElement("button") // creo el boton del carrito
    botonCarrito.innerText = "Agregar al carrito" //le doy texto al boton
    dom.appendChild(botonCarrito)// imprimo el boton en la web

    botonCarrito.addEventListener ("click", ()=> {
        const product = producto
        carrito.push ({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            tipo: product.tipo
        })
        localStorage.setItem("Cart", JSON.stringify(carrito));
        
    })

}

function crearTitulo(nombre, dom) {
    const titulo = document.createElement("h2") //creo el titulo
    titulo.innerText = nombre //escribo el titulo
    dom.appendChild(titulo)//lo imprimo en la web:
}


//creacion seccion REMERAS
const remerasIndex = document.getElementById("remeras-index")
crearTitulo('Remeras', remerasIndex)
remeras.forEach((producto) => {
    crearProducto(producto, remerasIndex)
})
/////////....................

//creacion seccion PANTALON
const pantalonIndex = document.getElementById("pantalones-index")
crearTitulo("Pantalones", pantalonIndex)
pantalones.forEach((producto) => {
    crearProducto(producto, pantalonIndex)
})
/////////////.....................

//creacion seccion CAMISAS
const camisasIndex = document.getElementById("camisas-index")
crearTitulo("Camisas", camisasIndex)
camisas.forEach((producto) => {
    crearProducto(producto, camisasIndex)
})
/////////////............................

//creacion seccion ZAPATILLAS
const zapatillasIndex = document.getElementById("zapatillas-index")
crearTitulo("Zapatillas", zapatillasIndex)
zapatillas.forEach((producto) => {
    crearProducto(producto, zapatillasIndex)
})
