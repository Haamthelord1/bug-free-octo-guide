/*CMD
  command: /Wall
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 💼 wallet, 💼 cartera
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
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼 Set / Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is :*\n`Not Set`\n\n*💹 It will be used for all future withdrawals.*"
  )
} else {
  var button = [[{ title: "💼 Change Wallet(💼 Cambiar billetera)", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set TRX wallet is : \n💡 Su billetera TRX configurada actualmente es: * \n " +
      "`" +
      wallet +
      "`" +
      "\n\n*💹 It will be used for all future withdrawals.\n💹 Se utilizará para todos los retiros futuros.*"
  )
}

