/*CMD
  command: /wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👛wallet, 👛monedero
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
Bot.sendMessage(
  "*Send now your TRX Address to use it in future withdrawals.✅*\n\n🔹️*For Example : \"TH9hBHS1VnxeDbD4gwskm7yj7bZ4x6PefF\"*"
)
Bot.runCommand("wallet")

