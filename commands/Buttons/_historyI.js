/*CMD
  command: /historyI
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🗒 investments history
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
var his = User.getProperty("historyI")
if (his == undefined) {
  Bot.sendMessage(
    "*Uh-No! Sorry 🥲\n\nNo Investments Found\n\nStart Investing now by clicking the \" ➕ Deposit\" button at your Dashboard*"
  )
} else {
  Bot.sendMessage("\n" + his)
}

