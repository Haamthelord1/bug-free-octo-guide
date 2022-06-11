/*CMD
  command: /ch2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 2️⃣how to invest?
CMD*/

var Photo = "https://t.me/photo_bin/5"
Api.sendPhoto({
photo: Photo,
caption: "*♦️ To Start A New Deposit, \n\n▪︎Click On The 'Deposit' Button 👍\n\n▪︎Copy Your Unique Deposit Address 💌\n\n▪︎Send Any Amount Of TRX You Wish To Invest in @TronMateBot\nTo That Address From Your Wallet ✅.\n\n▪︎After Sending, \n🔹️Wait 2-5 Mins For The Investment To be Reflected On Your Tron Mate Account.*",
parse_mode: "Markdown"})
