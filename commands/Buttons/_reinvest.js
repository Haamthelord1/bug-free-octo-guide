/*CMD
  command: /reinvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons

  <<ANSWER
Sent Amount To Re-Invest
Monto enviado para reinvertir
  ANSWER
  keyboard: 100,1000\n🏡 Back
  aliases: 💎re-stake, 💎re-sake
CMD*/

User.setProperty("Amo", message, "string")
var amo = User.getProperty("Amo")
var key = Bot.getProperty("channel")
var balance = Libs.ResourcesLib.userRes("balance")
if (amo > balance.value()) {
  Bot.sendMessage(
    "*🚫 Error\n\n Available Balance to Re invest Is only\n\n🚫 Error \ n \ n El saldo disponible para reinvertir es solo* " +
      balance.value().toFixed(6) +
      " *TRX ♦️*"
  )
  return
}
if (amo >= 10 && amo <=10000) {
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var inv = Libs.ResourcesLib.userRes("AccrualAm")
inv.add(10)
var deposit = Libs.ResourcesLib.userRes("deposit")
deposit.add(+amo)
balance.add(-amo)
var deposit = Libs.ResourcesLib.userRes("deposit")
var res = Libs.ResourcesLib.userRes("balance")
var profit = Libs.ResourcesLib.userRes("profit")
User.setProperty("minertrx2", amo, "integer")
profit.add(+amo)
Bot.sendMessage("Re Investment Was Successful!(¡Re inversión fue exitosa!)")
Bot.sendMessage("*👤 Account Balance :\n\nWithdrawable Balance :*\n" + balance.value().toFixed(6) + " *TRX♦️\n\n💳 Active Investments :* \n" + deposit.value().toFixed(6) )
Api.sendMessage({
    chat_id: key,
    text:
      "*🎉 New Successful ReStake\n\n🚀 Investor :* " +
      user.first_name +
      "\n\n*👤 User Id :* " +
      user.telegramid +
      "\n\n*💰 Amount :* " +
      amo + " *TRX ♦️*" + "\n" +
      "\n\n*🤖 Bot link* @" +
      bot.name +
      "",parse_mode:"Markdown"
  })
Bot.run({
    command: "\message",
    run_after: 1 * 60 * 60 * 24,
    options: { amount: amo }
  }) } else { Bot.sendMessage("Enter A Numeric Value Only") }


