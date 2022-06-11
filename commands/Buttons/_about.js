/*CMD
  command: /about
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: about me📝, sobre mí📝
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
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
var key = Bot.getProperty("About")
//Bot.sendMessage("*" + key + "*")
Bot.sendMessage("*Dear * "+ info +"  🎉"+"*\n\n I am An Advanced Telegram Bot 📲\n\n•YOU CAN STAKE TRX IN @TronMateBot\n\n•TO GET 28.91% DAILY  FOR 100 DAYS.\n\n•STAKE TRON WITH US TO CLAIM REWARDS DAILY!!.\n\nPLEASE REFER TO FAQ FOR MORE INFO !. ✅\n\nInvest More Earn More 💸*")
Api.sendSticker({ sticker: "https://t.me/tronAngelpay/131" })
