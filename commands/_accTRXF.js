/*CMD
  command: /accTRXF
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var inv = Libs.ResourcesLib.userRes("AccrualAm")
var deposit = User.getProperty("minertrx2")
if (inv.value() == 1) {
  Bot.sendMessage("*Succesfully Claimed 🎉: *" + 0.2891 * deposit + " *TRX*")
  Bot.sendMessage(
    "*🎉 Congratulations! Your Investment is now Over\n\n💰 Total Profit from Investment : 290%*"
  )
  inv.remove(1)
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(0.2891 * deposit)
  var depo = Libs.ResourcesLib.userRes("deposit")
  depo.add(-deposit)
  var profit = Libs.ResourcesLib.userRes("profit")
  profit.add(0.2891 * deposit)
} else {
  Bot.sendMessage("*Succesfully Claimed 🎉 : *" + 0.2891 * deposit + " *TRX*")
  //Bot.run({ command: "/accTRXF", run_after: 1 * 60 * 60 * 24 })
  inv.remove(1)
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(0.2891 * deposit)
  var profit = Libs.ResourcesLib.userRes("profit")
  profit.add(0.2891 * deposit)
}

