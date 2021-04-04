/*CMD
  command: /tw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Follow Our [Twitter](https://twitter.com/PropyInc) And Submit Your Twitter Profile Example: `https://twitter.com/Username`
  keyboard: 
  aliases: 
CMD*/

User.setProperty("tw", message, "string");

Bot.runCommand("/fb");

