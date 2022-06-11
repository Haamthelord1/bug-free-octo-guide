/*CMD
  command: /onError
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amo = User.getProperty("Amo")
var history = User.getProperty("historyW")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"

if (history == undefined) {
  var newh =
    "🔹 Withdrawn Amount : " +
    amo +
    " TRX\n📆 DATE : " +
    time +
    "\n`⚠ Successful `\n\n"
  User.setProperty("historyW", newh, "string")
} else {
  var nwh =
    "🔹 Withdrawn Amount : " +
    amo +
    " TRX\n📆 DATE : " +
    time +
    "\n`⚠ Successful `\n\n"
  var toal = nwh + history
  User.setProperty("historyW", toal, "string")
}

