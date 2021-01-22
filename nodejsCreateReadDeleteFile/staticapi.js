var fs = require('fs');
const http = require('http');

var server  = http.createServer(function(req,res){
    fs.readFile('azim.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data)
        res.end()
    })
})
server.listen(5000)