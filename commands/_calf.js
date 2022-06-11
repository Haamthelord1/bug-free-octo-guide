/*CMD
  command: /calf
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📲
  keyboard: 🏡 Back
  aliases: 
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
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  return
}
var amount = parseFloat(data.message)
var daily = amount * 0.2891
var profit = amount * 29
var M = Bot.getProperty("Mindepo")
var P = Bot.getProperty("Prof")
var H = Bot.getProperty("Accrual")
var H1 = Bot.getProperty("Accrual1")

if (amount < 10) {
  Bot.sendMessage("*🚫 Error\n\nMinimum Investment is\n🚫 Error\n\nLa inversión mínima es* " + M + " *TRX*")
  Bot.run({ command: "/calf", run_after: 2 })
} else {
  if (amount > 10000) {
    Bot.sendMessage("*🚫 Error\n\nMaximum Investment is* 10000 *TRX*\n🚫 Error\n\nLa inversión máxima es * 10000 *DOGE*")
    Bot.run({ command: "/calf", run_after: 2 })
  } else {
    if (amount >= 10 && amount <= 10000) {
      Bot.sendMessage(
        "*💸 Profit Calculator (Calculadora de ganancias) 💸\n\nYou Get* : " +
          P +
          "% *Daily for " +
          H +
          " Days(Dias)\n\n👑Your first 28.9% Can be claimed after( Su primera ganancia se acreditará después de )*" +
          H1 +
          " *Hours!_\n\n💰 After* " +
          H1 +
          " *Hours :* " +
          daily.toFixed(6) +
          " *TRX♦️\n_🚀 You will get back 290% more than what you invested after just ( Recibirá un 290% más de lo que invirtió después de solo )*" +
          H +
          " *Days_\n\n🔥 Total Profit after 100 Days:\nBeneficio total después de 100 días:* " +
          profit.toFixed(6) +
          " *TRX♦️*"
      )
    }
  }
}

