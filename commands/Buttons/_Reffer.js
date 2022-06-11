/*CMD
  command: /Reffer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👬 promote, 👬 promoción
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
var lib = Libs.ReferralLib
var reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
var refcom = Libs.ResourcesLib.userRes("refcom")
var bot = "https://t.me/TronMateBot?start=" + user.telegramid
var TRX = 5 * refcom.value()
var lvl = Libs.ResourcesLib.userRes("ref")
var refcomi = Bot.getProperty("refcomi")
var msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{ title: "💌 Invested Referrals 🔥", command: "/list" }]]

Bot.sendMessage("*🎉 Promotion System\n\nLevel 1 :\n🥇 You get - "+refcomi+"%*")
Bot.sendMessage("*🔰Your Promotional Url:* " + "[" + bot + "]")
Bot.sendInlineKeyboard(
  key,
  "*🏦 Referral Stats\n\n1st Level :\n*" +
   lvl.value() +
    "* Investors\n\n🫂 Referral Deposits :\n*" +
    TRX.toFixed(6) +
    " *TRX\n\n💸Your Earnings :\n" +
    refcom.value().toFixed(6) +
    " TRX*"
)

