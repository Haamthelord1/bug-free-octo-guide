/*CMD
  command: /changeprof
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Profit amount

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  var amount = parseFloat(message)
  var tgid = User.getProperty("Id")
  var res = Libs.ResourcesLib.anotherUserRes("deposit", tgid)
  res.add(parseFloat(amount))
  Bot.sendMessage(
    "*Succesfully Change Balance* \n👤 User : " + tgid + "\n💰 Amount :" + amount
  )
} else {
  return
}

