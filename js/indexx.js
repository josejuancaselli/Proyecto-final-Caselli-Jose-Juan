const arrayRopa = [
    { id: 1, nombre: "zapatillas" },
    { id: 2, nombre: "remeras" },
    { id: 3, nombre: "pantalones" },
    { id: 4, nombre: "camisas" }
]
const arrayRemera = [
    { id: 1, nombre: "vans ", precio: 15000 },
    { id: 2, nombre: "adidas ", precio: 18000 },
    { id: 3, nombre: "nike ", precio: 11000 },
    { id: 4, nombre: "underarmor ", precio: 16000 }
]

const arrayPantalon =
    [{ id: 1, nombre: "levis ", precio: 150000 },
    { id: 2, nombre: "bolivia ", precio: 180000 },
    { id: 3, nombre: "wrangler ", precio: 150000 }
    ]

const arrayCamisa =
    [{ id: 1, nombre: "camisa manga corta ", precio: 70000 },
    { id: 2, nombre: "camisa manga larga ", precio: 70000 },
    { id: 3, nombre: "camisa hawaiana ", precio: 80000 },
    { id: 4, nombre: "camisa de vestir ", precio: 95000 }
    ]

const arrayZapatillas =
    [{ id: 1, nombre: "vans ", precio: 50000 },
    { id: 2, nombre: "adidas ", precio: 90000 },
    { id: 3, nombre: "nike ", precio: 60000 },
    { id: 4, nombre: "topper ", precio: 20000 },
    ]

const obtenerNombres = (array) => array.map((producto) => producto.nombre).join(" || ");
const tipoPrecio = (array) => array.map(producto => producto.id + ". " + producto.nombre).join(" || ");

const ppp= []

// let precio1 =  15000
// let precio2 =  1000
// let precio3 =  37000

// ppp.push(precio1)
// ppp.push(precio3)
// const total = ppp.reduce((acumulador, elemento) => acumulador + elemento + 0)

// console.log (total)
function precioFinal (){
    return ppp.reduce((acumulador, elemento) => acumulador + elemento + 0)
}
function calculadora() {
    return (precioFinal * 1.48) / 6;
}

let compra = " "
let buscador
let precio
let marca

alert("Bienvenido a Ropa JavaScript")
alert("Ingrese el producto que esta buscando")


