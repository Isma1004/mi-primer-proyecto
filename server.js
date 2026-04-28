// 1. Importamos la librería que acabamos de instalar
const express = require('express');
const path= require('path');//libreria para manejar rutas de carpetas 

// 2. Creamos una instancia de la aplicación
const app = express();

// 3. Definimos un puerto (el "departamento" donde vive nuestra app)
const PORT = 3000;

//configuracion para usar EJS como motor de plantillas
app.set('view engine', 'ejs'); //le decimos a Express que use EJS para renderizar las vistas
app.set('views', path.join(__dirname, 'views')); //le decimos a Express donde estan nuestras vistas

app.use(express.static(path.join(__dirname,'views'))); //si algun cliente pide un archivo busca en la carpeta public 


// 4. Creamos una "Ruta" (Endpoint)
// Cuando alguien entre a la raíz de nuestra dirección (/) ejecutamos esto:
app.get('/', (req, res) => {
    // req = request (lo que el usuario nos manda)
    // res = response (lo que nosotros le contestamos)
    res.render('index', {totalClics: contadorGlobal}); //renderizamos la vista index.ejs y le pasamos el contador actual
});

//modificacion 
app.use(express.json()); //para que el servidor entienda los datos que le mandamos en formato JSON

let contadorGlobal= 0; //variable global para contar las visitas

app.get('api/contador', (req, res) => {
    res.json({total: contadorGlobal}); //enviamos el contador actual al cliente
});

app.post('/api/incrementar', (req, res) => {
    contadorGlobal++; //aumentamos el contador cada vez que recibimos una petición POST
    res.json({total: contadorGlobal}); //enviamos el nuevo valor del contador al cliente
});

// 5. Encendemos el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});