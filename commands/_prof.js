/*CMD
  command: /prof
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
