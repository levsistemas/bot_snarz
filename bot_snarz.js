// requerimientos
const Discord = require('discord.js');

const fs = require('fs');

//agregar keep_alive
//require ('./keep_alive.js');
const keep_alive = require ('./keep_alive.js');

//definir cliente
const Client = new Discord.Client({ intents: [33539]});
module.exports = {Client}

//cargar archivo .env
require('dotenv').config();
const TOKEN_BOT = process.env.token_bot_stiven;

// contenido
Client.on('ready', async ( client ) => {
    console.log(`----------------------------------------------------------------------`)
    console.log(`Estoy listo!!! Hola Mundo, yo soy: ${client.user.tag}`)
    console.log(`Me presento: ${client.user.username}`)
    console.log(`----------------------------------------------------------------------`)
});

Client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.author !== Client.user){
        console.log('ID Autor: ' + message.author + ' - ' + 'Nombre del Bot: ' + Client.user.displayName)
    }
    if (message.content === '!Hola'){
        console.log('saludemos...')
        message.reply('¡Hola!, ¿Como te encuentras?');
        console.log('¡Hola!, ¿Como te encuentras?')
    }
    if (message.content === '!Repetir'){
        console.log('Retornando...')
        message.reply('Retornando Respuesta: ' + message.content);
        console.log('Retornando Respuesta: ' + message.content)
    }
    if(message.content === '!Stiven'){
        message.reply('El señor Stiven o SNARZ es un boludito calenton, lo afirmo!!!')
        console.log('El señor Stiven o SNARZ es un boludito calenton, lo afirmo!!!')
    }
    
    if(message.content === '!SNARZ'){
        message.reply('Mr SNARZ es un boludito calenton, y callado... lo afirmo!!!')
        console.log('Mr SNARZ es un boludito calenton, y callado... lo afirmo!!!')
    }
    if(message.content === '!comandos'){
        message.reply('Los comandos a invocar son: ["!Hola","!Repetir","!Stiven","!SNARZ"]')
        console.log('Los comandos a invocar son: ["!Hola","!Repetir","!Stiven","!SNARZ"]')
    }
    if(message.content === '!commands'){
        message.reply('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!Stiven" + '\n' + "!SNARZ")
        console.log('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola" + '\n' + "!Repetir" + '\n' + "!Stiven" + '\n' + "!SNARZ")
    }
    if(message.content !==''){
        console.log('Mostrando message: ' + message.content)
    } else {
        console.log('mostrando message vacio por error: ' + message.content)
    }
    console.log(`(Username => ${message.author.tag}): ${message.content}`)
    console.log(`(Nickname => ${message.author.globalName}): ${message.content}`)
})

Client.login(TOKEN_BOT);