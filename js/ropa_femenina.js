let carritoVacio = JSON.parse(localStorage.getItem("Carro")) || []

const cardsProd = document.getElementById("cards");

function MostrarCarrito(producto) { //function para mostrar el carrito en el offcanvas
    const divProducto = document.createElement("div");
    divProducto.className = "div-producto-carrito";
    mostrarCarrito.prepend(divProducto);

    const titulo = document.createElement("p");
    titulo.innerText = `${producto.nombre} ${producto.color}, ${producto.marca}`;
    divProducto.appendChild(titulo);

    const precioProducto = document.createElement("p");
    precioProducto.innerText = `Precio: $${producto.precio}`;
    divProducto.appendChild(precioProducto);

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-cantidad";
    divProducto.appendChild(inputContainer);

    const btnMinus = document.createElement("button");
    btnMinus.innerText = "-";
    inputContainer.appendChild(btnMinus);

    const cantidadInput = document.createElement("input");
    cantidadInput.type = "text";
    cantidadInput.value = producto.cantidad || 1; // Si no tiene cantidad, empieza en 1
    inputContainer.appendChild(cantidadInput);

    const btnPlus = document.createElement("button");
    btnPlus.innerText = "+";
    inputContainer.appendChild(btnPlus);

    const eliminarProducto = document.createElement("button");
    eliminarProducto.innerText = "Eliminar";
    divProducto.appendChild(eliminarProducto);

    eliminarProducto.addEventListener("click", () => {
        const index = carritoVacio.findIndex((objeto) => objeto.id === producto.id);
        if (index >= 0) {
            carritoVacio.splice(index, 1);
            localStorage.setItem("Carro", JSON.stringify(carritoVacio));
            divProducto.remove();
        }
    });
}


const crearProductos = async () => {
    const respuesta = await fetch("/json/productos.json");
    const datos = await respuesta.json();
    arrayProductos = datos
    const ropaMujer = arrayProductos.filter((el) => el.genero === "hombre")
    ropaMujer.forEach(item => {
        let tarjetas = document.createElement("div")
        tarjetas.innerHTML = `
                    
                    <div class="card tarjeta">
                        <div class="card-body">
                            <h3 class="card-title">${item.marca}</h3>
                            <img class=card-img.-top src=${item.imagen} alt = ${item.nombre}/>
                            <h4 class="card-title"> ${item.nombre} ${item.tipo}</h4>
                            <p class="card-text"> Color: ${item.color} </p>
                            <p class="card-text"> Precio: $${item.precio} </p>
                        </div>
                    </div>
                    `
        const cardBody = tarjetas.querySelector(".card-body")
        let botonCarrito = document.createElement("button")
        botonCarrito.innerText = "Añadir al carrito"
        botonCarrito.className = ("btn btn-secondary")
        cardBody.appendChild(botonCarrito)

        botonCarrito.addEventListener("click", () => {

            const producto = item
            carritoVacio.push({
                id: producto.id,
                cantidad: producto.cantidad,
                nombre: producto.nombre,
                marca: producto.marca,
                color: producto.color,
                precio: producto.precio,
            })
            Toastify({
                text: `Se agregó ${producto.nombre} ${producto.color} ${producto.marca}`,

                duration: 500

            }).showToast();


            localStorage.setItem("Carro", JSON.stringify(carritoVacio));
            MostrarCarrito(producto)
        })




        cardsProd.appendChild(tarjetas)
    });
}


const mostrarCarrito = document.getElementById("mostrar-carrito")

carritoVacio.forEach((producto) => {
    MostrarCarrito(producto);
})


const btnLinkCarrito = document.createElement("button");
btnLinkCarrito.innerText = "Ir al carrito";
mostrarCarrito.appendChild(btnLinkCarrito);
btnLinkCarrito.addEventListener("click", () => {
    window.location.href = "/pages/carrito.html";
})

document.addEventListener("DOMContentLoaded", crearProductos());



console.log(carritoVacio)
console.log(ppp)





