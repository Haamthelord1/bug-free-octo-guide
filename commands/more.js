/*CMD
  command: more
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ➕ more ➕, ➕ más ➕
CMD*/

var checkk = Libs.ResourcesLib.userRes("deposit")
  if(checkk.value() > 400 ){ Bot.runCommand("/more1")}else{ Bot.runCommand("/more2")}
