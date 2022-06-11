/*CMD
  command: Check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage({Libs.CoinPayments.apiCall({ fields: { cmd: "get_withdrawal_info"}})})
