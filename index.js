const express = require('express');
const conectarDB = require('./config/db');

const cors = require('cors');

//Creamos el server
const app = express();
//Puerto del server
const port = 4000;


//connectamos
conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//Definimos la ruta principal
//app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`El servidor esta ejecutandose en el puerto ${port}!`));