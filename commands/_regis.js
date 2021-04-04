/*CMD
  command: /regis
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid;
Api.getChatMember({
chat_id: "@PROtokens", user_id: id, on_result :"/joined"})
//Bot.sendMessage(inspect(options));
