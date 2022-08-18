import express from "express";

const app = express();

app.get('/', (req, res) => {
    // res.send('Uma resposta simpática3');
    res.render('paginas/index');

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