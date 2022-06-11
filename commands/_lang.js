/*CMD
  command: /lang
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💸
  keyboard: 🇺🇸 English \n 🇪🇸 Spanish
  aliases: language
CMD*/

User.setProperty("Amo", message, "string")
var text = User.getProperty("Amo")
if (text == "🇺🇸 English") { Bot.sendMessage("Welcome to English Version Of Tron Angel"),Bot.runCommand("/Dash") } else if (text == "🇪🇸 Spanish") { Bot.sendMessage("Bienvenido a la versión en español de Tron Angel"),Bot.runCommand("/Dashsp") } else { Bot.sendMessage("*Please Select From the Options Below 😊\nTry Again\nSeleccione una de las opciones siguientes 😊 \ nVuelva a intentarlo*")
Bot.runCommand("/lang") }
