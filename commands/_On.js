/*CMD
  command: /On
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var M = Bot.getProperty("Mindepo")
var P = Bot.getProperty("Profit")
var H = Bot.getProperty("Hours")
var wallet = options.result.address
var depot =
  "➕ Welcome! Here you can start a new investment!\n\n💵 We offer up to 1 different Investment Plan, choose the best for you!\n\n1️⃣ From " +
  M +
  " TRX to 100 TRX\n" +
  P +
  "% daily for " +
  H +
  " Hours\n" +
  P +
  ".00% every " +
  H +
  " Hours*\n *Paid on Every " +
  H +
  " Hours*"
Bot.sendMessage(depot)
Bot.sendMessage(
  "⚠️ _If you send less than " +
    M +
    ".000000 TRX, your deposit will be ignored!_\n\n✅ Send the amount you want to invest to the following address :"
)
Bot.sendMessage("`" + wallet + "`")
User.setProperty("depowall", wallet, "string")

