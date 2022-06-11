/*CMD
  command: /calc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📲mis beneficios, 📲my profit
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
Bot.runCommand("/calf")
Bot.sendMessage("*》》🔰 Tron Profit Calculator 🔰《《\n\n♦️Calculate here your incoming profits!\n\n🔹️Send the amount of TRX To Calculate Your Profit \n\n》🔰 Calculadora de ganancias 🔰《\n\n♦️¡Calcule aquí sus beneficios entrantes! \n\n🔹️Envíe la cantidad de TRX que desea invertir *")
