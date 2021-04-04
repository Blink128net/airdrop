/*CMD
  command: /chnnl
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
chat_id: "@PROtokenschannel", user_id: id, on_result :"/joinedd"})
//Bot.sendMessage(inspect(options));
