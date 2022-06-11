/*CMD
  command: /changebal1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send Amount you want to Add/Remove*

_Add Balance Example : 1_
_Remove Balance Example : -1_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  var amount = parseFloat(message)
  var tgid = User.getProperty("Id")
  var res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  res.add(parseFloat(amount))
  Bot.sendMessage(
    "*Succesfully Change Balance* \n👤 User : " + tgid + "\n💰 Amount :" + amount
  )
} else {
  return
}

