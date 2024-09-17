let carrito = JSON.parse(localStorage.getItem("Carro")) || [];


const productosCarrito = document.getElementById("productos-carrito"); // capturo el div de los productos

carrito.forEach((producto) => {
    const divProducto = document.createElement("div"); //div para cada producto
    divProducto.className = "div-producto-carrito";
    productosCarrito.appendChild(divProducto);

    const titulo = document.createElement("h2"); //titulo para el producto
    titulo.innerText = `${producto.marca}: ${producto.nombre} ${producto.color}`;
    divProducto.appendChild(titulo);

    const precioProducto = document.createElement("p"); //precio para el producto
    precioProducto.innerText = `Precio: $${producto.precio * producto.cantidad}`;
    divProducto.appendChild(precioProducto);

    const cantidad = document.createElement("input");
    cantidad.type = "text";
    cantidad.value = producto.cantidad;
    cantidad.id = producto.id;
    divProducto.appendChild(cantidad);

    const eliminarProducto = document.createElement("button"); //boton para eliminar producto
    eliminarProducto.innerText = "Eliminar";
    divProducto.appendChild(eliminarProducto);
    
    
    eliminarProducto.addEventListener("click", () => {
        const productoEnCarrito = carrito.find((objeto) => objeto.id === producto.id);
        const idBoton = document.getElementById(producto.id)


        if (productoEnCarrito.cantidad > 1) {
            productoEnCarrito.cantidad--; // Reduce la cantidad directamente
            idBoton.value = productoEnCarrito.cantidad
            precioProducto.innerText = `Precio: $${producto.precio * producto.cantidad}`;
            
            // 
            
            //productoEnCarrito.precio = productoEnCarrito.cantidad * precioUnitario;
            //precioProducto.innerText = `Precio: $${productoEnCarrito.precio}`;

        } else {
            // Elimina el producto si la cantidad es 1
            const index = carrito.findIndex((objeto) => objeto.id === producto.id);
            carrito.splice(index, 1);
            divProducto.remove(); // Elimina el elemento visual del carrito

        }
        // Actualiza el localStorage después de cualquier cambio
        localStorage.setItem("Carro", JSON.stringify(carrito));

        //const index = carrito.findIndex((objeto) => objeto.id === producto.id); // guardo el index del objeto del array, haciendole coincidir el id del objeto con el id del objeto que va iterando en el forEach
        //if (index >= 0) {
        // como index ahora es un numero puedo compararlo. Le digo si es mayor o igual a 0 porque los index de los arrays arrancan en 0 hacia numeros positivos
        //  carrito.splice(index, 1); // ahora le digo que borre el index n° igual a la variable index, justamente porque van a coincidir
        //localStorage.setItem("Carro", JSON.stringify(carrito)); //por ultimo actualizo el storage con el nuevo array sin ese objeto
        //divProducto.remove(); //borro el DOM
        //titulo.remove(); //borro el DOM
        //precioProducto.remove(); //borro el DOM
        //eliminarProducto.remove(); //borro el DOM

        //let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        //total === 0
        //    ? (precioFinal.innerText = "No hay productos en el carrito")
        //  : (precioFinal.innerText = `Precio Final: $${total}`);
        // }
    });
});

const precioFinal = document.getElementById("precio-final");
let total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
total === 0 ? (precioFinal.innerText = "No hay productos en el carrito") : (precioFinal.innerText = `Precio Final: $${total}`);

const pago = document.getElementById("pago"); // capturo el div de pago
pago.addEventListener("click", () => {
    Swal.fire({
        title: "Desea finalizar la compra?",
        text: `El saldo final a pagar es de $${total.toLocaleString('es-ES')}`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Gracias por su compra!",
                text: "Aguarde un momento, esta siendo redirigido a Mercado Pago",
                icon: "success",
            });

            setTimeout(() => { window.open('https://www.mercadopago.com.ar/', '_blank'); }, 3000);


        }
    });
});

const eliminarCarrito = document.getElementById("eliminar-carrito");
eliminarCarrito.addEventListener("click", () => {

    const eliminarDiv = document.querySelector(".div-producto-carrito")
    eliminarDiv.remove()
    precioFinal.innerText = "No hay productos en el carrito"
    localStorage.clear();
    sessionStorage.clear();

});
