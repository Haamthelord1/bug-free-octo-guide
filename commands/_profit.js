/*CMD
  command: /profit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Id to change profit. 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  var msg = message
  User.setProperty("Id", msg, "integer")
  Bot.runCommand("/changeprof")
} else {
  return
}

