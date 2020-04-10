// const server = require('./server')
const express = require('express');
const cors = require('cors');
const projectRouter = require('./projects/projectRouter')

server = express();
server.use(cors())
server.use(express.json());
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to my API!</h2>`);
  });

const port = 5000;

server.listen(port, ()=> console.log(`*****\n SERVER LISTENING ON http://localhost:${port} \n*****`))

module.exports = server;