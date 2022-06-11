/*CMD
  command: /setchan
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
📦 *Send Channel Username with @ :*

*Example * @Trxpayoutsnew
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.setProperty("channel", message, "params")
  Bot.sendMessage("*✅ Channel Has Been set to* " + message + "")
} else {
  return
}

