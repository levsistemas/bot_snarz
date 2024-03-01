var http = require('http');
const { Client } = require('./bot_snarz.js');

http.createServer(function (req, res) {
  res.write("I'm alive / Estoy vivo " + (Client.user ? Client.user.username: 'Bot no encontrado'));
  res.end();
}).listen(8080);