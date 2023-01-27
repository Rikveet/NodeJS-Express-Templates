// JWT template

// Load .env
const dotenv = require('dotenv')
dotenv.config()

// express app init
const express = require('express');
const app = express();

const jwt = require('./jwt_handler');
const crypto = require('crypto')


// login example
// to test this you can search localhost:PORT/login?username=xyz&password=xyz
app.get('/login', (req, res)=>{
    const {username, password} = req.query;
    // check user information
    const session_token = crypto.randomUUID();
    // store session token to the database
    res.json({'token':jwt.generate(session_token),'uid':session_token})
})

// user request example with middleware
app.get('/user/info',jwt.process, (req,res)=>{
    const {payload} = req;
    // get the user info from the server
    res.json({
        payload,
        other_info:'This is some other info given by the server'
    })
})

// listen to port or default 3000
app.listen(process.env.PORT || '3000');
console.log('Server has started');
