/*CMD
  command: /mindepos
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*➡️ Send amount of Minimum Deposit in Bot :*

*➡️ Example : 100*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  let msg = message
  Bot.setProperty("Mindepo", msg, "integer")
  Bot.sendMessage("*✅ Minimum Deposit in Bot set to* " + message)
} else {
  return
}

