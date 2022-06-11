/*CMD
  command: /unbanU
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel
  answer: *Send The Id of the User you want to Unban*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  Bot.setProperty("" + message + "", "unban", "string")
  Bot.sendMessage(
    "*✅ User with an Id of* " + message + " *Has Been Unbanned Successfully*"
  )
} else {
  return
}

