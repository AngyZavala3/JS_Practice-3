let contador=0;
let options;

do {
    
    opcion = parseInt(prompt(
        `Contador actual: ${contador}\n` +
        "Seleccione una opción:\n" +
        "1. Incrementar counter\n" +
        "2. Decrementar counter\n" +
        "4. Exit"
    ));


    switch (opcion) {
        case 1:
            contador++;
            break;
        case 2:
            contador--;
            break;
        case 4:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== 4);