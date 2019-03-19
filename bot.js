const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"; // ضع البريفكس الخاص بك هنا



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

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit.') {
              message.channel.send('**RG l Y4R, your :credit_card: balance is ``$685560.``**');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit @RG l Y4R#8407 ') {
              message.channel.send('**RG l Y4R, your :credit_card: balance is ``$685560.``**');
               

            }
}); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit - M[à]rshm[è]llo#3336') {
              message.channel.send('**M[à]rshm[è]llo, your :credit_card: balance is ``$4784560.``**');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit.') {
              message.channel.send('**- M[à]rshm[è]llo your :credit_card: balance is ``$2683510.``**');
               

            }
}); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit ريما ❆#9840') {
              message.channel.send('**ريما ❆, your :credit_card: balance is ``$2683510.``**');
               

            }
}); 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '#credit.') {
              message.channel.send('**ريما ❆, your :credit_card: balance is ``$4784560.``**');
               

            }
}); 










client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+cb')){
 if(!message.author.id === '244888652004458497') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



















client.login(process.env.TOKEN); 
