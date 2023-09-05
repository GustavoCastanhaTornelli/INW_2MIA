const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello Word!!\nEm node.js!!')
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Servidor rodando na url http://localhost:${port}`);
});