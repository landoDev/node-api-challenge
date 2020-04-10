// THIS WONT #$!@%@#$% WORK WHEN I TRY TO EXPORT IT

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to my API!</h2>`);
  });