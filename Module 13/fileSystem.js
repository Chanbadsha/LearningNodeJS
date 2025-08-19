// const fs = require("fs");
const fs = require("fs").promises;

// Synchronous Way

// // Synchronous File write
// const text = 'Hello, my name is Chan Badsha'

// fs.writeFileSync('./test.txt',text)

// // Synchronous File Append

// const newText = 'Node.js is awesome!'

// fs.appendFileSync('./test.txt', `\n ${newText}`)

// // Synchronous check is file exist

// if (! fs.existsSync('./test.txt')) {
//     console.log("File not exist")
// }

// // Synchronous File Read
// const data = fs.readFileSync('./test.txt',{encoding: "utf-8"})

// console.log(data)

// Asynchronous Way

// // Asynchronous File write

const text = "Hello Async World , this is badsha";

fs.writeFile("./test.txt", text, (err, data) => {
  if (err) {
    console.log("Something error happend", err);
    return;
  } else {
    console.log("File written successfully.");
  }
});

// // Asynchronous File append

const appendText = "This is append text";
fs.appendFile("./test.txt", `\n ${appendText}`, (err) => {
  if (err) {
    console.log("Something error happend on append File", err);
    return;
  }
});

// // Asynchronous File read

const data = fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something error happend", err);
    return;
  } else {
    console.log(data);
  }
});




// 4. Using Promises with fs.promises
async function asyncFileOps() {
    try {
        await fs.writeFile("./test.txt", "Writing with fs.promises!");
        console.log("File written successfully.");

        const data = await fs.readFile("./test.txt", "utf8");
        console.log("File content:", data);

        await fs.appendFile("./test.txt", "\nAppending with fs.promises!");
        console.log("Data appended successfully.");
    } catch (err) {
        console.error("Error:", err);
    }
}

asyncFileOps();