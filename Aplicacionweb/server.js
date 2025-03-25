const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../aplicacionweb')));

// Rutas (puedes agregar tus rutas aquí)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../aplicacionweb/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});