const http = require("http");
const { add, subtract, multiply } = require("./math");
// Create A Server

const server = http.createServer((req, res) => {
  console.log(add(2, 4));
  res.end("Hello, Chan Badsha Bhuiyan 🚀");
});

//  Server Lisning

server.listen(3000, () => {
  console.log("The server is listening on Port 3000");
});
