var http = require('http');
let {Client} = require('./bot_snarz.js');

http.createServer(function (req, res) {
  res.write("I'm alive / Estoy vivo " + Client.user.username);
  res.end();
}).listen(8080);