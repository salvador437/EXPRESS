const express = require('express');
const app = express();
const path = require('path')


app.use( express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/contenido', (req, res) => {
  res.send('pagina1.html');
});

app.get('/contenido', (req, res) => {
  res.send('pagina2.html');
});

app.get('/contenido', (req, res) => {
  res.send('pagina3.html');
});

const PUERTO =  5500;

app.listen(PUERTO, () => {
  console.log(`escuchando por el puerto ${PUERTO}`);
})
