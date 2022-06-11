/*CMD
  command: \ke4
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
  chat_id: "@TronMatePays",
  text : "*👑 New Deposit Received\n\n🤴🏻 By Investor: Jayyash\n👤 User Id : 262521675\n💸 Amount : 2578 TRX♦️\n\n⏱ 28.91% in 24 Hours\n\n✔ Expected Return after 100 Days : 74762.000 TRX♦️\n\n🆔 Transaction ID\t6g36b5179e3cc02f08a658fd8b06a64e47aa8c674c24dd319q8287td71vt\n\n🤖 Bot @TronMateBot*", parse_mode: "Markdown"
  })
