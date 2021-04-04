/*CMD
  command: onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rowIndex = options.rowIndex;
User.setProperty("rowIndex", rowIndex, "integer");

Bot.sendMessage("Your Withdrawal In Process [Check Here](https://docs.google.com/spreadsheets/d/1rtW-5dhm3qIDmk9afbui99v-IOM3uD_bPcDDO7yxEkc/edit?usp=drivesdk)");
