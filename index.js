require('dotenv').config(); // loads .env configuration
const port = process.env.PORT || 9000;
const hostname = process.env.HOSTNAME || '127.0.0.1'; // the local computer where the server is running

// const http = require('http'); // built in node.js module to handle http traffic
const express = require('express'); // import the express package
const cors = require('cors');
const helmet = require('helmet');

const server = express(); // creates the server
server.use(helmet());
server.use(cors());
server.use(express.json());

const noteRoutes = require('./routes/note_routes');

server.use('/api/note', noteRoutes);
server.use('/', (req, res) => res.send('API up and running!'));

server.listen(port, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${port}/`);
});