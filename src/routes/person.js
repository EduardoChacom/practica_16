const express = require('express') //Importamos la dependencia.
let router = express.Router(); 
// Instalación del "router" al que asociaremos todas las turas.

// Refactorización, hace lo mismo, pero funciona direferente,
// gracias a las promesas.
router.get('/person', (req, res) => {
    res.send('Has solicitado el listado de personas');
});

module.exports = router;