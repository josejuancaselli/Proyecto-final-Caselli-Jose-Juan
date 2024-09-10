const arrayProductos = [
    { id: 1, nombre: "Vans", precio: 15000, tipo: "Remeras" },
    { id: 2, nombre: "Adidas", precio: 18000, tipo: "Remeras" },
    { id: 3, nombre: "Nike", precio: 11000, tipo: "Remeras" },
    { id: 4, nombre: "Underarmor", precio: 16000, tipo: "Remeras" },

    { id: 5, nombre: "Levis", precio: 150000, tipo: "Pantalones" },
    { id: 6, nombre: "Bolivia", precio: 180000, tipo: "Pantalones" },
    { id: 7, nombre: "Wrangler", precio: 150000, tipo: "Pantalones" },

    { id: 8, nombre: "Manga corta", precio: 70000, tipo: "Camisas" },
    { id: 9, nombre: "Manga larga", precio: 70000, tipo: "Camisas" },
    { id: 10, nombre: "Hawaiana", precio: 80000, tipo: "Camisas" },
    { id: 11, nombre: "Escocesa", precio: 95000, tipo: "Camisas" },

    { id: 12, nombre: "Vans", precio: 50000, tipo: "Zapatillas" },
    { id: 13, nombre: "Adidas", precio: 90000, tipo: "Zapatillas" },
    { id: 14, nombre: "Nike", precio: 60000, tipo: "Zapatillas" },
    { id: 15, nombre: "Topper", precio: 20000, tipo: "Zapatillas" }
]

//arrays de cada ropa
const remeras = arrayProductos.filter((el) => el.tipo === 'Remeras')
const pantalones = arrayProductos.filter((el) => el.tipo === 'Pantalones')
const camisas = arrayProductos.filter((el) => el.tipo === 'Camisas')
const zapatillas = arrayProductos.filter((el) => el.tipo === 'Zapatillas')


let carritoVacio = JSON.parse(localStorage.getItem("Cart")) || []


//////////................

// FUNCIONES


function crearProducto(producto, dom) {
    const divProducto = document.createElement("div")
    divProducto.className = ("div-producto")
    dom.appendChild(divProducto)

    const tituloProducto = document.createElement("h3") //creo el subtitulo
    tituloProducto.innerText = `${producto.nombre}` // le doy texto al subtitulo
    divProducto.appendChild(tituloProducto) //imprimo el titulo en la web

    const precioProducto = document.createElement("p") // creo el parrafo del precio
    precioProducto.innerText = `$${producto.precio.toLocaleString('es-ES')}` //le doy texto al parrafo de precio
    divProducto.appendChild(precioProducto)// imprimo el parrafo en la web

    let botonCarrito = document.createElement("button") // creo el boton del carrito
    botonCarrito.innerText = "Agregar al carrito" //le doy texto al boton
    divProducto.appendChild(botonCarrito)// imprimo el boton en la web

    botonCarrito.addEventListener ("click", ()=> {
        const product = producto
        carritoVacio.push ({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            tipo: product.tipo
        })
        localStorage.setItem("Cart", JSON.stringify(carritoVacio));
    })
}


    const buscadorInput = document.getElementById("buscador-input");
    const resultadosContainer = document.createElement("div");
    resultadosContainer.classList.add("resultados-buscador", "dropdown-menu");
    document.querySelector(".buscador").appendChild(resultadosContainer);

    buscadorInput.addEventListener("input", () => {
        const query = buscadorInput.value.toLowerCase();
        resultadosContainer.innerHTML = ""; // Limpiar resultados previos

        if (query !== "") {
            const resultadosFiltrados = arrayProductos.filter(producto =>
                producto.tipo.toLowerCase().includes(query),
                
            );
            console.log(resultadosFiltrados)
            resultadosFiltrados.forEach(producto => {
                const opcion = document.createElement("a");
                opcion.classList.add("dropdown-item");
                opcion.href = `./pages/${producto.tipo}.html`.toLowerCase(); // Ajusta la URL según tus necesidades
                opcion.textContent = `${producto.tipo}  ${producto.nombre}`;
                resultadosContainer.appendChild(opcion);
            });

            resultadosContainer.style.display = "block"; // Mostrar los resultados
        } else {
            resultadosContainer.style.display = "none"; // Ocultar si no hay texto
        }
    });

    // Ocultar el menú desplegable si se hace clic fuera del mismo
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".buscador")) {
            resultadosContainer.style.display = "none";
        }
    });



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
