/*CMD
  command: \ke
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send amount

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = User.setProperty("Id", msg, "integer")
var amount = User.getProperty("id")
var amountt = amount * 48
Api.sendMessage({
  chat_id: "@TronMatePays",
  text : "*👑 New Deposit Received\n\n🤴🏻 By Investor: Bernian \n👤 User Id : 2158621583\n💸 Amount : 5752 TRX♦️\n\n⏱ 28.91% in 24 Hours\n\n✔ Expected Return after 100 Days : 166808.000 TRX♦️\n\n🆔 Transaction ID\pak747b5179e2643f08a6dry26b06aae3f7a62u2g2ftq6dd3197a865e643\n\n🤖 Bot @TronMateBot*", parse_mode: "Markdown"
  })
