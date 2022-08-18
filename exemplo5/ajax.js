import fetch from 'node-fetch';

// Endereço da API "Fake" com 100 Posts
// const url = 'https://jsonplaceholder.typicode.com/posts';

// Teste do via CEP
// const url = 'https://viacep.com.br/ws/01001000/json/';

// Teste do via CEP (Meu CEP)
const url = 'https://viacep.com.br/ws/08320270/json/';

// Conectando com o endpoint da API (url)
fetch(url)
    // retornando a resposta como JSON "JSON-Formato de troca de dados"
    .then(resposta => resposta.json())

    // exibindo a resposta (obtida na API) no console
    .then(dados => console.log(dados));