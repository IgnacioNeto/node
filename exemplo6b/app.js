import express from "express";
const app = express();

// configurando o motor de visualização com EJS
app.set('view engine', 'ejs');

// configurando as rotas
app.get('/', (req, res) => {
    // res.send('OK 2022');
    let bandas = ["Metallica", "Guns N Roses","Scorpions"];
    res.render('index', {bandas});
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});



// configurando o servidor

app.listen(8080, () => {
    console.log('Servidor express rodando...');
});
