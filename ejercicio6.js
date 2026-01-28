const plataforma = {
    nombre: "IntelFlix",
    plan: "Premium",
    usuario: {
        nombre: "Fer",
        edad: 22,
    },
    perfiles: [
        {
            nombre: "Fernando",
            favoritos: ["Dark", "Breaking Bad"],
            historial: ["Dark"],
        },
        {
            nombre: "Juan",
            favoritos: ["Gossip Girl", "Stranger Things"],
            historial: [],
        },


    ],
}

//1
console.log(plataforma.usuario)

//2
if (plataforma.plan === "Premium") {
    plataforma.plan = "Ultimate"
    console.log("El plan ha cambiado")
    console.log("Plan: ", plataforma.plan)
}

//3
let nuevaSerie = "Halo"
let serieExiste = false
for (let i = 0; i < plataforma.perfiles[0].length; i++) {
    if (plataforma.perfiles[0].favoritos[i] === nuevaSerie) {
        serieExiste = false
    }
}
if (!serieExiste) {
    plataforma.perfiles[0].favoritos.push(nuevaSerie)
}

//4
if (plataforma.perfiles[0].historial.length > 0) {
    for (let i = 0; i < plataforma.perfiles[0].historial.length; i++) {
        console.log("Historial: ", plataforma.perfiles[0].historial[i])
    }
} else {
    console.log("Historial vacio")
}

//5
if (plataforma.usuario.edad > 17) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}