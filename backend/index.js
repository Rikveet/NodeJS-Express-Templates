// Basic Hello world template

// Load .env
const dotenv = require('dotenv')
dotenv.config()

// express app init
const express = require('express');
const path = require("path");
const app = express();

// Configuration of static pages. This can be your React build.
app.use(express.static(path.join(__dirname, 'build')));


// you can continue to define your api calls.
app.get('/api/user/', (req, res) => {
    console.log(req.query)
    try {
        const {username} = req.query
        res.send(`This was the username query sent to the server: ${username}`)
    }
    catch (e){
        res.status(400).send('Invalid Query.')
    }
})


// listen to port or default 3000
app.listen(process.env.PORT || '3000');
console.log(`Server has started at http://localhost:${process.env.PORT || '3000'}`);
