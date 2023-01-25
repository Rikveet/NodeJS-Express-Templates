// Basic Hello world template

// Load .env
const dotenv = require('dotenv')
dotenv.config()

// express app init
const express = require('express');
const app = express();

// request at localhost:PORT handler
app.get('/', (req, res) => {
    res.send('Hello World');
});

// request with parameter
app.get('/:name', (req, res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}!!`);
})

// listen to port or default 3000
app.listen(process.env.PORT || '3000');
console.log('Server has started');
