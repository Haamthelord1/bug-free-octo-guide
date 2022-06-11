/*CMD
  command: /accsysD1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send Duration Time for Investment Accrual :*

*➡️ Example : 24*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.setProperty("Accrual1", message, "integer")
  Bot.sendMessage("*✅ Accural duration set to* " + message + " *🕞 Hours*")
} else {
  return
}

