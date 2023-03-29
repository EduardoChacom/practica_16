 //Importamos la dependencia.
 const express = require('express');
//Declaramos una App de Express.
const app = express();
//Incluimos el router que viene de persons:
let personsRoute = require('./routes/person');
let studentRoute = require('./routes/student');

const PORT = process.env.PORT||3000;

app.set('view engine', 'ejs');

app.use(personsRoute);
app.use(studentRoute);
//Contenido estatico
app.use('/assets', express.static(__dirname + '/public'));

// Todas las rutas ya son solo del servidor.
app.listen(PORT, () => {
    console.log('Escuchando en el purto 3000!');
});

