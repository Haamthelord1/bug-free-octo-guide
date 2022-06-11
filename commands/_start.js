/*CMD
  command: /start
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

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot*") 
  Bot.runCommand("li")} else { Bot.sendMessage("*♦️ Choose You Language ♦️\n♦️ Elige tu idioma ♦️*")
var stat = Bot.getProperty("" + user.telegramid + "")
var sb = User.getProperty("Sb")
if (sb == undefined){
User.setProperty("Sb", "Received", "string")
var ba = Libs.ResourcesLib.userRes("balance")
ba.add(8)
Bot.sendMessage("*8 TRX Added to Withdrawable Balance!🌞\nFantastic Earnings 🎉*")
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nBot is currently Under Maintenance\n\nWe will be back in a Few Hours, Thank you*"
  )
} else {
  Bot.runCommand("Sign")
  var key = Bot.getProperty("channel")
  var id = user.telegramid
  Api.getChatMember({
    chat_id: key,
    user_id: id,
    on_result: "/Onresult"
  })
  Bot.runCommand("/lang")
  //Api.sendSticker({ sticker: "https://t.me/Trxpayoutsnew/11" })
  var used = User.getProperty("used4")
  if (!used) {
    Bot.setProperty("gnoti4" + user.telegramid, "yes", "string")
    if (params && params != chat.chatid) {
      var u = params
      User.setProperty("Reffer", u, "integer")
      var inl = Bot.getProperty("gnoti4" + u)
      if (inl == "yes") {
        Api.sendMessage({
          chat_id: chat.chatid,
          text: "*🔥 Welcome to* @" + bot.name + " 🔥",
          parse_mode: "Markdown",
          disable_web_page_preview: true
        })
      }
        
      Bot.setProperty("rid" + user.telegramid, u, "integer")
      Bot.setProperty("hshxh", u, "integer")
      var up = Bot.getProperty("upinfo" + u)
      User.setProperty("up", up, "integer")

      var l1 = Libs.ResourcesLib.anotherUserRes("ref", u)
      l1.add(1)
      var inf =
        "[" +
        user.first_name +
        "]" +
        "(" +
        "tg://user?id=" +
        user.telegramid +
        ")"
      Bot.sendMessageToChatWithId(
        params,
        "*🎯 You have a new Referral :* " + inf
      )
    }
    User.setProperty("used4", true, "boolean")
  }
}
}else if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot*")
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nBot is currently Under Maintenance\n\nWe will be back in a Few Hours, Thank you*"
  )
} else {
  Bot.runCommand("Sign")
  var key = Bot.getProperty("channel")
  var id = user.telegramid
  Api.getChatMember({
    chat_id: key,
    user_id: id,
    on_result: "/Onresult"
  })
  Bot.runCommand("/lang")
  //Api.sendSticker({ sticker: "https://t.me/Trxpayoutsnew/11" })
  var used = User.getProperty("used4")
  if (!used) {
    Bot.setProperty("gnoti4" + user.telegramid, "yes", "string")

    if (params && params != chat.chatid) {
      var u = params
      User.setProperty("Reffer", u, "integer")
      var inl = Bot.getProperty("gnoti4" + u)
      if (inl == "yes") {
        Api.sendMessage({
          chat_id: chat.chatid,
          text: "*🔥 Welcome to* @" + bot.name + " 🔥",
          parse_mode: "Markdown",
          disable_web_page_preview: true
        })
      }
        
      Bot.setProperty("rid" + user.telegramid, u, "integer")
      Bot.setProperty("hshxh", u, "integer")
      var up = Bot.getProperty("upinfo" + u)
      User.setProperty("up", up, "integer")

      var l1 = Libs.ResourcesLib.anotherUserRes("ref", u)
      l1.add(1)
      var inf =
        "[" +
        user.first_name +
        "]" +
        "(" +
        "tg://user?id=" +
        user.telegramid +
        ")"
      Bot.sendMessageToChatWithId(
        params,
        "*🎯 You have a new Referral :* " + inf
      )
    }
    User.setProperty("used4", true, "boolean")
  }
}
var fullBotUsers = Bot.getProperty("wholeUsers",[])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}
}
