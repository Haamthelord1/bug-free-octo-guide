/*CMD
  command: /payments
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
      { title: "🔐 Private Key", command: "/prkey" },
      { title: "🔒 Public Key", command: "/pukey" }
    ],
    [{ title: "🔱 BB Api Key", command: "/bbkey" }],
    [{ title: "🔰 Live Balance", command: "/FF" }]
  ]

  Bot.sendInlineKeyboard(
    key,
    "Hello Owner\n\nHere, You can manage your Coinpayment and Bots Business Api Keys"
  )
} else {
  return
}

