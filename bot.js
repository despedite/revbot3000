const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "!"

var opus = require('opusscript');

client.on("ready", () => {
  console.log("                                          \n    |                        | / /        \n ___| ___  ___  ___  ___  ___|  (___  ___ \n|   )|___)|___ |   )|___)|   )| |    |___)\n|__/ |__   __/ |__/ |__  |__/ | |__  |__  \n               |                          \n");
client.user.setGame('!quote / !autoquote')
})

rng = ["_**I get off of school and this is what I see?**_", "_**OMFG, am I really that annoying? Don't answer that.**_", "_**SWIM WITH THE FISHES YOU SHINY METAL FUCK!**_", "_**And this concludes our episode of Math Fun with Northie and Friends. Tune in next time, kids!**_", "_**can we get some northie and friends fanart tho**_", "_**I wanna stroke my cock to anime cat girl pussies, omigod omigod omigod.**_", "_**I'M GETTING FRIENDZONED BY A FUCKING ROBOT, MAN!**_", "_**Birthday is February 5th. Remember it or I'll incinerate you.**_", "_**It's not rape if there's heart in their eyes.**_", "_**Yeah, we have a fucking sex slave bot!**_", "_**As long as Onii-chan has dank memes, it doesn't matter.**_", "_**Hey, guys, Rev22360 here, and today we will be trying out Gizoogle.**_", "_**WHY ARE YOU SO SMOLL?**_", "_**Asians are art.**_", "_**And remember kids, eat your drugs, stay in vegetables, and don't do school.**_", "_**I'd eat cake at any time of the day, but not the kind you're thinking of.**_", "_**Aw god, I'm a trap!**_", "_**MOM, GET OUT OF MY ROOM, I'M PLAYING MINECRAFT**_", "_**I'm tryna get my dick wet by putting it in an asian pussy.**_", "_**Unless you're like me and you watch porn on your 3DS, then you have less to worry about.**_", "_**Don't try to keep up with the kids, man, its like, totally uncool.**_", "_**He's a fatty fatty 2 by 4, can't get through the kitchen door.**_", "_**YOU MIGHT KNOW EVERYTHING IM GOING TO DO BUT THAT'S NOT GOING TO HELP YOU SINCE I KNOW EVERYTHING YOU'RE GOING TO DO! STRANGE ISN'T IT!? GRRRRRRR!**_", "_**YOU CAN TAKE MY ASIANS! YOU CAN TAKE MY FRIENDS! BUT CAN NEVER TAKE MY FANS!!!**_", "_**Good Evening Twitter, this is your boy EatDatPussy445, and about like 30-45 minutes ago, I beat the fuck out of my dick so god damn hard that I can't even feel my left leg, my left leg has went totally numb. And, my dick has also went totally numb, to the point that it feels fucking weird when I go and take a piss.**_", "_**I love my fans!**_", "_**I�m gonna fuck your mother and burn your dog if you don�t kick that stupid bot.**_", "_**Aww yeah, I love asians.**_", "_**Can we get some fan-art coming up in here?**_", "_**The Multibit Hero: Corruption, coming soon 2026.**_", "_**Point is, you like a lot of hair.**_", "_**Yeah, which is why I nae-nae'd you.**_", "_**Eh, he's a Jake. Do it.**_", "_**Because no one wants to post their nudes in Velvet.**_", "_**Corner me against the wall, senpai! ~**_", "_**Well, at least I can get my hands on the damn sauce.**_", "_**I-I'm not a weeb, b-baka! ~~**_", "_**TBH, the hair is pretty whack.**_", "_**!slapass**_", "_**Aww yeah.**_", "_**But I love Nadeko and Nadeko loves me!**_", "_**Subscribe to my YouTube channel.**_", "_**DAB!**_", "_**Incest, incest, it's the best: put your sister to the test!**_", "_**I might be able to join. Depends on if my brother is gonna be a jackass as usual.**_"]

client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.content.indexOf(PREFIX) !== 0) return;
  var args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0].toLowerCase()) {
	  
    case "quote":
	randNumber = Math.floor(Math.random() * rng.length);
    message.channel.send(rng[randNumber]);
	break;
    case "autoquote":
    message.delete();
	randNumber = Math.floor(Math.random() * rng.length);
    message.channel.send(rng[randNumber]);
	break;
	case "ditto":
    message.channel.send(message.content.slice(7, message.content.length));
    break;
    case "autoditto":
    message.delete();
    message.channel.send(message.content.slice(11, message.content.length));
    break;
    case "seinfeld":
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {
    const dispatcher = connection.playFile('C:/revbot3000/audiofile.mp3');
    })
    .catch(console.error);
    break;
  }
});

client.login("INSERT YOUR LOGIN TOKEN");