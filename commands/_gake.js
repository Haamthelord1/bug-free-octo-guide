/*CMD
  command: /gake
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

var msg = User.setProperty("Id", msg, "integer")
var amount = User.getProperty("id")
var amountt = amount * 48
Api.sendMessage({
    chat_id: "@TronAngelpay",
    text:
      "*🚀 New Investment Received\n\n🤴🏻 Name :* " +
      "Hannah" +
      "\n*👤 User Id :* " +
      "5184602454" +
      "\n*💸 Amount :* " +
      "400" +
      "\n\n⏱ " +
      "40" +
      "% *in* " +
      "24" +
      " *Hours\n\n✔ Expected Return after " +
     "120" +
      " Days :* " +
      "4800" +
      " *TRX\n\n🆔 Transaction ID*\n" +
  "7868f422460608844730dfb8db75477424633c0a105ae708f06b07467646ae04c7f" +
      "\n\n*🤖 Bot* @" +
      "tronangelsBot" +
      "",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
