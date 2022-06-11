/*CMD
  command: /With
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot(🚫 Error \ n \ nNo puede usar este bot)*")
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nBot is currently Under Maintenance\n\nWe will be back in a Few Hours, Thank you\n🚫 Error\n\nBot está actualmente en mantenimiento\n\nVolveremos en unas horas, gracias*"
  )
  return
}
var k = Bot.getProperty("WithMode")
if (k == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nWithdrawal is Currently Turned Off\n\nWe will be back in a Few Hours, Thank you\n🚫 Error\n \nLa retirada está actualmente desactivada\n\nVolveremos en unas horas, gracias*"
  )
  return
}
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Set/Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is :* `Not Set`\n\n*It will be used for all future withdrawals.\n💡 Su billetera TRX configurada actualmente es: * `No configurada` \n\n * Se utilizará para todos los retiros futuros.*"
  )
} else {
  Bot.runCommand("/trx")
}

