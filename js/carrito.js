let carrito = JSON.parse(localStorage.getItem("Cart"))
const carritoMain = document.getElementById("main-carrito")



function eliminarProducto() {
    let total = carrito.reduce((a, b) => a + b.precio, 0);
    precioFinal.innerText = `Su saldo a pagar es de $${total.toLocaleString('es-ES')}`;
}
carrito.forEach((producto) => {
    const tituloProducto = document.createElement("h3") //creo el subtitulo
    tituloProducto.innerText = `${producto.tipo} ${producto.nombre}` // le doy texto al subtitulo
    carritoMain.appendChild(tituloProducto) //imprimo el titulo en la web

    const precioProducto = document.createElement("p") // creo el parrafo del precio
    precioProducto.innerText = `$${producto.precio.toLocaleString('es-ES')}` //le doy texto al parrafo de precio
    carritoMain.appendChild(precioProducto)// imprimo el parrafo en la web

    let botonCarrito = document.createElement("button") // creo el boton del carrito
    botonCarrito.innerText = "Eliminar" //le doy texto al boton
    carritoMain.appendChild(botonCarrito)// imprimo el boton en la web
    botonCarrito.addEventListener("click", () => {
        const index = carrito.findIndex(objeto => objeto.id === producto.id); // guardo el index de del objeto del array, haciendole coincidir el id del objeto con el id del objeto que va iterando en el forEach
        if (index >= 0) {// como index ahora es un numero puedo compararlo. Le digo si es mayor o igual a 0 porque los index de los arrays arrancan en 0 hacia numeros positivos
            carrito.splice(index, 1); // ahora le digo que borre el index n° igual a la variable index, justamente porque van a coincidir
            localStorage.setItem("Cart", JSON.stringify(carrito)); //por ultimo actualizo el storage con el nuevo array sin ese objeto

            tituloProducto.remove()
            precioProducto.remove()
            botonCarrito.remove()

            eliminarProducto()
        }
        


    })



});

//let precio = carritoPagar.map((p) => p.precio) //guardo en un nuevo array solo los precio del carrito

//let total = precio.reduce((a, b) => a + b + 0) //hago la suma de los precios


const precioFinal = document.createElement("p")
carritoMain.appendChild(precioFinal)
eliminarProducto()
