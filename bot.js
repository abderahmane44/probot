const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"; // ضع البريفكس الخاص بك هنا



console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'Help')) { 
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa: 
1༺༻  id  | Shows User ID༺༻
2༺༻  info | Shows User Info༺༻
3༺༻  server | Shows Server Info༺༻
4༺༻  ping | Shows Bot Ping༺༻
5༺༻  uptime | Shows Bot Time༺༻
6༺༻  invite | Shows Bot Invite Link༺༻
7༺༻  patato | Shows Bot Info༺༻
8༺༻  avatar | Shows User Avatar༺༻
9༺༻  savatar | Shows Server Avatar༺༻
10༺༻  mcskin  | Shows Minecraft Players Skin༺༻
11༺༻  say  | Repeat What Your Saying༺༻
12༺༻  makerole  | Make Server Roles༺༻
13༺༻  makeroom  | Make Server Roles༺༻
14༺༻  gif  | Gives You Gif ༺༻
15༺༻  moveall  | Move All Members To Your Channel༺༻
16༺༻  nick  | Nick Members༺༻
17༺༻  hack  | Hack Game༺༻
18༺༻  type  | Shows Bot is Typeing༺༻
19༺༻  stype  | Stops The Bot From Typeing༺༻
20༺༻  tag  | Give You Custom Words༺༻
21༺༻  redo  | Redoing Whats You Saying༺༻
22༺༻  2mv  | Makeing Channel For 2m༺༻
23༺༻  em  | Makeing Your Words In Embed༺༻
24༺༻  credits  | Shows Your Credits༺༻
25༺༻  daily  | You Can Get 250 Credits Everyday༺༻
26༺༻  rep  | Gives to the user REP༺༻
27༺༻  profile  | Shows User Profile༺༻
28༺༻  title  | Shows User title༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
1༺༻  $clear | Clear The Chat༺༻
2༺༻  $bc | Msg Everyone In The Server༺༻
3༺༻  $kick | Kick With Reson༺༻
4༺༻  $ban | Ban With Reason༺༻
5༺༻ Make Room Called log For Logs༺༻
5༺༻ Make Room Called report For reports༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
1༺༻  There is Commands Just For NotGucci | Bot By:NotGucci༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

client.on('message' , message => {
    var prefix = '-';
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
 
    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()
 
 
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoinedDiscord : ${moment(heg.createdTimestamp).fromNow()}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Server Info :', `LastMessage : ${messag}\nJoined :  ${moment(h.joinedAt).fromNow()} \n Invites :  ${inviteCount} Invite(s) \nRoles : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('#36393e')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
 })
}
 });
































client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




const gamestats = [`-Bc `,`Golden Shop`,`Golden Bc`]
var index = 0
var timer = 10 // الوقت بالثواني لتغير الستريمنق
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ACMBOT') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});


















































client.login(process.env.TOKEN); 
