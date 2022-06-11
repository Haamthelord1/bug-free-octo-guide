/*CMD
  command: /message
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

var deposit = User.getProperty("minertrx2")
var st = 0.2891*deposit
Bot.sendMessage("*Your Daily Staking Rewards Are Ready To Claim\nClaim Them Now!*")
Api.sendPhoto({
photo: "https://mobontap.sirv.com/PicsArt_02-10-05.54.38.jpg?text="+st+"&text.font.weight=extra-bold&text.size=46&text.font.style=italic&text.outline.width=10&text.outline.color=000000&text.position=center&text.font.family=Arial&text.color=FFFFFF&text.outline.blur=3",
caption: "*🎉 Congrats! Your Daily Staking Rewards Are Ready !\n\nClaim Them Now! ✅*",
parse_mode: "markdown",
})
