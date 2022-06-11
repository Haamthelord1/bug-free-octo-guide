/*CMD
  command: /editab
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel
  answer: *Send a Message you want to put in the 📨 About Command*
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1624329681") {
  Bot.setProperty("About", message, "string")
  Bot.sendMessage("*Message on 📨 About Command is Edited Successfully*")
} else {
  return
}

