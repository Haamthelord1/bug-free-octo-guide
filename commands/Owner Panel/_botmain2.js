/*CMD
  command: /botmain2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
if (user.telegramid == "5163548809") {
  Bot.setProperty("BOT", "🛑 Turned OFF", "string")
  Bot.runCommand("/botmain")
} else {
  return
}

