/*CMD
  command: /Invest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deposit@tronmatebot, ➕ deposit, 🐶depósito, ➕depósito, ➕ deposit
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot\n\n🚫 Error\n\nNo puede usar este bot*")
  return
}
var k = Bot.getProperty("DepoMode")
if (k == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nInvesting is Currently Turned Off\n\nWe will be back in a Few Hours, Thank you\n\n🚫 Error\n\nBot está actualmente en mantenimiento\n\nVolveremos en unas horas, gracias*"
  )
  return
}
var inve = Bot.getProperty("INVEST")
if (inve == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nInvestment is currently Turned Off\n\nIt will be Turn On after a Few Minutes or Hours, Thank you*"
  )
  return
} else {
 Bot.run({
    command: "refh",
    run_after: 60 * 10,
  })
var depr = User.getProperty("depr")
var wallset = User.getProperty("wallset")
if (wallset == undefined) {
  Bot.sendMessage("🤚Please Be Patient 😊.\n\n▪️We Are Generating Your Unique Deposit Address!...")
  Bot.runCommand("eta")
} else {
 var wallset = User.getProperty("wallset")
var rs = Libs.ResourcesLib.userRes("balance");
var cbal = User.getProperty("cbal")
var hi =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var cbal2
if (cbal < 0.000001) {
  cbal2 = cbal
} else {
  cbal2 = "0.000000"
}
var deposit = Libs.ResourcesLib.userRes("deposit")
var M = 10
var ty = [{ title: "♻️ Refresh", command: "refresh" }]
//Bot.sendMessage("*\n🔸️Te devolveremos tu inversión\n como 290% 🚀\n\n🔸️Withdraw 28.91% Daily For 100 Days \n\n🔸️The Total Return Is 290% For 100 Days 🚀*")
Bot.sendMessage(
      "*⚠️ _If you send less than(⚠️ _Si envía menos de) *" +
        M +
        ".000000 *TRX♦️, your deposit will be ignored!\n\n✅ Send the amount you want to invest to the following address(¡su depósito será ignorado!\n\n✅ Envíe la cantidad que desea invertir a la siguiente dirección) :*"
    )
    var M = 10
  var P = Bot.getProperty("Prof")
  var H = Bot.getProperty("Accrual")
  var H1 = Bot.getProperty("Accrual1")
  var depo = User.getProperty("depowall")
  var depot =
    "*▪️Sent Any Amount From* "+
    M +
    " *TRX♦️ to 10000 TRX♦️"+"\n▪️Envió cualquier cantidad de "+"10"+ " TRX♦️"+ " a " + "10000 "+"TRX♦️\n\n▪️Total Profit Is "  +
    P +
    "% daily for(diariamente para) " +
    H +
    " Days(días)\n\n▪️You Can Withdraw : " +
    P +
    ".00% every(cada) " +
    H1 +
    " Hours(Horas)*"
    Bot.sendMessage(depot)
Bot.sendMessage(
  " `" +
    wallset +
    "`\n\n*Tap To Copy 👆*\n\n*💳 Active Investments : *" +
      deposit.value().toFixed(6) +
      " *TRX*"+"\n\n*Please Note: It May Take Upto 10-20 Minutes*"+" ( __Usually 5 Minutes__ ) "+"*\nFor Your Deposits To Be Reflected In Your Investments. \n\nUse /Refresh To Re-Confirm Any Pending (*"+" Or "+"*) Uncomfirmed Deposits*"
)
Bot.run({
    command: "refh",
    run_after: 60 * 2,
  })
}
}