while (true) {
    let producto = prompt("¿Que producto esta buscando? Remera, Pantalon, Camisa, Zapatillas")
    switch (producto.toLowerCase()) {
        case "zapatillas":
        case "zapatilla":
            alert("Tenemos zapatillas " + obtenerNombres(arrayZapatillas));
            precio = prompt("Desea conocer el precio de las zapatillas? Escriba SI, de lo contrario escriba NO para volver al menu principal")
            switch (precio.toUpperCase()) {
                case "SI":
                    marca = prompt("Indique con el numero correspondiente de que marca desea conocer el precio: " + tipoPrecio(arrayZapatillas))
                    switch (marca.toLowerCase()) {
                        case "1":
                            alert("el precio de las Vans es de $" + arrayZapatillas[0].precio)
                            break;
                        case "2":
                            alert("el precio de las Adidas es de $" + arrayZapatillas[1].precio)
                            break;
                        case "3":
                            alert("el precio de las Nike es de $" + arrayZapatillas[2].precio)
                            break;
                        case "4":
                            alert("el precio de las Topper es de $" + arrayZapatillas[3].precio)
                            break;
                        default:
                            alert("Producto no encontrado")
                            break;
                    }
                case "NO":
                    break;
                default:
                    alert("No es una opcion")
                    break;
            }
            break;
        case "remera":
        case "remeras":
            alert("Tenemos remeras " + obtenerNombres(arrayRemera));
            precio = prompt("Desea conocer el precio de las remeras? Escriba SI, de lo contrario escriba NO para volver al menu principal")
            switch (precio.toUpperCase()) {
                case "SI":
                    marca = prompt("Indique con el numero correspondiente de que marca desea conocer el precio: " + tipoPrecio(arrayRemera))
                    switch (marca.toLowerCase()) {
                        case "1":
                            alert("el precio de las Vans es de $" + arrayRemera[0].precio)
                            break;
                        case "2":
                            alert("el precio de las Adidas es de $" + arrayRemera[1].precio)
                            break;
                        case "3":
                            alert("el precio de las Nike es de $" + arrayRemera[2].precio)
                            break;
                        case "4":
                            alert("el precio de las UnderArmor es de $" + arrayRemera[3].precio)
                            break;
                        default:
                            alert("Producto no encontrado")
                            break;
                    }
                case "NO":
                    break;
                default:
                    alert("No es una opcion")
                    break;
            }
            break;
        case "pantalon":
        case "pantalones":
            alert("Tenemos pantalones " + obtenerNombres(arrayPantalon));
            precio = prompt("Desea conocer el precio de los pantalones? Escriba SI, de lo contrario escriba NO para volver al menu principal")
            switch (precio.toUpperCase()) {
                case "SI":
                    marca = prompt("Indique con el numero correspondiente de que marca desea conocer el precio: " + tipoPrecio(arrayPantalon))
                    switch (marca.toLowerCase()) {
                        case "1":
                            alert("el precio del jean Levis es de $" + arrayPantalon[0].precio)
                            break;
                        case "2":
                            alert("el precio del pantalon Bolivia es de $" + arrayPantalon[1].precio)
                            break;
                        case "3":
                            alert("el precio del jean Wrangler es de $" + arrayPantalon[2].precio)
                            break;
                        default:
                            alert("Producto no encontrado")
                            break;
                    }
                case "NO":
                    break;
                default:
                    alert("No es una opcion")
                    break;
            }
            break;
        case "camisa":
        case "camisas":
            alert("Tenemos camisas " + obtenerNombres(arrayCamisa));
            precio = prompt("Desea conocer el precio de las camisas? Escriba SI, de lo contrario escriba NO para volver al menu principal")
            switch (precio.toUpperCase()) {
                case "SI":
                    marca = prompt("Indique con el numero correspondiente de que tipo de camisa desea conocer el precio: " + tipoPrecio(arrayCamisa))
                    switch (marca.toLowerCase()) {
                        case "1":
                            alert("el precio de la camisa manga corta es de $" + arrayCamisa[0].precio)
                            break;
                        case "2":
                            alert("el precio de la camisa manga larga es de $" + arrayCamisa[1].precio)
                            break;
                        case "3":
                            alert("el precio de la camisa hawaiana es de $" + arrayCamisa[2].precio)
                            break;
                        case "4":
                            alert("el precio de la camisa de vestir es de $" + arrayCamisa[3].precio)
                            break;
                        default:
                            alert("Producto no encontrado")
                            break;
                    }
                case "NO":
                    break;
                default:
                    alert("No es una opcion")
                    break;
            }
            break;
        default:
            alert("Producto no encontrado")
            break;
    }



    while (true) {
        buscador = prompt("¿Busca algún otro producto? Escriba SI para buscar otra prenda, de lo contrario responda NO para salir.").toUpperCase();

        if (buscador === "NO") {
            break;
        } else if (buscador === "SI") {
            break;
        } else {
            alert("No es una respuesta correcta");
        }
    }

    if (buscador === "NO") {
        break;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////***************************************************************** */


producto = prompt("Indique con un numero que producto desea llevar? Si quiere desistir de la compra, responda NO para salir: " + tipoPrecio(arrayRopa))

if (producto.toUpperCase() === "NO") {
    alert("Gracias por visitarnos!")
}
else if (producto.toUpperCase() != "NO") {
    while (producto.toUpperCase() != "NO") {
        switch (producto.toLowerCase()) {
            case "zapatillas":
            case "zapatilla":
            case "1":
                marca = prompt("Indique con el numero correspondiente que zapatillas desea comprar: " + tipoPrecio(arrayZapatillas))
                switch (marca.toLowerCase()) {
                    case "1":
                        compra = compra + arrayZapatillas[0].nombre
                        ppp.push(arrayZapatillas[0].precio)
                        break;
                    case "2":
                        compra = compra + arrayZapatillas[1].nombre
                        ppp.push(arrayZapatillas[1].precio)
                        break;
                    case "3":
                        compra = compra + arrayZapatillas[2].nombre
                        ppp.push(arrayZapatillas[2].precio)
                        break;
                    case "4":
                        compra = compra + arrayZapatillas[3].nombre
                        ppp.push(arrayZapatillas[3].precio)
                        break;
                    default:
                        alert("el numero ingresado es incorrecto")
                        break;
                }
                break;
            case "remera":
            case "remeras":
            case "2":
                marca = prompt("Indique con el numero correspondiente que remera desea comprar: " + tipoPrecio(arrayRemera))
                switch (marca.toLowerCase()) {
                    case "1":
                        compra = compra + arrayRemera[0].nombre
                        ppp.push(arrayRemera[0].precio)
                        break;
                    case "2":
                        compra = compra + arrayRemera[1].nombre
                        ppp.push(arrayRemera[1].precio)
                        break;
                    case "3":
                        compra = compra + arrayRemera[2].nombre
                        ppp.push(arrayRemera[2].precio)
                        break;
                    case "4":
                        compra = compra + arrayRemera[3].nombre
                        ppp.push(arrayRemera[3].precio)
                        break;
                    default:
                        alert("el numero ingresado es incorrecto")
                        break;
                }
                break;
            case "pantalon":
            case "pantalones":
            case "3":
                marca = prompt("Indique con el numero correspondiente que pantalon desea comprar: " + tipoPrecio(arrayPantalon))
                switch (marca.toLowerCase()) {
                    case "1":
                        compra = compra + arrayPantalon[0].nombre
                        ppp.push(arrayPantalon[0].precio)
                        break;
                    case "2":
                        compra = compra + arrayPantalon[1].nombre
                        ppp.push(arrayPantalon[1].precio)
                        break;
                    case "3":
                        compra = compra + arrayPantalon[2].nombre
                        ppp.push(arrayPantalon[2].precio)
                        break;
                    default:
                        alert("el numero ingresado es incorrecto")
                        break;
                }
                break;
            case "camisa":
            case "camisas":
            case "4":
                marca = prompt("Indique con el numero correspondiente que camisa desea comprar: " + tipoPrecio(arrayCamisa))
                switch (marca.toLowerCase()) {
                    case "1":
                        compra = compra + arrayCamisa[0].nombre
                        ppp.push(arrayCamisa[0].precio)
                        break;
                    case "2":
                        compra = compra + arrayCamisa[1].nombre
                        ppp.push(arrayCamisa[1].precio)
                        break;
                    case "3":
                        compra = compra + arrayCamisa[2].nombre
                        ppp.push(arrayCamisa[2].precio)
                        break;
                    case "4":
                        compra = compra + arrayCamisa[3].nombre
                        ppp.push(arrayCamisa[3].precio)
                        break;
                    default:
                        alert("el numero ingresado es incorrecto")
                        break;
                }
                break;
            default:
                alert("El producto " + producto + " no se encuentra disponible");
                break;
        }
        producto = prompt("¿Busca algún otro producto? Escriba el nombre de lo que busca agregar, de lo contrario, responda NO para continuar al pago.")
    }


    function precioFinal (){
        return ppp.reduce((acumulador, elemento) => acumulador + elemento + 0)
    }


    let cuotas = prompt("Desea pagar en 6 cuotas con un recargo del 48% sobre " + precioFinal() + "? Conteste SI para pagar en cuotas, NO para continuar con el pago al contado o SALIR para abandonar la compra")

    while (cuotas.toUpperCase() !== "SI" && cuotas.toUpperCase() !== "NO" && cuotas.toUpperCase() !== "SALIR") {
        alert("eso no es una respuesta correcta")
        cuotas = prompt("Desea pagar en 6 cuotas con un recargo del 48% sobre " + precioFinal() + "? Conteste SI para pagar en cuotas, NO para continuar con el pago al contado O SALIR para abandonar la compra")

    }
    if (cuotas.toUpperCase() === "SI") {
        alert("El costo final es de " + calculadora() + " por cuota.")
        alert("Gracias por comprar con nosotros!")
        console.log("Total de " + calculadora() * 6 + " por " + compra + " a pagar en 6 cuotas")
    } else if (cuotas.toUpperCase() === "NO") {
        alert("Gracias por su compra, procederemos al pago ahora")

        let total = precioFinal()
        let transferencia = parseInt(prompt("Escriba el monto exacto de " + total + " para realizar la transferencia"))
        while (transferencia !== total) {
            transferencia = parseInt(prompt("El monto ingresado es incorrecto. Por favor escriba " + total + " para terminar la transacción"))
        }
        alert("Pago recibido. ¡Gracias por comprar con nosotros!")
        console.log("Total de " + total + " por", compra)
    } else if (cuotas.toUpperCase() === "SALIR") {
        alert("Gracias por visitarnos!")
    }
}
