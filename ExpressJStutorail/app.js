var express = require('express');
const app = express();
const cityRouter= require('./src/Routes/cityRouter')
const hotelRouter= require('./src/Routes/hotelRouter')

port = 4000;

// use 
app.use('/city',cityRouter);
app.use('/hotel',hotelRouter);

// get route at home page  
app.get('/',(req,res)=>{
    res.send('<h1>Hiii From Azim Ndode Js tutorial</h1>')
})

app.listen(port,console.log("server is running"))