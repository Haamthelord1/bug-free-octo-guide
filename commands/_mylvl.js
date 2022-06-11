/*CMD
  command: /mylvl
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🎚my level🎚
CMD*/

Bot.sendInlineKeyboard(
      [{ title: "Check My Level ✅", command: "lvlpop" }],
      "*Please Click On The Button Below To Check Your Vip Level 🎉*")
