/*CMD
  command: /stats
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💻estadísticas🎚, 💻stats🎚
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot*")
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nBot is currently Under Maintenance\n\nWe will be back in a Few Hours, Thank you*"
  )
  return
}
var TRX = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage(
  "👑 Total Investors : " +"873786 "+
    //tota.value()*100670 +
    "🟩\n\n🏦Total Deposits : " + "1798624 " + //depo.value()*2783457 +
    " TRX 🟥\n\n🚀 Total Withdrawals :  " +"68923456 " +//TRX.value()*22663 +
    " TRX 🟦"
)
Api.sendSticker({sticker: "https://t.me/photo_bin/10"})

