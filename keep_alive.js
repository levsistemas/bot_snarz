var http = require('http');
const { Client } = require('./bot_snarz.js');

Client.once('ready', () => {
  console.log('Bot is readyyyyyyyyyyyyyyyyyyyyyyyyyyyy!'); // Solo para verificar en la consola que el bot está listo
  http.createServer(function (req, res) {
    res.write("I'm alive / Estoy vivo " + (Client.user ? Client.user.username: "Bot no encontrado"));
    res.end();
  }).listen(8080);
});