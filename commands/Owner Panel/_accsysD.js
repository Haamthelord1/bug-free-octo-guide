/*CMD
  command: /accsysD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send Duration Time for Investment Accrual :*

*➡️ Example : 100*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.setProperty("Accrual", message, "integer")
  Bot.sendMessage("*✅ Accural duration set to* " + message + " *🕞 Days*")
} else {
  return
}

