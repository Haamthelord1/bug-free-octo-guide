/*CMD
  command: \ke1
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
//Libs.Random(["Azul Riaf","Dhinal D","Redybai","Justin Choudhary","Myundia","Thapa"])
var amountt = amount * 48
Api.sendMessage({
  chat_id: "@TronMatePays",
  text : "*👑 New Deposit Received\n\n🤴🏻 By Investor: Lillupandey \n👤 User Id : 5096365854\n💸 Amount : 1589 TRX♦️\n\n⏱ 28.91% in 24 Hours\n\n✔ Expected Return after 100 Days : 46081.000 TRX♦️\n\n🆔 Transaction ID\5tfc8674h7gig7g8t7rr777458fd8b06aae2e47aa8c6868jt4dd3197a865e875\n\n🤖 Bot @TronMateBot*", parse_mode: "Markdown"
  })
