const producto = {
    nombre : "jabon",
    precio : 33.2,
    cantidad : 5
}


// Operaciones: 
const subtotal = producto.precio * producto.cantidad
const iva = subtotal * 0.16
const total =  subtotal + iva
// Mostrar en consola:
console.log("Nombre producto: ", producto.nombre)
console.log("Subtotal es: ", subtotal)
console.log("IVA 16%: ", iva)
console.log("Cantidad a pagar: ", total)

