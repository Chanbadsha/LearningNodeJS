const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo created Succesfully");
  } else if (req.url === "/todos/update-todo" && req.method === "PATCH") {
    res.end("Todo update Succesfully");
  } else if (req.url === "/todos/delete-todo" && req.method === "DELETE") {
    res.end("Todo delete Succesfully");
  } else if (req.url === "/todos" && req.method === "GET") {
    res.end("All todos");
  } else {
    res.end("Todo Server is running");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is lisnening on port 5000");
});
