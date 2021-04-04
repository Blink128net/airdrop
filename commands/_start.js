/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 🔝 Main menu
  keyboard: 📝 Task
  aliases: 
CMD*/

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Hello @" + user.Username + " Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have New Referral: @" + user.username  + Libs.ResourcesLib.anotherUserRes("reff", refUser.telegramid).add(100)
) }

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

Libs.GoogleSpreadSheet.setUrl("https://script.google.com/macros/s/AKfycbyqVof_O5F-7eZtPrvbI8K-ZFPJLcd52LTXHUgxgSMuliT1jQ/exec");
