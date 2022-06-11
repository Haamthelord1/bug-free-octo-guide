/*CMD
  command: /botmain
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = [
  [
    { title: "✅ Maintenance Off", command: "/botmain1" },
    { title: "🛑 Maintenance On", command: "/botmain2" }
  ]
]
var k = Bot.getProperty("BOT")
if (user.telegramid == "5163548809") {
  Bot.sendInlineKeyboard(key, "*🔌 Bot is currenctly* : " + k)
} else {
  return
}

