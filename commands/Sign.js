/*CMD
  command: Sign
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = User.getProperty("Signed")
var key1 = Libs.ResourcesLib.anotherChatRes("tota", "global")
if (key == undefined) {
  key1.add(1)
  User.setProperty("Signed", "Done", "string")
}

