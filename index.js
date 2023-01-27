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

// request with parameter: localhost:PORT/john
app.get('/:name', (req, res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}!!`);
})


// request with query: localhost:PORT/?john
app.get('/',(req, res) => {
    const {queryA, queryB} = req.query;
    res.send(`This is a response to the query ${queryA} and ${queryB}`);
})

// other types of requests
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.patch('/user',(req,res)=>{
    res.send('Got a patch request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
// listen to port or default 3000
app.listen(process.env.PORT || '3000');
console.log('Server has started');
