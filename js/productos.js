let carritoVacio = JSON.parse(localStorage.getItem("Carro")) || []
const cardsProd = document.getElementById("cards");
const offcanvas = document.getElementById("mostrar-carrito")


//------------------funcion para mostrar el carrito----------------------------//
function MostrarCarrito(producto) {

    const divProducto = document.createElement("div");
    divProducto.className = "div-producto-carrito";

    const titulo = document.createElement("p");
    titulo.innerText = `${producto.nombre} ${producto.color}, ${producto.marca}`;

    const precioProducto = document.createElement("p");
    precioProducto.innerText = `Precio: $${producto.precio}`;
    

    const cantidad = document.createElement("input");
    cantidad.type = "text";
    cantidad.value = producto.cantidad;
    cantidad.id = producto.id;

    const eliminarProducto = document.createElement("button");
    eliminarProducto.innerText = "Eliminar";



    eliminarProducto.addEventListener("click", () => {
        const productoEnCarrito = carritoVacio.find((objeto) => objeto.id === producto.id);
        const idBoton =document.getElementById(producto.id)
        
        if (productoEnCarrito) {
            if (productoEnCarrito.cantidad > 1) {
                productoEnCarrito.cantidad--; 
                idBoton.value = productoEnCarrito.cantidad
                


            } else {
                
                const index = carritoVacio.findIndex((objeto) => objeto.id === producto.id);
                carritoVacio.splice(index, 1);
                divProducto.remove(); 
            }
        }

        
        localStorage.setItem("Carro", JSON.stringify(carritoVacio));
    });

    offcanvas.prepend(divProducto)
    divProducto.appendChild(titulo);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(eliminarProducto)
    divProducto.appendChild(cantidad)
    localStorage.setItem("Carro", JSON.stringify(carritoVacio));


}
//-------------------------fin funcion mostrar carrito--------------------------//


//--------creo los cards del main--------------------------------------------//
const crearProductos = async (arrayRopa) => { // aca entra la categoria que me traje que puede ser una "categoria" o un "genero"
    const respuesta = await fetch("/json/productos.json");
    const datos = await respuesta.json();
    let arrayProductos = datos
    const listaProducto = arrayProductos.filter((el) => el.categoria === arrayRopa || el.genero === arrayRopa)
    
    //----------------------- creo las cards --------------------------------------//
    listaProducto.forEach(item => {
        let tarjetas = document.createElement("div")
        tarjetas.innerHTML = `

                    <div class="card tarjeta">
                        <div class="card-body">
                            <h3 class="card-title">${item.marca}</h3>
                            <img class=card-img.-top src=${item.imagen} alt = ${item.nombre}/>
                            <h4 class="card-title"> ${item.nombre} ${item.tipo}</h4>
                            <p class="card-text"> Color: ${item.color} </p>
                            <p class="card-text"> Precio: $${item.precio.toLocaleString('es-ES')} </p>
                        </div>
                    </div>
                    `
        const cardBody = tarjetas.querySelector(".card-body")
        let botonCarrito = document.createElement("button")
        botonCarrito.innerText = "Añadir al carrito"
        botonCarrito.className = ("btn btn-secondary")
        cardBody.appendChild(botonCarrito)

        //----------------boton----------------------//
        botonCarrito.addEventListener("click", () => {
            const productoActual = carritoVacio.find((producto) => producto.id === item.id)
            const idBoton =document.getElementById(item.id)
            
            
            if(!productoActual){
                carritoVacio.push({
                    id: item.id,
                    nombre: item.nombre,
                    marca: item.marca,
                    color: item.color,
                    precio: item.precio,
                    cantidad: item.cantidad,
                    categoria: item.categoria,
                
                })
                MostrarCarrito(item)
                
            }else{
                
                productoActual.cantidad++;
                idBoton.value = productoActual.cantidad;
            }
            Toastify({
                text: `Se agregó ${item.nombre} ${item.color} ${item.marca}`,
                duration: 3000,
                gravity: "bottom",
                position: "left",
            }).showToast();
            localStorage.setItem("Carro", JSON.stringify(carritoVacio));
            
        })//------fin boton--------------------//
        
        cardsProd.appendChild(tarjetas)
    });
}//------------------------------- fin crear cards -------------------------------------//


carritoVacio.forEach((producto) => {
            MostrarCarrito(producto);
        })


let arrayProductos = []
const btnLinkCarrito = document.createElement("button");
btnLinkCarrito.innerText = "Ir a Pagar";
offcanvas.appendChild(btnLinkCarrito);
btnLinkCarrito.addEventListener("click", () => {
    window.location.href = "/pages/carrito.html";
})

document.addEventListener("DOMContentLoaded", () => {
    let categoria = ""; //cargo la variable con el valor de la direccion URL haciendo una validacion

    if (window.location.pathname.includes("remeras")) {
        categoria = "remeras";
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

    crearProductos(categoria); // meto la categoria adentro de la funcion de crear productos
});
