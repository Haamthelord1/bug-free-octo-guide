/*CMD
  command: /withtrxq
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (amo >= 10 && amo <= 600) {
    Libs.CoinPayments.apiCall({
      fields: {
        cmd: "create_withdrawal",
        amount: amo,
        currency: "TRON",
        address: wallet,
        auto_confirm: 1
      },
      onSuccess: "/onSuccess"
    })
    balance.add(-amo)
    withdraw.add(+amo)
    userPayment.add(+amo)
  }
}

