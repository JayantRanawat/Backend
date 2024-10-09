const express = require('express');
const token = '5483'

const app = express();

const mw = (req, res, cb) =>{
    if(!req.params.key) return res.send('Please provide a key');

    if(req.params.key !== token) return res.send('Please provide a valid token');

    cb();
}

const m2 = (req, res, cb) =>{
    console.log('M2 called')
    cb();
}

const m3 = (req, res, cb) =>{
    console.log('M3 called')
    cb();
}

app.get('/:key?', mw,m2,m3, (req, res) => {
    console.log('Hello World');
    res.send('welcome to my api')
});

app.listen(5200, () => {
    console.log("Server is running on port 5200");
})