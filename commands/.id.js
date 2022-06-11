/*CMD
  command: .id
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

if ( chat.telegramid == undefined){
var id = user.telegramid
Bot.sendMessage("`"+id+"`") }else{
var id = chat.telegramid
Bot.sendMessage("`"+id+"`") }
