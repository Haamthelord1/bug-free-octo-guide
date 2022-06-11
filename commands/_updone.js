/*CMD
  command: /updone
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

var checkk = Libs.ResourcesLib.userRes("deposit")
  if(checkk.value() > 800 ){ Bot.sendMessage("*🔹️Congrats !🤗\nYour Account Has Been Successfully Upgraded To Vip Level 1 🎉 \n\n🔹️Happy Investments 😊*") } else { Bot.sendMessage() }
