const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'g!';
const discord_token = "NDIyMDM3NzQwNTkxMzgyNTI4.DYV8zA.6vBJjF7Op9T_bH_YOwRMXqwh9vc";
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
	client.user.setGame(`g!v2 |Games Staton Arabic  `)
    client.user.setStatus("dnd")
});
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
