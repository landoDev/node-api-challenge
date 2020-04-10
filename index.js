// const server = require('./server')
const express = require('express');

server = express();

const port = 5000;

server.listen(port, ()=> console.log(`*****\n SERVER LISTENING ON ${port} \n*****`))
