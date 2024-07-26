let zapatillas = 30000
let pantalon = 150000
let remera = 10000
let camisa = 80000
let precioFinal = 0
let compra = " "

function calculadora() {
    return (precioFinal * 1.48) / 6;
}

alert("¿Que producto esta buscando? remera, pantalon, camisa o zapatillas?")
let producto = prompt("Ingrese el producto que esta buscando y le diremos su precio")



while (producto.toUpperCase() != "NO") {
    switch (producto.toLowerCase()) {
        case "zapatillas":
            alert("El precio de las zapatillas es " + zapatillas);
            break;
        case "remera":
            alert("El precio de las remeras es " + remera);
            break;
        case "pantalon":
            alert("El precio de los pantalones es " + pantalon);
            break;
        case "camisa":
            alert("El precio de las camisas es " + camisa);
            break;
        default:
            alert("El producto " + producto + " no se encuentra disponible");
            break;
    }
    producto = prompt("¿Busca algún otro producto? De lo contrario, responda NO para salir.")
    if (producto.toUpperCase() === "NO") {
        break;
    }
}


producto = prompt("Que producto desea llevar? Si quiere desistir de la compra, responda NO para salir")

if (producto.toUpperCase() === "NO") {
    alert("Gracias por visitarnos!")
}
while (producto.toUpperCase() != "NO") {
    switch (producto.toLowerCase()) {
        case "zapatillas":
            compra = "zapatillas " + compra
            precioFinal = precioFinal + zapatillas;
            break;
        case "remera":
            compra = "remera " + compra
            precioFinal = precioFinal + remera;
            break;
        case "pantalon":
            compra = "pantalon " + compra
            precioFinal = precioFinal + pantalon;
            break;
        case "camisa":
            compra = "camisa " + compra
            precioFinal = precioFinal + camisa;
            break;
        default:
            alert("El producto " + producto + " no se encuentra disponible");
            break;
    }
    producto = prompt("¿Busca algún otro producto? De lo contrario, responda NO para salir.")

}
let cuotas = prompt("Desea pagar en 6 cuotas con un recargo del 48% sobre " + precioFinal + "? Conteste SI para pagar en cuotas, o no para continuar con el pago al contado")

if (cuotas.toUpperCase() === "SI") {
    alert("El costo final es de " + calculadora() + " por cuota")
    alert("Gracias por comprar con nosotros!")
    console.log("Total de " + calculadora() * 6 + " por " + compra + "a pagar en 6 cuotas")
} else if (producto.toUpperCase() === "NO") {
    alert("Gracias por su compra, procederemos al pago ahora")
    let transferencia = parseInt(prompt("Escriba el monto exacto de " + precioFinal + " para realizar la transferencia"))
    if (transferencia === precioFinal) {
        alert("Gracias por comprar con nosotros!")
    } else {
        alert("Eso no es el monto correcto")
    }
    console.log("Total de " + precioFinal + " por", compra)
} else {
    alert("Eso no es una respuesta correcta")
}



