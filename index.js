const querystring = require("querystring");

var options = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: querystring.stringify({
    token: "96ibrpgabczdzxeo",
    to: "+233550028512",
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

setInterval(async () => send(), 960000);
