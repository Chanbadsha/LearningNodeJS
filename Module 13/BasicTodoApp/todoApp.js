const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todos.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathName = url.pathname;

  // Create a single todo
  if (pathName === "/todos/create-todo" && req.method === "POST") {
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

    res.end("Todo created Succesfully");
  }

  // Update a single todo
  else if (pathName === "/todos/update-todo" && req.method === "PATCH") {
    const id = url.searchParams.get("id");

    let updateData = "";
    req.on("data", (chunk) => {
      updateData = updateData + chunk;
    });

    req.on("end", () => {
      // console.log(updateData);
      const body = JSON.parse(updateData);
      // console.log(body);
      const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parsedTodos = JSON.parse(todos);
      let updateTodo = parsedTodos.findIndex(
        (todo) => todo.id === JSON.parse(id)
      );

      parsedTodos[updateTodo] = {
        ...parsedTodos[updateTodo],
        ...body,
      };
      const updateTodos = JSON.stringify(parsedTodos, null, 2);
      fs.writeFileSync(filePath, updateTodos);
    });

    res.end("Todo update Succesfully");
  }
  // Delete a single todo
  else if (pathName === "/todos/delete-todo" && req.method === "DELETE") {
    res.end("Todo delete Succesfully");
  }
  // Get All Todo
  else if (pathName === "/todos" && req.method === "GET") {
    const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(todos);
  }
  // Get single todo
  else if (pathName === "/todo" && req.method === "GET") {
    const id = url.searchParams.get("id");

    const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedTodos = JSON.parse(todos);
    // console.log(parsedTodos);
    const todo = parsedTodos.find((todo) => todo.id === JSON.parse(id));
    // console.log(JSON.stringify(todo));

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todo));
  } else {
    res.end("Todo Server is running");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is lisnening on port 5000");
});
