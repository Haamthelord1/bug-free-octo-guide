/*CMD
  command: /pukey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send your new Public Key :*

*⚠️ Attention :*
*Don't give your Api Keys to Anyone*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.sendMessage("*✅ Done : Your New Public Key is*\n" + "`" + message + "`")
  Bot.setProperty("Pukey", message, "string")
  Bot.runCommand("/ser56")
} else {
  return
}

