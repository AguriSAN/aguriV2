const Discord = require("discord.js");
const bot = new Discord.Client();

bot.command = new Discord.Collection();

const prefix = "$"

bot.login("NjI3MDU4Mzc1ODAwMjU4NTgw.XY3IxA.ZWCDaIpQ_35ajkKs3BIg9KUs3Yw");

bot.on("ready", function(){

    bot.user.setActivity("$help");
    bot.user.setUsername("AguriV2");
    bot.user.setStatus("dnd");
});

bot.on('message', message => {
    if(message.content === prefix + "ping"){
        message.channel.send("Calcul ...").then(message =>{
            message.edit('Pong ! '+ Math.round(bot.ping) + 'ms')

        })
    }
});

bot.on('message', message => {
    if(message.content === prefix + "creeper"){
        message.channel.send("Awwww  man")
    }
});

bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.delete()
        message.channel.send("Voici la liste de mes commandes !").then(message => {
            message.edit("``` $ping, $creeper, $suggestion, $invite,```")
        })
    }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "suggestion")){
        var chann = message.guild.channels.find(chann => chann.name === 'suggestion')
        if(!chann){return message.channel.send('Je ne trouve pas le salon suggestion')}
        var sgt = message.content.substr(parseInt(prefix.length + 10))
        if(!sgt){return message.channel.send('Merci pour ta suggestion !')}
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Suggestion de : " + message.author.username)
        .addField("Contenue : ", sgt)
        .setTimestamp()
        chann.send(embed)
    }
});

bot.on('message', message => {
    if(message.content.startsWith(prefix + "invite")){
        message.channel.send("Voici mon serveur discord : https://discord.gg/MzwHtUc")
    }
});
