console.log('Happy developing ✨');

let datosTomados = []; // array global

async function tomarDatosSVC() {
    const datos = await (await fetch("email-password-recovery-code.csv")).text();
    const lineas = datos.trim().split('\n');
    const headers = lineas[0].split(';').map(h => h.trim());

    datosTomados = lineas.map((linea, index) =>
        Object.fromEntries(
            headers.map((h, i) => [h, index === 0 ? h : (linea.split(';')[i] ?? '')])
        )
    );

    return datosTomados;
}


document.addEventListener('DOMContentLoaded', async () => {
    console.log("Página cargada");
    const mostrar = document.getElementById('mostrar');
    await tomarDatosSVC(); // espera a que los datos se carguen
    console.log(datosTomados); // ya contiene la lista de objetos
    mostrar.innerHTML = datosTomados;

});
