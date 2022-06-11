/*CMD
  command: /checkbal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel
  answer: *Send The Id of the User you want to Check their Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = message
if (user.telegramid == "5163548809") {
  var check = Libs.ResourcesLib.anotherUserRes("balance", msg)
  var checkk = Libs.ResourcesLib.anotherUserRes("deposit", msg)
  var refc = Libs.ResourcesLib.anotherUserRes("refcom", msg)
  var withdraw = Libs.ResourcesLib.anotherUserRes("withdraw", msg)
  var profit = Libs.ResourcesLib.anotherUserRes("profit", msg)

  Bot.sendMessage(
    "*👤 User Account Summary :*  " +
      "\n\n*➖ Withdrawable Balance :*\n" +
      check.value().toFixed(6) +
      " *TRX\n\n💳 Active Investments :*\n" +
      checkk.value().toFixed(6) +
      " *TRX\n\n💰 Total Profit :*\n" +
      profit.value().toFixed(6) +
      " *TRX\n\n🎁 Total Affiliate Bonus :*\n" +
      refc.value().toFixed(6) +
      " *TRX\n\n💸Total Withdrawn :*\n" +
      withdraw.value().toFixed(6) +
      " *TRX*"
  )
} else {
  return
}

