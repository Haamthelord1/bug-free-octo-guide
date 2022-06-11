/*CMD
  command: Owner
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
      { title: "🔄 Change Balance", command: "/changebal" },
      { title: "🎙 Broadcast", command: "/broadcast" }
    ],
    [{ title: "💰 Check User Balance", command: "/checkbal" }],
    [{ title: "🔮 Coinpayments", command: "/payments" }],
    [
      { title: "❌ Ban User", command: "/banU" },
      { title: "✅ Unban User", command: "/unbanU" }
    ],
    [
      { title: "🚧 Set Channel", command: "/setchan" },
      { title: "👥 Set Ref Com", command: "/setref" }
    ],
    [
      { title: "📤 Withdraw Mode", command: "/withmode" },
      { title: "📥 Deposit Mode", command: "/depomode" }
    ],
    [
      { title: "⚙ Accural System", command: "/accsys" },
      { title: "📥 Minimum Deposit", command: "/mindepos" }
    ],
    [{ title: "🤖 Bot Maintenance", command: "/botmain" }],
    [{ title: "📨 Edit About", command: "/editab" }]
  ]
  Bot.sendInlineKeyboard(
    key,
    "*Hello Owner\n\nHere, You can edit the functions of this Bot*"
  )
} else {
  return
}

