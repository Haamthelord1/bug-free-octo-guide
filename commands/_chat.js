/*CMD
  command: /chat
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 1️⃣how to register?
CMD*/

var Photo = "https://t.me/photo_bin/13"
Api.sendPhoto({
photo: Photo,
caption: "*💎 To Register, \n\n▪︎Click On The Start Button 👍\n\n▪︎Choose Your Preferred Language.🇺🇸(or)🇪🇸\n\n▪︎That's All You've Registered Successfully ☺️. *",
parse_mode: "Markdown"})
