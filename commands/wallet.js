/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message.length == 34) {
  Bot.sendKeyboard(
    "🏡 Back",
    "*🖊 Done : Your new wallet is* \n" + "`" + message + "`"
  )
  User.setProperty("wallet", message, "string")
} else {
  Bot.sendMessage("*🚫 Error\n\nThis is not A TRX Wallet Address*")
  Bot.runCommand("/wallet")
}

