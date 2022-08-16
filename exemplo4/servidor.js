import http from 'http'; // Importando módulo http nativo do node

import fs from 'fs/promises'; // JS assíncrono (operações independentes , ocorrem em paralelo). FS = File System

const monitorRequisicao = (requisicao, resposta) => { // arrow function
    resposta.writeHead(200, {"Content-Type":"text/html; charset=utf8"} );
    switch(requisicao.url) {
        case '/':
            fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo));
        break;

        case '/sobre':
            fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
        break;

        default:
            resposta.writeHead(404);
            fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
        break;

    }

}
// Criando um servidor baseado no módulo http que importamos e monitorando ele

const servidor = http.createServer(monitorRequisicao);

// iniciando o servidor
servidor.listen(8080, () => {
    console.log('servidor rodando');
}
);
