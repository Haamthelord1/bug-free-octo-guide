/*CMD
  command: /historyW
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🗓 withdrawals history
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
var his = User.getProperty("historyW")
if (his == undefined) {
  Bot.sendMessage(
    "*Aw-Snap! Sorry 😦\n\nNo Withdrawals Found\n\nStart Withdrawing now by clicking the ➖ WITHDRAW button at your Dashboard*"
  )
} else {
  Bot.sendMessage("\n" + his)
}

