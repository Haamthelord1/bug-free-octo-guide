/*CMD
  command: /Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💼 balance, 💼 saldo
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
  var deposit = Libs.ResourcesLib.userRes("deposit")
  var res = Libs.ResourcesLib.userRes("balance")
  var profit = Libs.ResourcesLib.userRes("profit")
  var refcom = Libs.ResourcesLib.userRes("refcom")
  var withdraw = Libs.ResourcesLib.userRes("withdraw")

  Bot.sendMessage(
    "*👤 Account Balance :\n\n➖ Withdrawable Balance :*\n" +
      res.value().toFixed(6) +
      " *TRX\n\n💳 Active Investments :* \n" +
      deposit.value().toFixed(6) +
      " *TRX\n\n💰 Total Profit :* \n" +
      profit.value().toFixed(6) +
      " *TRX\n\n🎁 Total Affiliate Bonus :*\n" +
      refcom.value().toFixed(6) +
      " *TRX\n\n💸 Total Withdrawn :*\n" +
      withdraw.value().toFixed(6) +
      " *TRX*"
  )
