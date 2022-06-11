/*CMD
  command: 📞Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var support = User.getProperty("support")
var button = [{ title : "🗳 Support Group" , url : "https://t.me/tronangelfaqs" }],[{title : "📝 Write Here" , command : "writehere"}]]
Bot.sendInlineKeyboard(button , 
"*🤖 Last Question = "+support+"")
