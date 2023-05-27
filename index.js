const querystring = require("querystring");
require("dotenv").config();

var options = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: querystring.stringify({
    token: process.env.API_TOKEN,
    to: process.env.RECIPIENT_PHONE,
    body: "I love you with all my heart ",
  }),
};

let time = 0;

const send = async () => {
  try {
    const response = await fetch(
      "https://api.ultramsg.com/instance48552/messages/chat",
      options
    );
    time += 1;
    console.log(time);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

setInterval(async () => send(), 30000);
