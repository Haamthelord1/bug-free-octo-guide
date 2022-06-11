/*CMD
  command: /onSuccess
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var result = options.body.result
var amo = User.getProperty("Amo")
var error = options.body.error
var wallet = User.getProperty("wallet")
var key = Bot.getProperty("channel")
var history = User.getProperty("historyW")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"

if (error == "ok") {
  Bot.sendKeyboard(
    "🏡 Back",
    "*❄ Withdrawal Paid\n\n🔰 The owner Automatically Paid your withdrawal\n\n💸 Amount :* " +
      amo +
      " *TRX♦️\n💼 Wallet :* " +
      "`" +
      wallet +
      "`" +
      "\n\n*🆔 Withdrawal ID :* " +
      result.id +
      "\n\n*🔥 Check Other Transactions :* " +
      key +
      ""
  )

  Bot.sendMessage(
    "*🔊 Due to Heavy Traffic in Blockchain, Sending of Payments will take longer than before, so please be patient, Thank you🔊\n\n⚠ Note : Some Payments may take upto 15 Minutes - 2 Hours*"
  )

  if (history == undefined) {
    var newh =
      "🔹 Withdrawn Amount : " + amo + " TRX\n📆 DATE : " + time + "\n\n"
    User.setProperty("historyW", newh, "string")
  } else {
    var nwh =
      "🔹 Withdrawn Amount : " + amo + " TRX\n📆 DATE : " + time + "\n\n"
    var toal = nwh + history
    User.setProperty("historyW", toal, "string")
  }

  Api.sendMessage({
    chat_id: key,
    text:
      "*👑 New Withdrawal Confirmed ✅\n\n🤴🏻 Investor :* " +
      user.first_name +
      "\n*👤 User Id :* " +
      user.telegramid +
      "\n*💸 Amount :* " +
      amo +
      " *TRX♦️\n\n🆔 Withdrawal ID :* " +
      result.id +
      "\n\n*🤖 Bot link* @" +
      bot.name +
      "",parse_mode:"Markdown"
  })

  User.setProperty("WithdrawTime", Date.now(), "integer")
} else {
  Bot.sendKeyboard(
    "🏡 Back",
    "*🚀 Withdrawal Paid\n\n🔰 The owner Automatically Paid your withdrawal\n\n💸 Amount :* " +
      amo +
      " *TRX♦️\n💼 Wallet :* " +
      "`" +
      wallet +
      "`" +
      "\n\n*🆔 Withdrawal ID :*\n`Processing`\n\n*🔥 Check Other Transactions :* " +
      key +
      ""
  )
  Bot.sendMessage(
    "*🔊 Due to Heavy Traffic in Blockchain, Sending of Payments will take longer than before, so please be patient, Thank you🔊\n\n⚠ Note : Some Payments may take upto 15 Minutes - 2 Hours*"
  )
  Bot.runCommand("/onError")
  Bot.run({ command: "/clear", run_after: 300 })
  User.setProperty("WithdrawTime", Date.now(), "integer")
}

