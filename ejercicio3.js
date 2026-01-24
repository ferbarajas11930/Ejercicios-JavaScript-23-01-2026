const alumno = {
    nombre : "Jaime",
    semestre : 6,
    cal1 : 89,
    cal2 : 68,
    cal3 : 90
}

const promedio = (alumno.cal1+alumno.cal2+alumno.cal3)/3
const paso = promedio >=60

console.log("Alumno: ", alumno.nombre)
console.log("Promedio: ", promedio)
console.log("¿Aprobo? ", promedio >= 6)
