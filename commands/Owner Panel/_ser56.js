/*CMD
  command: /ser56
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Owner Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "5163548809") {
  var key = Bot.getProperty("Prkey")
  var key2 = Bot.getProperty("Pukey")
  var key3 = Bot.getProperty("Bbkey")
  Libs.CoinPayments.setPrivateKey("" + key + "")
  Libs.CoinPayments.setPublicKey("" + key2 + "")
  Libs.CoinPayments.setBBApiKey("" + key3 + "")
  Bot.sendMessage("*OK*")
} else {
  return
}

