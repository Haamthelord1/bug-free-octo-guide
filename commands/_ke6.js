/*CMD
  command: \ke6
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
      "Sunil" +
      "\n*👤 User Id :* " +
      "6427056541" +
      "\n*💸 Amount :* " +
      "1867" +
      "\n\n⏱ " +
      "40" +
      "% *in* " +
      "24" +
      " *Hours\n\n✔ Expected Return after " +
     "120" +
      " Days :* " +
      "708089" +
      " *TRX\n\n🆔 Transaction ID*\n" +
    "rt8t7tcr57280608844730dfb8dog8g7f477424633c0a105ae708f06b0746764pjugue04c7f" +
      "\n\n*🤖 Bot* @" +
      "tronangelsBot" +
      "",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
