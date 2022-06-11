/*CMD
  command: /FF
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
  Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances"
    },
    onSuccess: "/oninf"
  })
} else {
  return
}

