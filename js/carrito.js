const carritoPagar = JSON.parse(localStorage.getItem("Cart"))
const carritoMain = document.getElementById("main-carrito")
console.log(carritoPagar)



carritoPagar.forEach((producto) => {
    const tituloProducto = document.createElement("h3") //creo el subtitulo
    tituloProducto.innerText = `${producto.tipo} ${producto.nombre}` // le doy texto al subtitulo
    carritoMain.appendChild(tituloProducto) //imprimo el titulo en la web

    const precioProducto = document.createElement("p") // creo el parrafo del precio
    precioProducto.innerText = `$${producto.precio.toLocaleString('es-ES')}` //le doy texto al parrafo de precio
    carritoMain.appendChild(precioProducto)// imprimo el parrafo en la web

    let botonCarrito = document.createElement("button") // creo el boton del carrito
    botonCarrito.id ="boton-eliminar"
    botonCarrito.innerText = "Eliminar" //le doy texto al boton
    carritoMain.appendChild(botonCarrito)// imprimo el boton en la web

    
});
