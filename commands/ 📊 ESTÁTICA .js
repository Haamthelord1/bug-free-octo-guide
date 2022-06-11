/*CMD
  command:  📊 ESTÁTICA 
  help: 
  need_reply: false
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
var TRX = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage(
  "👤 Inversoras totales : " +
    tota.value()*100670 +
    "\n\n➕ Depósitos totales : " + depo.value()*282783457 +
    " TRX\n\n➖ Retiros totales : " +
    TRX.value().toFixed(6)*386479102 +
    " TRX "
)

