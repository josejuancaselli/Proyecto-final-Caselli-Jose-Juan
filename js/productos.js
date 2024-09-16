let carritoVacio = JSON.parse(localStorage.getItem("Carro")) || []
const cardsProd = document.getElementById("cards");
const mostrarCarrito = document.getElementById("mostrar-carrito")

// document.addEventListener("DOMContentLoaded", () => {
//     fetch('/json/productos.json')  //me traigo el json
//         .then(response => response.json())
//         .then(productos => {
            
//             const categorias = productos.map((p) => p.categoria); //me traigo las categorias y las guardo como un nuevo array en una variable
//             const generos = productos.map((p)=> p.genero)

//             const categoriaActual = categorias.find((categoria) => window.location.pathname.includes(categoria)) || ""; //recorro el array de categorias y cuando encuentra una que incluya a la categoria la guardo en la variable
//             const generoActual = generos.find((genero) => window.location.pathname.includes(genero)) || "";


//             crearProductos(categoriaActual || generoActual || ""); //meto la categoria actual en la funcion crearProductos, y esto desata toda la funcion
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// });

const crearProductos = async (arrayRopa) => { // aca entra la categoria que me traje
    const respuesta = await fetch("/json/productos.json");
    const datos = await respuesta.json();
    let arrayProductos = datos
    const cardProducto = arrayProductos.filter((el) => el.categoria === arrayRopa || el.genero === arrayRopa)

    cardProducto.forEach(item => {
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
                nombre: producto.nombre,
                marca: producto.marca,
                color: producto.color,
                precio: producto.precio,
                categoria: producto.categoria,

            })
            Toastify({

                text: `Se agregó ${producto.nombre} ${producto.color} ${producto.marca}`,
                
                duration: 3000,
                gravity: "bottom", 
                position: "left", 
            }).showToast();

            localStorage.setItem("Carro", JSON.stringify(carritoVacio));
            MostrarCarrito(producto)
        })

        cardsProd.appendChild(tarjetas)
    });


    
}

function MostrarCarrito(producto) {
    const divProducto = document.createElement("div");
    divProducto.className = "div-producto-carrito";

    const titulo = document.createElement("p");
    titulo.innerText = `${producto.nombre} ${producto.color}, ${producto.marca}`;

    const precioProducto = document.createElement("p");
    precioProducto.innerText = `Precio: $${producto.precio}`;

    const eliminarProducto = document.createElement("button");
    eliminarProducto.innerText = "Eliminar";
    eliminarProducto.addEventListener("click", () => {
        const index = carritoVacio.findIndex((objeto) => objeto.id === producto.id);
        if (index >= 0) {
            carritoVacio.splice(index, 1);
            localStorage.setItem("Carro", JSON.stringify(carritoVacio));
            divProducto.remove();
        }
    });

    mostrarCarrito.prepend(divProducto);
    divProducto.appendChild(titulo);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(eliminarProducto);
}




carritoVacio.forEach((producto) => {
    MostrarCarrito(producto);
})
let arrayProductos = []
const btnLinkCarrito = document.createElement("button");
btnLinkCarrito.innerText = "Ir a Pagar";
mostrarCarrito.appendChild(btnLinkCarrito);
btnLinkCarrito.addEventListener("click", () => {
    window.location.href = "/pages/carrito.html";
})

document.addEventListener("DOMContentLoaded", () => {
    let categoria = "";

    if (window.location.pathname.includes("remeras")) {
        categoria = "remeras";
                console.log(window.location.pathname)
    } else if (window.location.pathname.includes("pantalon")) {
        categoria = "pantalon";
    } else if (window.location.pathname.includes("camisas")) {
        categoria = "camisas";
    } else if (window.location.pathname.includes("zapatillas")) {
        categoria = "zapatillas";
    } else if (window.location.pathname.includes("musculosas")) {
        categoria = "musculosas";
    } else if (window.location.pathname.includes("polleras")) {
        categoria = "polleras";
    } else if (window.location.pathname.includes("vestidos")) {
        categoria = "vestidos";
    } else if (window.location.pathname.includes("zapa_mujer")) {
        categoria = "zapa_mujer";
    } else if (window.location.pathname.includes("mujer")) {
        categoria = "mujer";
    } else if (window.location.pathname.includes("hombre")) {
        categoria = "hombre";
    }

    crearProductos(categoria);
});
