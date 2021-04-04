/*CMD
  command: /joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
   Bot.sendInlineKeyboard([{title: "Continue" , command: "/chnnl" }], "Join Our [Official Channel](t.me/PROtokensChannel) And Click Button Bellow To Continue");
}else{
   Bot.sendMessage("You are NOT chanell member! Please Join Our [Telegram Groub](t.me/protokens) And [Telegram Channel](t.me/protokenschannel)");
}
