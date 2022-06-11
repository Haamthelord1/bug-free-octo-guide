/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER
*Send Your Message to Broadcast*

*Note : Broadcasting is Instant*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") { var fullBotUsers = Bot.getProperty("wholeUsers")
var usrname = "@" + user.username
Bot.sendMessage("Starting Broadcast....")
if (!user.username) {
  var usrname =
    "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
}
//STICKER broad
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "*🔰 TRON ANGEL INVESTMENTS 🔰*"
    })
    Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id })
  }
  return
}
//END
var promo = ""
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional"
  }
}
if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: "🔰 TRON ANGEL INVESTMENTS 🔰"
    })
    Api.sendAnimation({ chat_id: info, animation: request.animation.file_id })
  }
  return
}
if (message.length > 1000) {
  Bot.sendMessage("Message Too Big.")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text:"*🔰 TRON ANGEL INVESTMENTS 🔰 \n\n——————————————————————The Best Ever Tron Staking Platform\n\n" +message + "\n\nDaily 40 % Roi———————————————————————\n\nHappy Investments ! 😊*",
    parse_mode: "HTML"
  })
}
Bot.sendMessage("✅ Sent The Info.") } else { Bot.sendMessage("Sasi") }
