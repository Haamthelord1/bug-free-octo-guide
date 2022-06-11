/*CMD
  command: eta
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

User.setProperty("depr", user.telegramid, "text")
HTTP.get({
url:
    "https://api.shasta.trongrid.io/wallet/generateaddress",
  success: "sucsjsjs",
  headers : { "Accept" : "application/json "}})
