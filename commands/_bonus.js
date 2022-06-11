/*CMD
  command: \bonus
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

var last_run_at = User.getProperty("CreditTime")
var checkk = Libs.ResourcesLib.userRes("deposit")
var lilo = Bot.getProperty("total")
if(checkk.value() > 0) {
function onEnding(time){
  // can give bonus now
  //Bot.sendMessage("You have bonus now");
Bot.sendMessage("*Happy Investments 😊*");
  Bot.runCommand("/accTRXF")
  Bot.run({ command: "/message", run_after:1*60*60*24})
 //User.setProperty("CreditTime", Date.now(), "integer")
  // your other code here
  //..

  return true; // if false - cooldown is not restarted
}

function onWaiting(waitTime){
  // we have active cooldown
// var minutes = (Date.now() - last_run_at) / 1000 / 60
  //var minutes_in_day = 1 * 1440
//  var next = minutes_in_day - minutes
 // var wait_hours = Math.floor(next / 60)
 // next -= wait_hours * 60
//  var wait_minutes = Math.floor(next)
  //var seconds = Math.floor((next - wait_minutes) * 60)
  Bot.sendMessage("*🎁 Daily Rewards Are Not Ready To Claim Yet 🤷‍♀️\n\n You Get Notified 🔔 Within: " + waitTime/3600 + " Hours From Your Last Staking*" );
//  Bot.sendMessage(
     // "*Sorry,\n\n🔹️You can only Claim Rewards every 24 Hours\n\n🎉 You Will be able to Claim again After* \n" +"*"+
    //    wait_hours +"*"+
     //   " *HRS* " +"*"+
    //    wait_minutes+"*" +
    //    " *MIN* " +"*"+
     //   seconds +"*"+
    //    " *SEC*")
  Bot.sendMessage("*Please Wait For* " + waitTime /3600+ " *Hours From Your Last Investment*" );
}

Libs.CooldownLib.chat.watch({
  // you need name for cooldown
  name: "GemBonusCooldown",
  time: 1*60*60*24, // cooldown time, 60 secs - 1 minute
  onEnding: onEnding,
  onWaiting: onWaiting
})

// get current cooldown res
let cooldown = Libs.CooldownLib.chat.getCooldown("GemBonusCooldown");
cooldown.value(); // current cooldown in second
cooldown.set(1*60*60*24 + cooldown.value()) // add 60 sec to cooldown
} else{ Bot.sendMessage("*🔹️Sorry, No Active Stakings Found\n\n🔹️Press Deposit To Start A New Stake\n\n🔹️And Claim Rewards(28.91%) Daily For Every 100 Days*") }
