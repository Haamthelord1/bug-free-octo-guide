/*CMD
  command: /oninf
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
  var data = options.body.result
  var value
  var msg = "*Available Balance :*"
  for (var ind in data) {
    value = data[ind].balancef
    msg += "\n" + value + " " + ind
  }
  Bot.sendMessage(msg)
} else {
  return
}

