/*CMD
  command: /wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Submit Your Ethereum Address Erc20, Please Dont Use Ethereum Address From Any Exchange

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("wallet", message, "string");

Bot.runCommand("/account");
