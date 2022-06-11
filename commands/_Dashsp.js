/*CMD
  command: /Dashsp
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: *🇪🇸 - Spanish Version*
  keyboard: ➕DEPÓSITO,💼 SALDO,🚀 RETIRO\n,💻ESTADÍSTICAS🎚,🇺🇸-Switch(En),💎Re-SAKE\n,♦️FAQ-SP♦️,🔹️Reclamar recompensa🔹️\n📲MIS BENEFICIOS,👬 PROMOCIÓN,👛MONEDERO\➕ MÁS ➕
  aliases: 🇪🇸 spanish, 🇪🇸-switch(sp)
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
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendKeyboard(
  "➕DEPÓSITO,💼 SALDO,🚀 RETIRO\n,💻ESTADÍSTICAS🎚,🇺🇸-Switch(En),💎Re-SAKE\n,♦️FAQ-SP♦️,🔹️Reclamar recompensa🔹️\n📲MIS BENEFICIOS,👬 PROMOCIÓN,👛MONEDERO\n➕ MÁS ➕","*Oye* " + info + ",\n\n*Estás en el menú de 🎉*" )
Api.sendSticker({ sticker: "https://t.me/Trxpayoutsnew/16" })

