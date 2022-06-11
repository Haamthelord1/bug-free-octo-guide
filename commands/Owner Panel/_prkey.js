/*CMD
  command: /prkey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send your new Private Key :*

*⚠️ Attention :*
*Don't give your Api Keys to Anyone*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.sendMessage("*✅ Done : Your New Private Key is*\n" + "`" + message + "`")
  Bot.setProperty("Prkey", message, "string")
  Bot.runCommand("/ser56")
} else {
  return
}

