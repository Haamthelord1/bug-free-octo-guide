/*CMD
  command: /trx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🚀 retiro, 🚀 withdraw
CMD*/

var res = Libs.ResourcesLib.userRes("balance")
if (res.value() < 100) {
  Bot.sendMessage("*🚫 Error\n\nYou need atleast 100 TRX to Withdraw\n🚫 Error\n\nNecesita al menos  100 TRX para retirarse*")
} else {
  Bot.sendKeyboard(
    "🏡 Back",
    "*💸Enter The Amount  you want to withdraw.\n\nMinimum : 100  TRX\nMaximum : "+
      res.value().toFixed(6) +"  (Your Balance)\n" +
     // res.value().toFixed(6) +
      "\n\n*"
  )
  Bot.runCommand("/withtrx")
}

