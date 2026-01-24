// 1. Variable global para el saldo
let saldo = 1000;

// 2. Función del cajero
function cajero(opcion, monto) {
    
    // 4. Usamos switch para las opciones
    switch (opcion) {
        case "consultar":
            console.log("Tu saldo actual es: " + saldo);
            break;

        case "depositar":
            // 5. Validar monto
            if (monto > 0) {
                saldo += monto;
                console.log("Depositaste: " + monto);
            } else {
                console.log("Error: Monto inválido.");
            }
            break;

        case "retirar":
            // 5. Validar monto y saldo suficiente
            if (monto > 0 && monto <= saldo) {
                saldo -= monto;
                console.log("Retiraste: " + monto);
            } else {
                console.log("Error: Monto inválido o saldo insuficiente.");
            }
            break;

        default:
            console.log("Error: Opción no reconocida.");
    }

    // 6. Mostrar saldo actualizado
    console.log("Saldo final: " + saldo);
    console.log("-------------------------");
}

// Ejemplos de uso:
cajero("consultar");
cajero("depositar", 500);
cajero("retirar", 200);
cajero("retirar", 2000); // Esto debería dar error