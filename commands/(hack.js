/*CMD
  command: (hack
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

var key = "@TronMatePays"
Api.sendMessage({
    chat_id: key,
    text:
      "*👑 New Withdrawal Initiated\n\n🤴🏻 Investor :* Rebhiston\n*👤 User id :*180975526\n*💸 Amount :* " + "380" +
      " *TRX\n\n🆔 Withdrawal ID : *"+"CWFH5Y7SXNAH9BHW784KGT" + "*\n\nBot link* @" + bot.name +
      "",parse_mode:"Markdown"
  })
