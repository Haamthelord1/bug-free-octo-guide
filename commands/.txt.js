/*CMD
  command: .txt
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

var key = "@TronMateData"
  Api.sendMessage({
    chat_id: key,
    text:
      "*Hello World Welcome To Tron Mate Transactions*" +
      "\n\n*🤖 Bot* @" +
      bot.name +
      "",
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
