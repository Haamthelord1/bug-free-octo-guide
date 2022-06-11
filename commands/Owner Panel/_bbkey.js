/*CMD
  command: /bbkey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send your new Bots Business Api Key :*

*⚠️ Attention :*
*Don't give your Api Keys to Anyone*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.sendMessage(
    "*✅ Done : Your New Bots Business Api Key is*\n" + "`" + message + "`"
  )
  Bot.setProperty("Bbkey", message, "string")
  Bot.runCommand("/ser56")
} else {
  return
}

