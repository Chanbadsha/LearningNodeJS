const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
  if (req.url === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const todo = JSON.parse(data);

      const todos = JSON.parse(
        fs.readFileSync(filePath, { encoding: "utf-8" })
      );
      todos.push(todo);

      const newTodos = JSON.stringify(todos, null, 2);

      fs.writeFile(filePath, newTodos, (err) => {
        if (err) {
          console.log("Error happend on create todo", err);
        }
      });
    });

    // const todo = req.body;
    // console.log(todo);

    res.end("Todo created Succesfully");
  } else if (req.url === "/todos/update-todo" && req.method === "PATCH") {
    res.end("Todo update Succesfully");
  } else if (req.url === "/todos/delete-todo" && req.method === "DELETE") {
    res.end("Todo delete Succesfully");
  } else if (req.url === "/todos" && req.method === "GET") {
    const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(todos);
  } else {
    res.end("Todo Server is running");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is lisnening on port 5000");
});
