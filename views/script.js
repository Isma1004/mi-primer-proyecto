const etiquetaCuenta=document.getElementById("contador");
const boton=document.getElementById("miboton");

//funcion para pedir el valor al servidor apenas se carga la pagina
async function actualizarPantalla() {
    const respuesta= await fetch('/api/contador'); //hacemos una petición GET al servidor para obtener el contador actual
    const datos= await respuesta.json(); //convertimos la respuesta a formato JSON
    etiquetaCuenta.innerText=datos.total; //actualizamos el texto del contador en la pantalla
}

//funcion para actualizar el contador mas rapido 
document.addEventListener('DOMContentLoaded',() => {
    actualizarPantalla(); //actualizamos el contador apenas se carga la pagina
});

//escuchar el clic y avisar al servidor que aumente el contador
boton.addEventListener('click', async () => {
    const respuesta= await fetch('/api/incrementar', { //hacemos una petición POST al servidor para aumentar el contador
        method: 'POST'
    });
    const datos= await respuesta.json();

    //actualizamos la pantalla con lo que el servidor nos responde (el nuevo valor del contador)
    etiquetaCuenta.innerText=datos.total;
});

//ejecutamos al cargar la pagina por primera vez para mostrar el contador actual
actualizarPantalla();