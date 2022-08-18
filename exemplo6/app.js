import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Uma resposta simpática');

});

// executando o servidor
app.listen(8080, () => {
    console.log('Servidor express rodando...');
});