const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const process = require('process');
const { version } = require('os');
var pjson = require('./package.json');


var r6 = ['r6', 'sij', 'reinbou', 'timotei', 'clanta', 'sics'];
const niggerEmbed = new Discord.MessageEmbed()
  .setColor('#fa682e')
  .setTitle('boogzor bot remaster ' + pjson.version)
  .setURL('http://smekker.go.ro')
  .setDescription("bot binbus zip-bomb.js V" + pjson.version)
  .addFields(
    { name: 'bozgor', value: 'city ejszaka bog radio', inline: true },
    { name: 'kiss', value: 'kaki kiss ejszaka', inline: true },
  //{ name: 'gonne6', value: 'send bog to brazil', inline: true },
  //{ name: 'sij', value: 'buklin 29 mihai grsa', inline: true },
  //{ name: 'stalpuss', value: 'iluminare elevata inc.', inline: true },
  //{ name: 'tzatze', value: 'tzatz stramb si tzatz grsa si mate si sange', inline: true },
  //{ name: 'istlosefemees', value: 'mexicano institut of sound', inline: true },
  //{ name: 'o car', value: 'carina cal', inline: true },
  //{ name: 'un om', value: 'man bulgar', inline: true },
  //{ name: 'trei bulg', value: 'bulgaria manel', inline: true },
  //{ name: 'man ual', value: 'manel intens flor salam', inline: true },
  //{ name: 'marki', value: 'covor prost femee', inline: true },
  //{ name: 'strazile', value: 'radu huligan stradal', inline: true },
  //{ name: 'kazak', value: 'kazakhstan ogrozhayet nam bombarderofky', inline: true },
  //{ name: 'mem nem', value: 'zifgan alhadit haragaz butelios', inline: true },
  )
  .setTimestamp()
  .setFooter('asperger grsoot V' + pjson.version);


client.once('ready', () => {
  client.user.setPresence("RyithiM KAK KAKYOIN!11!!!1", { type: 'PLAYING' });
  console.log('bog online');
});

client.on('message', async message => {
  var boolradu = 0;
  const command = message.content;
  var server = message.guild;
  let member = server.members.cache.get(message.author.id);
  let meck = server.members.cache.get('622512432149037057');
  if (message.author.bot) return;
  // if (r6.includes(command)) boolradu = boolradu + 1;
  if (command.includes("bozgor")) boolradu = boolradu + 1;
  // if (command.includes("gonne6")) boolradu = boolradu + 1;
  // if (command.includes("stalpuss")) boolradu = boolradu + 1;
  // if (command.includes("tacicovaci")) boolradu = boolradu + 1;
  //if (command.includes("istlosefemees")) boolradu = boolradu + 1;
  // if (command.includes("tzatze")) boolradu = boolradu + 1;
  if (boolradu >= 2) return;
  boolradu = 0;
  const connection = message.member.voice.channel;

  if(message.member.voice.channel){
    if(command.includes('bozgor') == true){
      const connection = await message.member.voice.channel.join();
      const citdispatcher = connection.play('https://mscp1.gazduireradio.ro/cityradio');
      citdispatcher.on('start', () => {
        console.log('bog ejszaka radio!');
      });
      message.reply("city-raBio az igazi ejszakai radio!");
      await connection.on("disconnect" , () => {
        citdispatcher.destroy();
      });
    }

    if(command.includes('kiss') == true){
      const connection = await message.member.voice.channel.join();
      const citdispatcher = connection.play('https://live.kissfm.ro/kissfm.aacp');
      citdispatcher.on('start', () => {
        console.log('romaniai kiss ejszaka radio!');
      });
      message.reply("romaniai szar kiss fm ejszaka");
      await connection.on("disconnect" , () => {
        citdispatcher.destroy();
      });
    }
   }
   if (command.includes("help") == true) {
    message.reply(niggerEmbed);
  }
  }); 


client.login('ODE0MjY1MTY1ODE4MjMyOTAy.GhypDD.g2M7HPRV-DkV8SrZKawaurHhCuACIHZjur2RkY');
