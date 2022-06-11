/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
}
var id = message_id
var lib = Libs.ReferralLib
var reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()


var msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var x = [[{title:"⌛️ Generating Refs Report ⌛️",command:"/Dash"}]]
Bot.editInlineKeyboard(x,id)
Bot.runCommand("/refs")

let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
list.order_ascending = false
list.page = 1
list.per_page = 10

var items = list.get();
//Bot.inspect(items);

var msg = 'Top list: ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + "." + 
    Libs.commonLib.getLinkFor(prop.user) + ": 👨" +
    String(prop.value)
}

Bot.sendMessage(msg);
