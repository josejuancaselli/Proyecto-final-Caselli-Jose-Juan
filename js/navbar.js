const header = document.getElementById("header")
const navBar = document.createElement("nav")
navBar.className = ("navbar")
navBar.innerHTML = `
            <div class="container-fluid">
                <h2><a class="navbar-brand" href="../../index.html"> Sobre la Silla </a></h2>
                <form class="d-flex" role="search">
                    <div class="buscador">
                        <input id="buscador-input" class="form-control me-2" type="search" placeholder="Buscar ropa..."
                            aria-label="Search">
                    </div>
                </form>
                <div id="muestra-carrito">
                    <button id="boton-emma"class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                        </svg>
                    </button>

                    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Esto es lo que vas a comprar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div id="mostrar-carrito" class="offcanvas-body"> 

                        </div>
                    </div>
                </div>
            </div>
`
header.appendChild(navBar)


let arrayBuscador = []

const calcularRutaJson = () => {
    const rutaActual = window.location.pathname;
    let rutaJson = "";
    if (rutaActual.includes("/index/")) {
        rutaJson = "../json/productos.json";
    } else {
        rutaJson = "../../json/productos.json";
    }
    return rutaJson;
}
const buscador = async () => {
    const rutaJson = calcularRutaJson();  // Calcula la ruta correcta
    const response = await fetch(rutaJson);
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
    resultadosContainer.innerHTML = "";

    if (query !== "") {
        const resultadosFiltrados = arrayBuscador.filter(producto =>
            producto.nombre.toLowerCase().includes(query),
        );

        resultadosFiltrados.forEach(producto => {
            const opcion = document.createElement("a");
            opcion.classList.add("dropdown-item");

            opcion.href = `../../pages/${producto.genero}/${producto.categoria}.html`.toLowerCase();
            opcion.textContent = `${producto.nombre} ${producto.marca}, ${producto.genero}`;
            resultadosContainer.appendChild(opcion);
        });

        resultadosContainer.style.display = "block";
    } else {
        resultadosContainer.style.display = "none";
    }
});


document.addEventListener("click", (event) => {
    if (!event.target.closest(".buscador")) {
        resultadosContainer.style.display = "none";
    }
});



