let carrito = JSON.parse(localStorage.getItem("Carro")) || [];

const productosCarrito = document.getElementById("productos-carrito"); // capturo el div de los productos
carrito.forEach((producto) => {
    const divProducto = document.createElement("div"); //div para cada producto
    divProducto.className = "div-producto-carrito";
    productosCarrito.appendChild(divProducto);

    const titulo = document.createElement("h2"); //titulo para el producto
    titulo.innerText = `${producto.marca}: ${producto.nombre} ${producto.color}`;
    productosCarrito.appendChild(titulo);

    const precioProducto = document.createElement("p"); //precio para el producto
    precioProducto.innerText = `Precio: $${producto.precio}`;
    productosCarrito.appendChild(precioProducto);

    const eliminarProducto = document.createElement("button"); //boton para eliminar producto
    eliminarProducto.innerText = "Eliminar";
    productosCarrito.appendChild(eliminarProducto);

    eliminarProducto.addEventListener("click", () => {
        const index = carrito.findIndex((objeto) => objeto.id === producto.id); // guardo el index del objeto del array, haciendole coincidir el id del objeto con el id del objeto que va iterando en el forEach
        if (index >= 0) {
            // como index ahora es un numero puedo compararlo. Le digo si es mayor o igual a 0 porque los index de los arrays arrancan en 0 hacia numeros positivos
            carrito.splice(index, 1); // ahora le digo que borre el index n° igual a la variable index, justamente porque van a coincidir
            localStorage.setItem("Carro", JSON.stringify(carrito)); //por ultimo actualizo el storage con el nuevo array sin ese objeto
            divProducto.remove(); //borro el DOM
            titulo.remove(); //borro el DOM
            precioProducto.remove(); //borro el DOM
            eliminarProducto.remove(); //borro el DOM

            let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
            total === 0
                ? (precioFinal.innerText = "No hay productos en el carrito")
                : (precioFinal.innerText = `Precio Final: $${total}`);
        }
    });
});

const precioFinal = document.getElementById("precio-final");
let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
total === 0
    ? (precioFinal.innerText = "No hay productos en el carrito")
    : (precioFinal.innerText = `Precio Final: $${total}`);

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
                text: "Aguarde un momento, esta siendo redirigido",
                icon: "success",
            });
            function redirigir() {
                setTimeout(() => {window.open('https://www.mercadopago.com.ar/', '_blank');}, 2000);
            }
            redirigir()
        }
    });
});

const eliminarCarrito = document.getElementById("eliminar-carrito");
eliminarCarrito.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    precioProducto.remove();
});
