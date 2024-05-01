const express =require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/' , (req, res) => res.sendFile(path.join(__dirname, 'views' , 'inicio.html')));

app.get('/servicios' , (req, res) => res.sendFile(path.join(__dirname, 'views' , 'servicios.html')));

app.get('/obraRealizadas' , (req, res) => res.sendFile(path.join(__dirname, 'views' , 'obraRealizadas.html')));

app.get('/contactos' , (req, res) => res.sendFile(path.join(__dirname, 'views' , 'contactos.html')));


app.listen(PORT , () => console.log(`http://localhost:${PORT}`));