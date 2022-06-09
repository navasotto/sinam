
const axios = require("axios");

async function sendMessage(msg) {
  const baseMsg = "hello from epidemic tracker, message:";
  return `${baseMsg} ${msg}`;

}
module.exports = {
  sendMessage,
};

