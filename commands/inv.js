/*CMD
  command: inv
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

var depo = User.getProperty("depowall")
var pap = User.getProperty("vip")
if(pap != "1"){
Bot.sendMessage("*Your Unique Vip Deposit Address 👇*")
Bot.sendMessage("*Tap To Copy 👇\n\n*"+"`"+ depo +"`")
Bot.sendMessage("*🎚Send Any Amount Greater Than 600 TRX To Upgrade Your Vip Level 👑\n\n⭐ Don't Worry , This Amount Will Be Added To Your Investments .") } else { Bot.sendMessage("*Your Unique Vip Deposit Address 👇*")
Bot.sendMessage("*Tap To Copy 👇\n\n*"+"`"+ depo +"`")
Bot.sendMessage("*🎚Send Any Amount Greater Than 2000 TRX To Upgrade Your Vip Level 👑\n\n⭐ Don't Worry , This Amount Will Be Added To Your Investments .") }
