const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Mixi esta lista nenes as: ${client.user.tag}`);
    client.user.setStatus('dnd');

    console.log(client.user.presence);
  });
 
client.on('message', message => {
    // Receiving the message
    console.log(message.content);
    if (message.content === 'aq') {
      message.reply('Onda!');
    }

    if(message.content === '.') {
      message.channel.send ('*Se va*')
      message.delete();
    }
    client.on("ready", () => {
      function randomStatus() {
        let status = ["ht!ayuda🎮Genshin Impact", "ht!Genshin🎮Donwload Game!"]     // AQUI VA EL ESTADO EJEMPLO  ["ht!ayuda🎮Genshin Impact", "ht!Genshin🎮Donwload Game!"]
        let rstatus = Math.floor(Math.random() * status.length);
     
        // Puedes poner "WATCHING" into STREAMING, LISTENING, and PLAYING.
        // Ejemplo: de estados   ["ht!ayuda🎮Genshin Impact", "ht!Genshin🎮Donwload Game!", "ht!update🎮Genshin Impact"]
     
        client.user.setActivity(status[rstatus], {type: "WATCHING"});
     
     
      }; setInterval(randomStatus, 30000) // No mover por nada en el mundo esta opcion!
     
      console.log(`Online.👥${client.guilds.cache.size} Servers & ${client.users.cache.size} Users`)
    })  
  });
 
 client.login('NzQwNzg4MTUzMTE1MzQ0ODk3.XyuGug.Hb4XttCoWlauwkSQKtdaOIbh1BY');