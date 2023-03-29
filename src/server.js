 //Importamos la dependencia.
 const express = require('express');
//Declaramos una App de Express.
const app = express();
//Incluimos los archivos de rutas para personas y estudiantes.
let personsRoute = require('./routes/person');
let studentRoute = require('./routes/student');

// Establecemos el puerto de la aplicación.
const PORT = process.env.PORT||3000;

// Establecemos el motor de vistas EJS
app.set('view engine', 'ejs');
// Usamos las rutas de personas y estudiantes.
app.use(personsRoute);
app.use(studentRoute);
//Contenido estatico de la aplicación.
app.use('/assets', express.static(__dirname + '/public'));

// Todas las rutas ya son solo del servidor.
// Iniciamos la aplicación y escuchamos en el puerto definido.
app.listen(PORT, () => {
    console.log('Escuchando en el purto 3000!');
});

