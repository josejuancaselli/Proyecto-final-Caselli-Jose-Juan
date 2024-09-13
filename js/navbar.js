// const header = document.getElementById("header")
// const navBar = document.createElement("nav")
// navBar.className = ("navbar")
// navBar.innerHTML = `
//         <div class="container-fluid">
//             <h2><a class="navbar-brand" href="/index.html"> Sobre la Silla </a></h2>
//             <form class="d-flex" role="search">
//                 <input class="form-control me-2 buscador-input" type="search" placeholder="Buscar ropa..." aria-label="Search">                
//             </form>
//             <a href="/pages/carrito.html">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
//                             fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
//                         </svg>
//             </a>
//         </div>
// `
// header.appendChild(navBar)


let arrayBuscador =[]

const buscador = async () => {
    const response = await fetch ("/json/productos.json");
    const data = await response.json();
    arrayBuscador = data

}

buscador()

const buscadorInput = document.getElementById("buscador-input");
const resultadosContainer = document.createElement("div");
resultadosContainer.classList.add("resultados-buscador", "dropdown-menu");
document.querySelector(".buscador").appendChild(resultadosContainer);

buscadorInput.addEventListener("input", () => {
    const query = buscadorInput.value.toLowerCase();
    resultadosContainer.innerHTML = ""; // Limpiar resultados previos

    if (query !== "") {
        const resultadosFiltrados = arrayBuscador.filter(producto =>
            producto.nombre.toLowerCase().includes(query),
        );

        resultadosFiltrados.forEach(producto => {
            const opcion = document.createElement("a");
            opcion.classList.add("dropdown-item");
            opcion.href = `./pages/${producto.genero}/${producto.categoria}.html`.toLowerCase(); // Ajusta la URL según tus necesidades
            opcion.textContent = `${producto.nombre} ${producto.marca}, ${producto.genero}`;
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



