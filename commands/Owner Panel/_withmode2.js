/*CMD
  command: /withmode2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Owner Panel
  answer: 
  keyboard: 
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
if (user.telegramid == "1624329681") {
  Bot.setProperty("WithMode", "🛑 Turned OFF", "string")
  Bot.runCommand("/withmode")
} else {
  return
}
