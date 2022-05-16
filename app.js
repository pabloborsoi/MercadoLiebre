const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else{
            res.write(data)
        }
    })
})

server.listen(port,function(error){
    if(error){
        console.log('Algo anduvo mal',error)
    }
    else{
        console.log('El servidor esta corriendo en el puerto '+port)
    }
})