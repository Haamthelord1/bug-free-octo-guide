/*CMD
  command: /refs
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

// Automatic fix
var refList
var bot = "https://t.me/TronMateBot?start=" + user.telegramid
// Automatic fix
var refList

// Automatic fix
var refList

// Automatic fix
var refList

// Automatic fix
var refList

var i

var lib = Libs.ReferralLib

refList = Libs.ReferralLib.currentUser.refList.get()

var msg
if (refList.length > 0) {
  msg = "*Total referrals :* " + refList.length + "\n"
  for (i in refList) {
    user = refList[i]
    msg += "\n👤 " + user.first_name + " @" + user.username + ""
  }
} else {
  //Bot.sendMessage("*Sorry 🥲\n\n❌You don't have any Valid Referral Yet\n\n🔹️Don't Worry, Just Share Your Link To Your Friends And Become A Millionaire Today! ✅ \n\n🔶️Your Referral Link 👇\n\n*"+ "`" + bot + "`" +"\n\n🔹️Don't Lose Hope, You Can Do It!")
  var Photo = "https://t.me/photo_bin/4"
Api.sendPhoto({
photo: Photo,
caption: "*Sorry 🥲\n\n❌You don't have any Valid Referral Yet\n\n🔹️Don't Worry, Just Share Your Link To Your Friends And Become A Millionaire Today! ✅ \n\n🔶️Your Referral Link 👇\n\n"+ "`" + bot + "`" +"\n\nTap To Copy 👆\n\n🔹️Don't Lose Hope, You Can Do It!.*",
parse_mode: "Markdown"})
}

