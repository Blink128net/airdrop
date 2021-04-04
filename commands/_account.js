/*CMD
  command: /account
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💰 balance
CMD*/

let wallet = User.getProperty("wallet");
let ig = User.getProperty("ig");
let fb = User.getProperty("fb");
let tw = User.getProperty("tw");
let reff = Libs.ResourcesLib.userRes("reff")
let parther_link=Libs.ReferralLib.currentUser.getRefLink(bot.name);
Bot.sendMessage("Your Balance : 100 \nReferral Balance: " + reff.value() +
 "\n\nYour details: \n-------\nTwitter: " + tw + "\nFacebook: " + 
fb +"\nInstagram: " + ig + "\nWallet: " + wallet + "\n`All Referrals Will Be Checked for Duplicated Accounts Not Allowed, Please Read the Rules\n\nYour Ref Link`: " + parther_link) 

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total Users Invite: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
  }
}else{
  msg = "You Dont Have Referral";
}
Bot.sendMessage(msg);

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
 
Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have New Referral : @" + user.username
) }

Bot.sendKeyboard("💰 balance,💳 withdraw,\n ⬛️ social media", "🚀Main Menu" )
