const express = require('express');
let axios = require('axios');
const redis = require('redis');
const { response } = require('express');


const app = express();
const port = 8777;

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})


app.get('/data', (req, res) => {
    const userInput = (req.query.country).trim();
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`
    //check in redis
    return client.get(`wiki:${userInput}`, (err, result) => {
        if (result) {
            const output = JSON.parse(result);
            return res.send(output)
        } else {
            return axios.get(url)
                .then(response => {
                    //get response from api
                    const output = response.data;
                    //save in redis
                    client.setex(`wiki:${userInput}`, 3600, JSON.stringify({
                        source: 'Redis', output
                    }))
                    //return api response was not in redis
                    res.send({ source: 'api', output })
                })
        }
    })
    // 
})
app.listen(port, () => {
    console.log("server is running")
})