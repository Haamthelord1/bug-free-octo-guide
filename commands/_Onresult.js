/*CMD
  command: /Onresult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var status = options.result.status

var isJoined =
  status == "member" || status == "administrator" || status == "creator"
if (isJoined) { Bot.runCommand("/lang")
} else {
 
  var key = Bot.getProperty("channel")
  Bot.sendKeyboard(
    "✅ Joined",
    "*💡 You Must Join Our Channel* " + key + " *Before Starting Using This Bot*"
  )
}

