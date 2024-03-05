var http = require('http');
require('dotenv').config();

const cliente = {
  iniciando: "MI INICIO",
  _events: "Object null prototype",
    shardDisconnect: "Function (anonymous)",
    ready: "AsyncFunction (anonymous)",
    messageCreate: "Function (anonymous)",
  
  _eventsCount: 3,
  _maxListeners: 'undefined',
  options: {
    closeTimeout: 5000,
    waitGuildTimeout: 15000,
    shardCount: 1,
    makeCache: 'Function' + 'anonymous',
    partials: [],
    failIfNotExists: true,
    presence: { status: 'online', user: Object },
    sweepers: { threads: Object },
    ws: { large_threshold: 50, version: 10, presence: Object },
    rest: {
      agent: null,
      api: 'https://discord.com/api',
      authPrefix: 'Bot',
      cdn: 'https://cdn.discordapp.com',
      headers: {},
      invalidRequestWarningInterval: 0,
      globalRequestsPerSecond: 50,
      offset: 50,
      rejectOnRateLimit: null,
      retries: 3,
      timeout: 15000,
      userAgentAppendix: 'undefined',
      version: '10',
      hashSweepInterval: 14400000,
      hashLifetime: 86400000,
      handlerSweepInterval: 3600000,
      makeRequest: 'AsyncFunction ' + 'makeRequest'
    },
    jsonTransformer: 'Function' + ' toSnakeCase',
    intents: 'IntentsBitField ' + 'bitfield ' + 33539,
    shards: 0
  }
};

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  const { client, tag, userName} = require('./bot_snarz')

  if (req.url == '/'){
    res.write(`I'm alive / Estoy vivo, Mi ID: ${tag}\n`);
    res.write(`I'm alive / Estoy vivo, soy: ${userName}\n`);
    res.end();
  }

  if (req.url == '/' + process.env.secret) {
    //res.writeHead(200,{'content-type':'text/plain'})
    res.write('VERIFICAR CONSOLA')
    console.log(client)
    res.end()
  }
  
}).listen(8080);

module.exports = server