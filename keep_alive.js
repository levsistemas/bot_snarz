var http = require('http');
require('dotenv').config();

const server = http.createServer(function (req, res) {
  const { client, tag, userName} = require('./bot_snarz')

  if (req.url == '/'){
    res.write(`I'm alive / Estoy vivo, Mi ID: ${tag}\n`);
  res.write(`I'm alive / Estoy vivo, soy: ${userName}\n`);
  res.end();
  }

  if (req.url == '/' + process.env.secret) {
    res.write(client)
    res.end()
  }
  
}).listen(8080);

module.exports = server