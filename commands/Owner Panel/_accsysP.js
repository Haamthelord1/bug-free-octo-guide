/*CMD
  command: /accsysP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send profit amount :*

*➡️ Example : 2*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = message
if (user.telegramid == "5163548809") {
  Bot.setProperty("Prof", message, "params")
  Bot.sendMessage("*✅ Profit Set to* " + message + "%")
} else {
  return
}

