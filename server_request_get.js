
const http = require('http');
const url = require('url');
const querystring = require('querystring');


// server 생성
let server = http.createServer((req,res)=>{
    console.log('--- log start ---');

    const parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    const parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);
    console.log('--- log end ---');


    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end('var1의 값은 '+parsedQuery.var1);


})

server.listen(8088,()=>{
    console.log('Server is running...');
})