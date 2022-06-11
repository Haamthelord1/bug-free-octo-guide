/*CMD
  command: /changebal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel
  answer: *Send The Id of the User you want to edit their Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  var msg = message
  User.setProperty("Id", msg, "integer")
  Bot.runCommand("/changebal1")
} else {
  return
}

