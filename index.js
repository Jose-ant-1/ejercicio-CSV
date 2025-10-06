console.log('Happy developing ✨')

let texto;

document.addEventListener('DOMContentLoaded', () => {
    console.log("pagina cargada");
    const mostrar = document.getElementById('mostrar');

    fetch("email-password-recovery-code.csv")
        .then(response => response.text())  // obtenemos el texto del CSV
        .then(data => {
            texto = data;  // aquí tienes todo el contenido del CSV en data
            window.texto = data;
            console.log(texto)
            // si quieres, guárdalo en una variable global
            window.data = texto;
            mostrar.innerHTML = texto;
        });

});






