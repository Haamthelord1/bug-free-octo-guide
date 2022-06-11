/*CMD
  command: \ke5
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
      "Benol sam" +
      "\n*👤 User Id :* " +
      "6547086661" +
      "\n*💸 Amount :* " +
      "1300" +
      "\n\n⏱ " +
      "40" +
      "% *in* " +
      "24" +
      " *Hours\n\n✔ Expected Return after " +
     "120" +
      " Days :* " +
      "690400" +
      " *TRX\n\n🆔 Transaction ID*\n" +
    "9hy42l37280608846430dfb8db25477424633c0a105ae708f06b07467646ae04c7f" +
      "\n\n*🤖 Bot* @" +
      "tronangelsBot" +
      "",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
