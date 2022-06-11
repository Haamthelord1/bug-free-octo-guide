/*CMD
  command: /got
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel
  answer: *Send BB Email*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//if (user.telegramid == 1624329681 ) {

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("*The code of the bot sent to* "+message)
//}
