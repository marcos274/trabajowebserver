const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//app.get('/', (req, res) => {
//res.send('Hola Mundo');
//      nombre: 'fernando',
//    edad: 32,
//  url: req.url
// };
//res.send(salida);

//});
//let salida = {

app.listen(3000, () => console.log('Escuchando peticiones en el puerto 3000'));