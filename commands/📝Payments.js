/*CMD
  command: 📝Payments
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📑 actas, 📉 centro de pago
CMD*/

var btn = [[{ title: "⚡CHECK CHANNEL NOW ⚡", url: "t.me/TronMateData" }]]
var msg = "*Check All Live Transactions By clicking Button(Verifique todas las transacciones en vivo haciendo clic en el botón)*"
Bot.sendInlineKeyboard(btn,msg)
