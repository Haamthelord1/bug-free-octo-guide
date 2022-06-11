/*CMD
  command: /you
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

var fet = user.telegramid
var jet = "@"+user.username
Bot.sendMessage("*Your Id Is:\n\n* "+"`"+fet+"`"+"\n\n*Message Id of the user\n\n*"+"*"+jet+"*"+"*\n\nTap To Copy ☝️*")
