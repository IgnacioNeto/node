import express from "express";

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Uma resposta simpática3');
    const bandas = ["Metallica", "Guns N Roses"];
    res.render('paginas/index', {bandas});

});

app.get('/sobre', (req, res) => {
    // res.send('Sobre');
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    // res.send('Contato');
    res.render('paginas/contato');
});

// executando o servidor
app.listen(8080, () => {
    console.log('Servidor express rodando...');
});
// Obs Ctrl + C (Para o servidor)

// preparar para receber arquivos html
// instalação do EJS