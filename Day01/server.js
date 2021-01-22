var os = require('os');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.write('hi Azim Here\n')
    res.write(os.platform());
    res.write(`\n${os.arch()} bit\n`)
    res.write(os.cpus().length+ "");
    res.end();
})
server.listen(7000);
