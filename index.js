'use strict';

var http = require('http');

var port = (process.env.PORT || 5000);

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.write(JSON.stringify({name:'testeebot',ver:'0.0.1'}));
    response.end();
}).listen(port);