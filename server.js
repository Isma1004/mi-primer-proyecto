// 1. Importamos la librería que acabamos de instalar
const express = require('express');
const path= require('path');//libreria para manejar rutas de carpetas 

// 2. Creamos una instancia de la aplicación
const app = express();

// 3. Definimos un puerto (el "departamento" donde vive nuestra app)
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public'))); //si algun cliente pide un archivo busca en la carpeta public 


// 4. Creamos una "Ruta" (Endpoint)
// Cuando alguien entre a la raíz de nuestra dirección (/) ejecutamos esto:
app.get('/', (req, res) => {
    // req = request (lo que el usuario nos manda)
    // res = response (lo que nosotros le contestamos)
    res.sendFile(path.join(__dirname,'index.html'));
});

// 5. Encendemos el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});