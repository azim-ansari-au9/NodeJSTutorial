const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/user/profile:Id', (req, res)=>{
    console.log(req.params);
    res.send("basic concept of routing in node.js")
});
app.listen(9000, ()=>console.log("server is running"));