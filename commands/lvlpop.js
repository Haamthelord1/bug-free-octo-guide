/*CMD
  command: lvlpop
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

var info =  user.first_name
var pap = User.getProperty("vip")
if(pap != "1"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🔰Hey Dear! "+ info +"\n🔰You're currently At \nVip Level 0 💝\n🔰A Deposit Greater Than 600 TRX 🐶 in A Single Stake Is Required,\nTo Upgrade Your Account To Next Level ✅\n\n🔰Happy Investments ☺!",
  show_alert: true
}) } else { Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🔰Hey Dear! "+ info +"\n🔰You're currently At \nVip Level 1 💝\n🔰A Deposit Greater Than 2000 TRX 🐶 in A Single Stake Is Required,\nTo Upgrade Your Account To Next Level ✅\n\n🔰Happy Investments ☺!",
  show_alert: true}) }
