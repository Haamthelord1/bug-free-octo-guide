/*CMD
  command: /adminme
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

if (user.telegramid == 5163548809 ){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.sendMessage("You are now admin with " +user.telegramid+ " id")
}else{
return
Bot.sendMessage("oops! it seems we already have an admin")
}
