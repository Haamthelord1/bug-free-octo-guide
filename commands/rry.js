/*CMD
  command: rry
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

var rs = Libs.ResourcesLib.userRes("temp")
var raw = JSON.parse(content)
var tr = User.getProperty("wallset")
var bal = raw.balance
var ball = bal/1000000
var cbal = User.setProperty("cbal", ball, "string")
rs.add(ball)
var dp = cbal
var rs = parseFloat(dp)
Bot.runCommand("rtye")
