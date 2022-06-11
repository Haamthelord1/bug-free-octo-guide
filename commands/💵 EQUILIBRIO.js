/*CMD
  command: 💵 EQUILIBRIO
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error \ n \ nNo puede usar este bot*")
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error \ n \ nBot está actualmente en mantenimiento \ n \ nVolveremos en unas horas, gracias*"
  )
  return
}
var deposit = Libs.ResourcesLib.userRes("deposit")
  var res = Libs.ResourcesLib.userRes("balance")
  var profit = Libs.ResourcesLib.userRes("profit")
  var refcom = Libs.ResourcesLib.userRes("refcom")
  var withdraw = Libs.ResourcesLib.userRes("withdraw")

  Bot.sendMessage(
    "*👤 SALDO DE LA CUENTA :\n\n➖ Saldo extraíble :*\n" +
      res.value().toFixed(6) +
      " *TRX\n\n💳 Inversiones activas :* \n" +
      deposit.value().toFixed(6) +
      " *TRX\n\n💰 Beneficio total :* \n" +
      profit.value().toFixed(6) +
      " *TRX\n\n🎁 Bono de afiliado total :*\n" +
      refcom.value().toFixed(6) +
      " *TRX\n\n💸 Total retirado :*\n" +
      withdraw.value().toFixed(6) +
      " *TRX*"
  )
