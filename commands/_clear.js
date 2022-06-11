/*CMD
  command: /clear
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1624329681") {
  Bot.setProperty("WithMode", "✅ Turned On", "string")
  Bot.setProperty("DepoMode", "✅ Turned On", "string")
} else {
  return
}

