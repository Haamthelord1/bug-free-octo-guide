/*CMD
  command: fak
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var amount = User.getProperty("id")
var amountt = amount * 48
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var P = Bot.getProperty("Prof")
var H = Bot.getProperty("Accrual")
var H1 =
var key = Bot.getProperty("channel")
Api.sendMessage({
    chat_id: key,
    text:
      "*🚀 New Investment Received\n\n🤴🏻 Name :* " +
      "Syed Nabeel" +
      "\n*👤 User Id :* " +
      user.telegramid +
      "\n*💸 Amount :* " +
      amount +
      "\n\n⏱ " +
      P +
      "% *in* " +
      "24" +
      " *Hours\n\n✔ Expected Return after " +
     "120" +
      " Days :* " +
      amountt.toFixed(6) +
      " *TRX\n\n🆔 Transaction ID*\n" +
      "TLyyR2TkhTpcTXF4m587LLKNsx5xJJ2PEG,txid is 78f42280608844730dfb8db25477424633c0a105ae708f06b07467646ae04c7f" +
      "\n\n*🤖 Bot* @" +
      "tronangelBot" +
      "",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
