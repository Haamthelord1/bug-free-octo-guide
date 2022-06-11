/*CMD
  command: /Dash
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: *🇺🇸 - English Version*
  keyboard: ➕ DEPOSIT,💼 BALANCE ,🚀 WITHDRAW \n,💻STATS🎚,🇪🇸-Switch(Sp),💎Re-STAKE\n,♦️ FAQ's,🔹️CLAIM REWARDS🔹️\n📲MY PROFIT,👬 PROMOTE,👛WALLET\n➕ MORE ➕
  aliases: 🏡 back, ❌ cancel, 🇺🇸 english, 🇺🇸-switch(en), /start@tronmatebot
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*🚫 Error\n\nYou are Banned From Using this Bot*")
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage(
    "*🚫 Error\n\nBot is currently Under Maintenance\n\nWe will be back in a Few Hours, Thank you*"
  )
  return
}
var info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendKeyboard(
  "➕ DEPOSIT,💼 BALANCE ,🚀 WITHDRAW \n,💻STATS🎚,🇪🇸-Switch(Sp),💎Re-STAKE\n,♦️ FAQ's,🔹️CLAIM REWARDS🔹️\n📲MY PROFIT,👬 PROMOTE,👛WALLET\n➕ MORE ➕",
  "*Hey* " + info + ",\n\n*You're At The Menu Of 🎉*"
)
Api.sendSticker({ sticker: "https://t.me/Trxpayoutsnew/16" })

