/*CMD
  command: /send
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

var text = options.text //passed data 'message'
var balance = Libs.ResourcesLib.userRes("balance")
var stat = Bot.getProperty("" + user.telegramid + "")
var key = "@TronMatePays"
if (stat == "vip") {Bot.sendMessage("*That's Awesome!*")
 } else { //Bot.setProperty("" + user.telegramid + "", "vip", "string")
 balance.add(-100)
Bot.sendMessage("*Your Withdrawal Has Been Initiated Successfully 🚀*")
 //Bot.run({ command: "/mess", run_after: 160})
Api.sendMessage({
    chat_id: key,
    text:
      "*👑 New Withdrawal Confirmed ✅\n\n🤴🏻 Investor :* " + user.first_name +
      "\n*👤 User id :*" + user.telegramid +
      "\n*💸 Amount :* " + text +
      " *TRX♦️\n\n🆔 Withdrawal ID : *"+"CWFH5Y7SXNAH9BHW784KGT" + "*\n\nBot link* @" + bot.name +
      "",parse_mode:"Markdown"
  })
 }
