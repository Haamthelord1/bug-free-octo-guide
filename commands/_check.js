/*CMD
  command: /check
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

var use = user.telegramid
if( use == "5071337227"){ User.setProperty("vip","1","string") 
  Bot.sendMessage("Verified✅")} else { Bot.sendMessage("*Invalid User*") }
