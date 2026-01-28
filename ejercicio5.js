const ticket = {
    id: "TCK-001",
    titulo: "Error en impresora",
    estado: "abierto",
    prioridad: "alta",
    area: "Sistemas",
    fecha: "2024-06-15-10:30:00",
    creador: {
        nombre: "Fer",
        email: "fer@mail.com"
    },
    asignados: ["Andres", "Ana"],
    comentarios: [
        { usuario: "Ana", mensaje: "Revisando el equipo" },
        { usuario: "Andres", mensaje: "Falta toner" },
    ],

};

console.log("Titulo: ", ticket.titulo, "Estado: ", ticket["estado"])

if (ticket.estado === "abierto") {
    ticket.estado = "cerrado"
    console.log("El estado ha cambiado")
    console.log("Estado: ", ticket.estado)
}

let nuevoMensaje = "Hola que hace"
if (nuevoMensaje === "") {
    ticket.comentarios.push({ usuario: "Juan", nuevoMensaje });
}

if (ticket.asignados.length > 0) {
    for (let i = 0; i < ticket.asignados.length; i++) {
        console.log("Asignado: ", ticket.asignados[i])
    }
}

let priori = "media"
if (ticket.prioridad === "alta" || ticket.prioridad === "media" || ticket.prioridad === "baja") {
    ticket.prioridad = priori
}

let anaCom = false
for (let i = 0; i < ticket.asignados.length; i++) {
    if (plataforma.perfiles[i].usuario === "Ana") {
        anaCom = true
    }
}

if (anaCom) {
    console.log("Ana ya comentó en el ticket")

} else {
    console.log("Ana no ha comentado")
}




