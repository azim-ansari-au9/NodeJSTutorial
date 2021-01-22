var http = require('http');

var server = http.createServer(function(req,res) {
    res.write('hi From Azim');
    res.end();
    // console.log('server is live')
})
server.listen('5000');