/*CMD
  command: \ke2
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
  chat_id: "@TronMateData",
  text : "*👑 New Deposit Received\n\n🤴🏻 By Investor: Vvasundra\n👤 User Id : 5158621683\n💸 Amount : 1091 TRX♦️\n\n⏱ 28.91% in 24 Hours\n\n✔ Expected Return after 100 Days : 31639.100 TRX♦️\n\n🆔 Transaction ID\nbfc747b5179e3cc02f08a6e58fd8b06aae2e47aa8c688cc24dd3197a865e9504\n\n🤖 Bot @TronMateBot*", parse_mode: "Markdown"
  })
