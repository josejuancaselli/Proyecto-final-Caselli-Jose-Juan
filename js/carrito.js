let carrito = JSON.parse(localStorage.getItem("Cart")) || []
const carritoMain = document.getElementById("main-carrito")

let  precioFinal = document.createElement("p")// creo un parrafo
carritoMain.appendChild(precioFinal)// lo imprimo en la web


function carritoFinal (){
    let total = carrito.reduce((a,b)=> a + b.precio, 0).toLocaleString('es-ES')
    precioFinal.innerText = `Su saldo a pagar es de $${total}`;// funcion para rellenar el parrafo dinamicamente con el precio del carrito
}

carritoFinal () //relleno el parrafo con la function

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
        const index = carrito.findIndex(objeto => objeto.id === producto.id); // guardo el index del objeto del array, haciendole coincidir el id del objeto con el id del objeto que va iterando en el forEach
        if (index >= 0) {// como index ahora es un numero puedo compararlo. Le digo si es mayor o igual a 0 porque los index de los arrays arrancan en 0 hacia numeros positivos
            carrito.splice(index, 1); // ahora le digo que borre el index n° igual a la variable index, justamente porque van a coincidir
            localStorage.setItem("Cart", JSON.stringify(carrito)); //por ultimo actualizo el storage con el nuevo array sin ese objeto

            tituloProducto.remove()//borro el DOM
            precioProducto.remove()//borro el DOM
            botonCarrito.remove()//borro el DOM
            

            carritoFinal () //actualizo el precio del carrito
        }
    })
});






