/* 

  This script deletes all conversations. Convenient for quick clean up.
  Run the following command in console to execute it:
  $ node ./delete-conversations.sh

*/

require("dotenv").config()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

console.log("\x1b[32m accountSid ==>", accountSid, "\x1b[0m")
console.log("\x1b[32m authToken ==>", authToken, "\x1b[0m")

const client = require("twilio")(accountSid, authToken)

client.conversations.v1.conversations
  .list({ limit: 20 })
  .then((conversations) => {
    conversations.forEach((c) => {
      console.log(c.sid)
      c.remove()
    })
  })
