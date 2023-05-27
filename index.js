const querystring = require("querystring");
const fetch = require("node-fetch");
require("dotenv").config();

const loveMessages = [
  "You are the most beautiful girl I've ever seen.",
  "I cherish every moment I spend with you.",
  "You have a smile that could light up the world.",
  "Being with you makes me the happiest person alive.",
  "You are the reason my heart beats faster.",
  "You make my life complete.",
  "I am grateful for your love and affection.",
  "You are the epitome of grace and elegance.",
  "Loving you is the best decision I've ever made.",
  "You are the queen of my heart.",
  "Your laughter is like music to my ears.",
  "I fall in love with you more every single day.",
  "You are my sunshine on the cloudiest days.",
  "I am incredibly lucky to have you by my side.",
  "You bring out the best in me.",
  "You are the most amazing girl I've ever known.",
  "I'm mesmerized by your beauty, both inside and out.",
  "You make my world a better place.",
  "I love you more than words can express.",
  "You are my forever and always.",
  "Don't ever forget i love you",
  "baby",
  "baby",
  "darling",
  "Sweetheart",
  "Darling",
  "Lovebug",
  "Honey",
  "Sugar",
  "Angel",
  "Princess",
  "Baby",
  "Cupcake",
  "Sweetie",
  "Gorgeous",
  "Beautiful",
  "Sunshine",
  "Buttercup",
  "Dearest",
  "Lovebird",
  "Sweet Pea",
  "Cherry",
  "Beloved",
  "Treasure",
];

const randomIndex = Math.floor(Math.random() * loveMessages.length);
const message = loveMessages[randomIndex];

var options = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: querystring.stringify({
    token: process.env.API_TOKEN,
    to: process.env.RECIPIENT_PHONE,
    body: message,
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

const host = "0.0.0.0";

setInterval(async () => send(), 960000);

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Whatsapp Api ");
});

server.listen(4000, host, () => {
  console.log("server running");
});
