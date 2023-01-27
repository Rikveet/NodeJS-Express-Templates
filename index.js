// Basic Hello world template

// Load .env
const dotenv = require('dotenv')
dotenv.config()

// express app init
const express = require('express');
const path = require("path");
const app = express();

// Configuration of static pages. This can be your React build.
app.use('/', express.static(path.join(__dirname, 'client/build')));


// you can continue to define your api calls.

// listen to port or default 3000
app.listen(process.env.PORT || '3000');
console.log(`Server has started at https://localhost:${process.env.PORT || '3000'}`);
