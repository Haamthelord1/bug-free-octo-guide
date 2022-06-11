/*CMD
  command: /depomode
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
    { title: "✅ Turn On", command: "/depomode1" },
    { title: "🛑 Turn Off", command: "/depomode2" }
  ]
]
var k = Bot.getProperty("DepoMode")
if (user.telegramid == "1624329681") {
  Bot.sendInlineKeyboard(key, "*Investment Mode is currently :* " + k)
} else {
  return
}

