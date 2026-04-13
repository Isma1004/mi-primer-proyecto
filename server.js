// 1. Importamos la librería que acabamos de instalar
const express = require('express');

// 2. Creamos una instancia de la aplicación
const app = express();

// 3. Definimos un puerto (el "departamento" donde vive nuestra app)
const PORT = 3000;

// 4. Creamos una "Ruta" (Endpoint)
// Cuando alguien entre a la raíz de nuestra dirección (/) ejecutamos esto:
app.get('/', (req, res) => {
    // req = request (lo que el usuario nos manda)
    // res = response (lo que nosotros le contestamos)
    res.send('<h1>¡Servidor funcionando!</h1><p>Hola Francisco, este es tu primer Back-end.</p>');
});

// 5. Encendemos el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});