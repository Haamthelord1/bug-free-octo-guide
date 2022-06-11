/*CMD
  command: /bon
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔹️claim rewards🔹️, 🔹️reclamar recompensa🔹️
CMD*/

var last_run_at = User.getProperty("CreditTime")
var checkk = Libs.ResourcesLib.userRes("deposit")
var lilo = Bot.getProperty("total")
if(checkk.value() > 0) {
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*🔹️Your Daily Staking Rewards Are Not Ready To Claim\n\n🔹️You'll be notified When It's Ready To Claim\n\nPlease Wait For.⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("*Happy Investments 😊*");
  Bot.runCommand("/accTRXF")
  Bot.run({ command: "/message", run_after:1*60*60*24}) } else{ Bot.sendMessage("*🔹️Sorry, No Active Stakings Found\n\n🔹️Use /Deposit@TronMateBot To Start A New Stake\n\n🔹️And Claim Rewards(28.91%) Daily For Every 100 Days*") }
