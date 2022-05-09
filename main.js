const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const fs = require('fs');
const prompt = require('prompt-sync');
const process = require('process');
const { version } = require('os');
var pjson = require('./package.json');


var r6 = ['r6', 'sij', 'reinbou', 'timotei', 'clanta', 'sics'];
const niggerEmbed = new Discord.MessageEmbed()
  .setColor('#fa682e')
  .setTitle('UPDATE: mihai ii bou' + pjson.version)
  .setURL('http://www.smekker.ga')
  .setDescription("neuronal monke has activation and converts to allah V" + pjson.version)
  .addFields(
    { name: 'bozgor', value: 'sumonneazaaaa bozgor radio', inline: true },
    { name: 'gonne6', value: 'send bog to brazil', inline: true },
    { name: 'sij', value: 'buklin 29 mihai grsa', inline: true },
    { name: 'stalpuss', value: 'iluminare elevata inc.', inline: true },
    { name: 'tzatze', value: 'tzatz stramb si tzatz grsa si mate si sange', inline: true },
    { name: 'istlosefemees', value: 'mexicano institut of sound', inline: true },
    { name: 'o car', value: 'carina cal', inline: true },
    { name: 'un om', value: 'man bulgar', inline: true },
    { name: 'trei bulg', value: 'bulgaria manel', inline: true },
    { name: 'man ual', value: 'manel intens flor salam', inline: true },
    { name: 'marki', value: 'covor prost femee', inline: true },
    { name: 'strazile', value: 'radu huligan stradal', inline: true },
    { name: 'kazak', value: 'kazakhstan ogrozhayet nam bombarderofky', inline: true },
    { name: 'mem nem', value: 'zifgan alhadit haragaz butelios', inline: true },
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
  if (r6.includes(command)) boolradu = boolradu + 1;
  if (command.includes("bozgor")) boolradu = boolradu + 1;
  if (command.includes("gonne6")) boolradu = boolradu + 1;
  if (command.includes("stalpuss")) boolradu = boolradu + 1;
  if (command.includes("tacicovaci")) boolradu = boolradu + 1;
  if (command.includes("istlosefemees")) boolradu = boolradu + 1;
  if (command.includes("tzatze")) boolradu = boolradu + 1;
  if (boolradu >= 2) return;
  boolradu = 0;
  process.on('uncaughtException', function (err) {

    // Handle the error safely
    console.log(err)
  })
  const connection = await message.member.voice.channel.join();
  const dispatcher = message.member.voice.channel;


  if (command.includes('bozgor') == true) {
    if (message.member.voice.channel) {
      try {
        message.reply("city-raBio livrare in domiciliu bogozor kurtos kalacs");
        connection.play('https://mscp1.gazduireradio.ro/cityradio');
      } catch (err) {
        message.channel.send('homosex!');
        throw err;
      }

    }
    else {
      message.reply("bobzogor virtual cock!!!!!!!!?!?!?");
    }
  }
  if (command.includes('casetutza') == true && member == meck) {
    if (message.member.voice.channel) {
      try {
        message.reply("basina grasa olandeza autorizata pisamas in casetutza lui radu");
        connection.play('http://smekker.go.ro:8000/meck.ogg');
      } catch (err) {
        message.channel.send('homosex!');
        throw err;
      }
    }
    else {
      message.reply("bobzogor virtual cock!!!!!!!!?!?!?");
    }
  }
  if (r6.includes(command) == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('b9-9.mp3');
      dispatcher.on('start', () => {
        console.log('timotei clanta reinbou sics sij')
      });
      message.reply("timotei clanta reinbou sics sij");
      connection.play('b9-9.mp3');
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("istlosefemees") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('istlosefemees.mp3');
      dispatcher.on('start', () => {
        console.log('mexican intity sond')
      });
      message.reply("ist los efemees sponsord by mexican intitty sonda!1");
      connection.play('istlosefemees.mp3');
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("stalpuss") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('ninja.mp3');
      dispatcher.on('start', () => {
        console.log('when the stalpuss is suss')
      });
      message.reply("when the stalpuss is suss he does the 240V 60Hz AC illuminating");
      connection.play('ninja.mp3');
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("tzatze") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('tzatze.mp3');
      dispatcher.on('start', () => {
        console.log('tzatzaaa')
      });
      message.reply("tzatz stramb si tzatz grsa si mate si sange");
      connection.play('tzatze.mp3');
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("marki") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('marki.mp3');
      dispatcher.on('start', () => {
        console.log('aladin mtfkaaaa')
      });
      message.reply("era un femeee zburtor cu MACH 3 viteza decolare covor");
      connection.play('marki.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("un om") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('om.mp3');
      dispatcher.on('start', () => {
        console.log('aladin mtfkaaaa')
      });
      message.reply("pula om umana salam in cur la 73 ani manel florin dildo");
      connection.play('om.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("trei bulg") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('bulg.mp3');
      dispatcher.on('start', () => {
        console.log('aladin mtfkaaaa')
      });
      message.reply("bulgar bulg bulgaresc nem bog bulgarii florentin sallami");
      connection.play('bulg.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("o car") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('car.mp3');
      
      dispatcher.on('start', () => {
        console.log('aladin mtfkaaaa')
      });
      message.reply("carina cur de cal prin tavan ACHIZITIE NOUWA!!!!@@!@@!@!2123 123");
      connection.play('car.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("strazile") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('umor.mp3');
      dispatcher.on('start', () => {
        console.log('guniuoi rauuud')
      });
      message.reply("guniuoi rauuud bigl rupt sudat straz prericolos pletsosuuu");
      connection.play('umor.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("man ual") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('man.mp3');
      dispatcher.on('start', () => {
        console.log('guniuoi rauuud')
      });
      message.reply("o dam bulghareascha daca e sa fie frazicule aiaziiiiiic");
      connection.play('man.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
    }
  }
  if (command.includes("kazak") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('kazak.mp3');
      dispatcher.on('start', () => {
        console.log('guniuoi rauuud')
      });
      message.reply(":thumbsup: Kazakhstan ogrozhayet nam bombarderofky nemearrape1 :thumbsup:");
      connection.play('kazak.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("mem nem") == true && message.member.voice.channel) {
    try {
      const dispatcher = connection.play('mem.mp3');
      dispatcher.on('start', () => {
        console.log('guniuoi rauuud')
      });
      message.reply("tzigan haladit craiova vila 2mii euroi cu aragaz fund al");
      connection.play('mem.mp3', { volume: 2.0 });
      await dispatcher.on('finish', () => {
        if(message.guild.me.voice.channel !== undefined){
          message.guild.me.voice.channel.leave();
        }
        message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
        connection.dispatcher.end();
      });
    } catch (err) {
      message.channel.send('homosex!');
      throw err;
    }
  }
  if (command.includes("play") || command.includes("!p") == true) {
    message.reply('rithm uhm anyways draga eu ma duc sa manc cur my luv <3');
  }
  
  if (command.includes("help") == true) {
    message.reply(niggerEmbed);

  }

  dispatcher.on('finish', () => {
    if(message.guild.me.voice.channel !== undefined){
      message.guild.me.voice.channel.leave();
    }
    message.reply("curplula7dyslexclickmoertrimambulatnbiplarrauudSPITALMEWENTALCOVASNAszepNapotKivanokDoktorBacsi")
    connection.dispatcher.end();
  });

});
process.on('uncaughtException', function (err) {

  // Handle the error safely
  console.log(err)
})


client.login('ODE0MjY1MTY1ODE4MjMyOTAy.YDbVhw.V2oxNXP5GhHwh7FzGKLXZX1zFdI') //HARAM DO NOT SEE
