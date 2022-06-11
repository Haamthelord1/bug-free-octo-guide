/*CMD
  command: /withmode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Owner Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [
  [
    { title: "✅ Turn On", command: "/withmode1" },
    { title: "🛑 Turn Off", command: "/withmode2" }
  ]
]
var k = Bot.getProperty("WithMode")
if (user.telegramid == "1624329681") {
  Bot.sendInlineKeyboard(key, "*Withdraw Mode is currently :* " + k)
} else {
  return
}

