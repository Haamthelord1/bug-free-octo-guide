/*CMD
  command: /history
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 📑transactions
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
Bot.sendKeyboard(
  "🗒 Investments History\n🗓 Withdrawals History\n🏡 Back",
  "*✔ You can see your Past Transactions by Clicking the buttons Below*"
)

