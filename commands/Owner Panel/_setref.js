/*CMD
  command: /setref
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send the percentage digit for referral commision based on deposit amount :*

➡️ Example : 5
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.setProperty("refcomi", message, "params")
  Bot.sendMessage("*✅ Referral Comission Set to* " + message + "%")
} else {
  return
}

