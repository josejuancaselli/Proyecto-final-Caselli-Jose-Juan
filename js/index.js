


// const header = document.getElementById("header")
// const navBar = document.createElement("nav")
// navBar.className = ("navbar")
// navBar.innerHTML = `
//         <div class="container-fluid">
//             <h2><a class="navbar-brand" href="index.html"> Sobre la Silla </a></h2>
//             <form class="d-flex" role="search">
//                 <input class="form-control me-2" type="search" placeholder="Buscar ropa..." aria-label="Search">
//             </form>
//             <a href="./pages/carrito.html">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
//                             fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
//                             <path
//                                 d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
//                         </svg>
//             </a>
//         </div>
// `
// header.appendChild(navBar)
// const main = document.getElementById("main-index")
// main.innerHTML = `
//     <div class="wrapper">
//         <div class="tarjeta">
//             <img src="./assets/1597780129-768649-depositphotos-13735339-xl-2015jpg.avif" alt="foto hombre">
//             <div class="info">
//                 <h3>Ropa masculina</h3>
//                 <p>Encuentra estilo y confort en nuestra exclusiva colección de ropa masculina. Calidad y diseño para
//                     cada ocasión</p>
//                 <a href="./pages/camisas.html">Camisas</a>
//                 <a href="./pages/pantalon.html">Pantalon</a>
//                 <a href="./pages/remeras.html">Remeras</a>
//                 <a href="./pages/zapatillas.html">Zapatillas</a>
//             </div>
//         </div>

//         <div class="tarjeta">
//             <img src="./assets/mujer.jpg" alt="foto mujer">
//             <div class="info">
//                 <h3>Ropa femenina</h3>
//                 <p>Descubre nuestra moda femenina, diseñada para realzar tu estilo con elegancia y comodidad en cada
//                     prenda</p>
//                 <a href="./pages/camisas.html">Camisas</a>
//                 <a href="./pages/pantalon.html">Pantalon</a>
//                 <a href="./pages/remeras.html">Remeras</a>
//                 <a href="./pages/zapatillas.html">Zapatillas</a>
//             </div>
            
//         </div>
//     </div>
// `
// let carritoVacio = JSON.parse(localStorage.getItem("Carro")) || []
// let arrayProductos = []
// const cardsProd = document.getElementById("cards");

// const crearProductos = async () => {
//         const respuesta = await fetch("./json/productos.json");
//         const datos = await respuesta.json();
//         let arrayProductos = datos
//         const remeras = arrayProductos.filter((el) => el.categoria === "remeras")
//         remeras.forEach(item => {
//             let tarjetas = document.createElement("div")
//             tarjetas.innerHTML = `
//                     <div class="card">
//                         <div class="card-body">
//                             <img class=card-img.-top src=${item.imagen} alt = ${item.nombre}/>
//                             <h4 class="card-title"> ${item.nombre}</h4>
//                             <h5 class="card-subtitle"> ${item.marca} ${item.logo} </h5>
//                             <p class="card-text"> Color: ${item.color} </p>
//                             <p class="card-text"> Precio: $${item.precio} </p>
//                         </div>
//                     </div>
//                     `
//                     const cardBody = tarjetas.querySelector(".card-body")
//                     let botonCarrito =document.createElement("button")
//                     botonCarrito.innerText = "Añadir al carrito"
//                     botonCarrito.className = ("btn btn-secondary")
//                     cardBody.appendChild(botonCarrito)

//                     botonCarrito.addEventListener ("click", ()=> {
//                         const producto = item
//                         carritoVacio.push ({
//                             id: producto.id,
//                             nombre: producto.nombre,
//                             marca: producto.marca,
//                             color:producto.color,
//                             precio: producto.precio,
                            
//                         })
//                         localStorage.setItem("Cart", JSON.stringify(carritoVacio));
                    
//                     })
//             cardsProd.appendChild(tarjetas)
//         });
//     }
// crearProductos()