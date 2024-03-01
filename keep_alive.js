var http = require('http');
let {client} = require('./bot_snarz.js');

http.createServer(function (req, res) {
  res.write("I'm alive / Estoy vivo " + client.user.username);
  res.end();
}).listen(8080);