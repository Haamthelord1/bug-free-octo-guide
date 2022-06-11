/*CMD
  command: /accsys
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

if (user.telegramid == "5163548809") {
  var key = [
    [
      { title: "Investment Duration", command: "/accsysD" },
      { title: "Investment Duration 2", command: "/accsysD1" }
    ],
    [{ title: "Investment Profit", command: "/accsysP" }]
  ]
  Bot.sendInlineKeyboard(key, "*Select Option*")
} else {
  return
}

